# Generated by meteor-tupperware quickstart script 0.1.2
# https://github.com/chriswessels/meteor-tupperware

# Inherit from chriswessels/meteor-tupperware image
FROM quay.io/chriswessels/meteor-tupperware

# The maintainer of your app image
MAINTAINER Alexsandro

# (optional) Bake runtime options into your image
ENV MONGO_URL="mongodb://localhost:27017/moboko" ROOT_URL="http://teste.moboko.com"

#STEPS

# docker run --name my-local-mongo -v mongo-data:/data/db -p 27017:27017 -d mongo

# docker ps

# docker inspect bc32dbe7a85f

# docker run --rm -e MONGO_URL=mongodb://172.17.0.2:27017/moboko -p 8080:80 moboko

# docker exec -ti bc32dbe7a85f /bin/bash

# mongo

# use moboko

# db.banheiros.insert( { nome: “B1”, status: 0, ordem: 1, sexo:”m” } )
