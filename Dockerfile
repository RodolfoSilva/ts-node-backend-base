# --------------> The builder image

FROM node:14.15.4-alpine3.11 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY tsconfig*.json ./
COPY src ./src

RUN npm run build

# --------------> The production dependencies image

FROM node:14.15.4-alpine3.11 AS production_dependecies

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

# --------------> The production image

FROM node:14.15.4-alpine3.11

RUN apk add dumb-init

ENV NODE_ENV production

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=production_dependecies /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/build .

CMD ["dumb-init", "node", "-r", "dotenv/config", "./main/server.js"]
