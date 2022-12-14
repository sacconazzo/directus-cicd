FROM node:16.17.0-alpine3.16

RUN apk add --update --no-cache netcat-openbsd mysql-client ssmtp tzdata python3 py3-pip g++ make

RUN npm install -g pnpm
RUN npm install -g serve

WORKDIR /workspace

RUN mkdir -p \
    directus/extensions \
    directus/uploads

COPY package.json .
COPY pnpm-*.yaml ./

COPY directus/package.json ./directus/
COPY packages/utilities/package.json ./packages/utilities/
COPY frontend/package.json ./frontend/

RUN pnpm install --prod

COPY . ./

RUN pnpm --parallel build

EXPOSE 8080 5000

CMD pnpm start
