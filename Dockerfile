# Stage 1: Build not needed since we're uploading dist
FROM nginx:alpine

# Replace default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular app
COPY dist/devincoopers-space/browser /usr/share/nginx/html

EXPOSE 80