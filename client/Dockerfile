# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.2.0

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

RUN corepack enable

COPY package.json .
COPY . .
RUN pnpm install

RUN pnpm build


# Expose app port
EXPOSE 4173

# Use production node environment by default.
ENV NODE_ENV production

# Run the application.
CMD pnpm preview
