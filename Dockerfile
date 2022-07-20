FROM node:18.3.0-slim

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 9999

CMD ["yarn", "start"]
