FROM alpine:3.6

LABEL "br.com.construtechventures.vendor"="Construtech Ventures Engineering" \
       maintainer="Construtech Ventures Engineering <devops@construtectventures.com.br>" \
       maintainer="Domingos Teruel <mingomax@dteruel.net.br>" \
       version="1.2" \
       description="MongoDB Database image from Alpine."

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8

ENV TIMEZONE UTC
ENV TZ=${TIMEZONE}

# Installing dependencies
RUN set -eux; \
    apk update; \
    apk upgrade; \
    apk add --no-cache mongodb mongodb-tools; \
    mkdir -p /data/db;

# Copy Scripts and set permissions
COPY entrypoint.sh /entrypoint.sh
COPY mongod.conf /etc/mongod.conf

EXPOSE 27017 28017

VOLUME [ "/data/db" ]

# Command to run
ENTRYPOINT ["/entrypoint.sh"]

CMD ["mongod", "--bind_ip", "0.0.0.0"]
