FROM node:14

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./  
RUN npm install web-vitals
RUN npm install


COPY . .

CMD ["npm", "start"]
EXPOSE 3000
