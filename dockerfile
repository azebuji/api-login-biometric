FROM node:16.14.2
WORKDIR /api-socket
COPY . .
RUN npm install
EXPOSE 3001 
CMD ["npm","run", "execute"]