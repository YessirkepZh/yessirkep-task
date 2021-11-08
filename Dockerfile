FROM  docker-proxy.choco.kz/node:14.15.5-alpine

COPY . /client
WORKDIR /client

RUN sed -i 's/dl-cdn.alpinelinux.org/mirror.neolabs.kz/g' /etc/apk/repositories \
    && apk update && apk add bash \
    && npm i

CMD ["./entrypoint.sh"]
