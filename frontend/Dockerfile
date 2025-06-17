# Dockerfile
FROM node:20

# npmアップデート（ここを追加）
RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
