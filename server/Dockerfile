# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.2.0

FROM node:22-bullseye-slim

WORKDIR /usr/src/app

ENV NODE_ENV production

RUN corepack enable

# Copy package.json so that package manager commands can be used.
COPY package.json .

COPY . .

RUN pnpm install

# Expose the port that the application listens on.
EXPOSE 3380


# Run the application.
CMD pnpm prod
