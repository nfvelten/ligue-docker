FROM node:14.16.0-alpine3.13

WORKDIR /app

COPY . ./

RUN yarn install

EXPOSE 3001

CMD ["yarn", "dev"]