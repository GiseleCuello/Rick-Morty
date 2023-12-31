const express = require ('express')
const server = express()
const routes = require ('../routes/index')
//const {router} = require ('../src/middleware')
//const middleware = express.json()
//const cors = require ('cors')


    //server.use(cors());
    //server.use(router);  
    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
           'Access-Control-Allow-Headers',
           'Origin, X-Requested-With, Content-Type, Accept'
        );
        res.header(
           'Access-Control-Allow-Methods',
           'GET, POST, OPTIONS, PUT, DELETE'
        );
        next();
     });
    //server.use(middleware);
    server.use(express.json())
    server.use('/rickandmorty', routes)

    module.exports = server;