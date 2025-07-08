# Stage 1: Build Angular app
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build devincoopers-space --configuration production

# Stage 2: Serve with full NGINX (not Alpine)
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

# Custom NGINX config (with mime.types)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular app output
COPY --from=builder /app/dist/devincoopers-space/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]