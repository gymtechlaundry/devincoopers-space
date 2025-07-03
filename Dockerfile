# Stage 1: Build Angular App
FROM node:24.2.0 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build:prod

# Stage 2: Serve Angular App with NGINX
FROM nginx:alpine

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build from the correct folder
COPY --from=builder /app/dist/devincoopers-space/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]