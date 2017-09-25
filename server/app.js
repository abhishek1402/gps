require('dotenv').config();
import express from 'express';
import path from 'path';
var app = express();


//var port = process.env.port || 3000
var port = 4000
var conn = require('./config/database')

require('./config/config.js').default(app);
require('./routes').default(app);
console.log(__dirname + '/uploads')
app.use("/uploads", express.static(__dirname + '/uploads'));
app.listen(port);
console.log(`server started on ${port}`)

