FROM node:9

MAINTAINER kjbreil

RUN apt update && apt install -y libpq-dev && rm -fR /var/lib/apt/lists

RUN mkdir -p /app

WORKDIR /app

RUN git clone https://github.com/kjbreil/rustBot.git /app

RUN npm install

RUN npm install -g nodemon

# COPY config.js /app

EXPOSE 8080

CMD ["nodemon", "/app/app.js"]
