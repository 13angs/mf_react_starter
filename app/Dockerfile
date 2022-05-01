FROM node:16-alpine3.12 as builder

LABEL MAINTAINER="13angz" \
    name="Romdon Uma" \
    version="0.0.1"

# change the apt-get bahavior to nointeractive
ARG DEBIAN_FRONTEND=nointeractive

WORKDIR /app

# comment this when 
# lerna ERR! npm run build exited 127
# COPY ./package*.json ./
# COPY ./lerna.json ./

COPY ./ ./

RUN npm install

RUN npm run build

FROM nginx:1.21.6-alpine

RUN apk update && \
    apk add --no-cache tzdata && \
    rm -rf /usr/share/nginx/html/* && \
    rm -rf /etc/nginx/conf.d/* && \
    mkdir /usr/share/nginx/html/fragment

ENV TZ=Asia/Bangkok

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/container/dist ./
COPY --from=builder /app/fragment/dist ./fragment

COPY ./config/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


