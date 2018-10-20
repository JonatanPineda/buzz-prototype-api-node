require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const busesRoutes = require('./routes/buses')
const routesRoutes = require('./routes/routes')
const stopsRoutes = require('./routes/stops')

mongoose.connect(
  process.env.DB_CONN,
  {
    useNewUrlParser: true
  }
)

mongoose.Promise = global.Promise

app
  .use(morgan('dev'))
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  })
  .use('/buses', busesRoutes)
  .use('/stops', stopsRoutes)
  .use('/routes', routesRoutes)


module.exports = app
