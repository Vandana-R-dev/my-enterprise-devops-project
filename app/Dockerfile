FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY app.js .
ENV APP_VERSION=dev
EXPOSE 8080
CMD ["node", "app.js"]

