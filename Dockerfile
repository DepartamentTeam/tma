FROM nginx:latest   

COPY ./config /etc/nginx/sites-available/default
COPY ./dist /usr/share/nginx/html

EXPOSE 8080

