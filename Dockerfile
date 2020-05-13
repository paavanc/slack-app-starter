FROM node:13.3.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
