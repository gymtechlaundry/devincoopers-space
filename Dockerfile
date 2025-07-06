# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build devincoopers-space --configuration production

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Remove default nginx site
RUN rm -rf /usr/share/nginx/html/*

# Replace with your actual Angular dist folder name below:
COPY --from=builder /app/dist/devincoopers-space /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]