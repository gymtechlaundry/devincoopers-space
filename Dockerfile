# Stage 1: Build Angular App
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Add build arg to allow dynamic environment config
ARG BUILD_CONFIG=development

# Build with the given config (default is production)
RUN npx ng build devincoopers-space --configuration $BUILD_CONFIG

# Stage 2: Serve with NGINX
FROM nginx:alpine

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Clear old files and copy built app
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/devincoopers-space/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
