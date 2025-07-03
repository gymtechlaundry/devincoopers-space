FROM nginx:alpine
COPY ./dist/devincoopers-space /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf