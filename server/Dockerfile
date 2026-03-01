# =============================================== BUILDER STAGE =========================================================
FROM  node

WORKDIR /app

COPY package.*   /app/

RUN npm i

COPY . .

CMD [ "node", "server.js"]

