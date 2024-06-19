FROM node:20-slim

WORKDIR /app

COPY . .

RUN npm install

RUN npm run backend-build

RUN npm run build

CMD ["npm", "run", "start"]

