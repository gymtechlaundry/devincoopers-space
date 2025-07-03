# Stage 1: Build Angular App
FROM node:24.2.0 as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration production

# Stage 2: Serve Angular App with NGINX
FROM nginx:alpine

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build from the correct folder
COPY --from=builder /app/dist/devincoopers-space /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]