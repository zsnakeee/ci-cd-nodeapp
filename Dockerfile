FROM node:alpine

WORKDIR /app
COPY ./src/* /app/
RUN npm install
CMD ["npm", "start"]