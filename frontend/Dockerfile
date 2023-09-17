FROM node:18 AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html
