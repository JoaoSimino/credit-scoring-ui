FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production --base-href=/

FROM nginx:stable-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/credit-scoring-ui/browser /usr/share/nginx/html
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html
COPY Docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
