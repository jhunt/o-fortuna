FROM node
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
ENTRYPOINT ["/bin/sh", "-c", "node index.js"]
