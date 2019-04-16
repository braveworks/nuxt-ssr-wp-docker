FROM node:10.14.1-alpine

# cd /app
WORKDIR /app

RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install -g vue-cli && \
    npm install -g yarn

ENV HOST 0.0.0.0
EXPOSE 8000
