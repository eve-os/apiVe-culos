'use script'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const Veiculo = require('./models/veiculo');
const cors= require('cors');


//mongodb+srv://EvelinOliveira:<password>@ndstr-gxnpt.azure.mongodb.net/test?retryWrites=true&w=majority
//conecta ao banco
mongoose.connect('mongodb+srv://EvelinOliveira:WeQThuZ5ltkA5u3w@ndstr-gxnpt.azure.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true });


//Carrega as rotas
const indexRoute = require('./routes/index-route');
const veiculoRoute = require('./routes/veiculo-route');

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acess-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/veiculos', veiculoRoute);


module.exports = app;