FROM node:7
WORKDIR /app
COPY package.json /app
RUN nmp install
COPY . /app
CMD node server.js
EXPOSE 8000