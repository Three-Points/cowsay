FROM node:14 as base

WORKDIR /app
COPY package*.json ./
COPY ./src ./src

FROM base as production
RUN npm ci
CMD ["npm","start"]
