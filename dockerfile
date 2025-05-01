# Dockerfile di root repo
FROM node:18

WORKDIR /app

COPY SociollaServer/package*.json ./ 
RUN npm install

COPY SociollaServer/ .

EXPOSE 5000

CMD ["node", "index.js"]
