FROM node:21-bookworm as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25-bookworm
COPY --from=build /app/dist /usr/share/nginx/html
