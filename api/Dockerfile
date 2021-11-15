FROM node:latest
WORKDIR /usr/app
COPY  package*.json ./
RUN npm install
EXPOSE 3000
COPY ./ ./
ENV PORT 3000
CMD ["npm", "start"]
