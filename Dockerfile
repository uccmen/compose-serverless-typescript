FROM node:8

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

COPY serverless.yml /usr/src/app
COPY webpack.config.js /usr/src/app
COPY src src

VOLUME /usr/src/app

CMD ["yarn", "install", "--pure-lockfile"]
