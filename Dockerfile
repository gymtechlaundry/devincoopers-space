# Stage 1: Build Angular app
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build devincoopers-space --configuration production

# Stage 2: Serve with NGINX
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Use the actual output path
COPY --from=builder /app/dist/devincoopers-space/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]