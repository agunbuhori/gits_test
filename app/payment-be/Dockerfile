FROM node:10-alpine

RUN apk add --no-cache bash
RUN apk add --no-cache coreutils

COPY test/docker/package*.json test/docker/wait-for-it.sh /opt/setup/

COPY db /opt/setup/db

WORKDIR /opt/setup

VOLUME /opt/setup/target

RUN chmod +x ./wait-for-it.sh

RUN npm install