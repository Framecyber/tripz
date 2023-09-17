FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g npm@10.1.0
RUN npm run build
RUN ls

### STAGE 2: Run ###
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
