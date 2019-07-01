const path = require('path');
const ForestAdmin = require('forest-express-sequelize');
const { sequelize } = require('./models');
const secret = require('../config/secret');
const express = require('express');

const app = express();

app.use(require('forest-express-sequelize').init({
    modelsDir: __dirname + '/models',
    envSecret: secret.FOREST_ENV_SECRET,
    authSecret: secret.FOREST_AUTH_SECRET,
    sequelize: sequelize,
}));

//arquivos estáticos
app.use(express.static('public'));

//inicia o servidor
app.listen(process.env.PORT || 5000);