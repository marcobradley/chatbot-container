FROM node:21-alpine3.19
ENV OPENAI_API_KEY ""
WORKDIR /app
COPY . .
RUN npm install express axios body-parser

ENTRYPOINT [ "node", "index.js" ]
    


