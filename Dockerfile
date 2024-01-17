FROM node:alpine

# RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app

COPY package.json  ./

# USER node

RUN npm i install 

COPY  . .

EXPOSE 3000
