# Teslo Shop
TesloShop is a web application that simulates the Tesla's Shop website.
## To run the DB use
```
docker-compose up -d
```

* -d stands for detached

## Configure environment variables
Rename __.env.template__ file to __.env__
* Local MONGO URL: 
```
MONGO_URL=mongodb://localhost:27017/teslodb
```

* Rebuild modules and start Next
```
yarn install
yarn dev
```

## Fill database with prop data
```
GET http://localhost:300/api/seed
```

