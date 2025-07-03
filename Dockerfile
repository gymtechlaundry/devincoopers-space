# Stage 1: Build Angular app
FROM node:24.2.0 AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of your app and build it
COPY . .
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Copy compiled Angular app to NGINX html folder
COPY --from=builder /dist/devincoopers-space /usr/share/nginx/html

# Remove default nginx config and replace with custom one if needed
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]