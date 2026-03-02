# ============================================BUILDER STAGE==========================================================
FROM node AS builder
WORKDIR /app

COPY package.* /app/
RUN npm install

COPY . .
RUN npm run build

# ============================================PRODUCTION STAGE==========================================================

FROM nginx:alpine AS prod

# version1
# COPY --from=builder  /app/dist   /var/www/html    --> not working ut in ec2 a single page works         
# version2
COPY --from=builder  /app/dist   /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]