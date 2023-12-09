FROM node:21-bookworm as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG DOMAIN_NAME
ENV VITE_DOMAIN_NAME ${DOMAIN_NAME}
RUN npm run build

FROM nginx:1.25-bookworm
COPY --from=build /app/dist /usr/share/nginx/html
