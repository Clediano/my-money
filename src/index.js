const path = require('path');
const express = require('express');

const app = express();

//arquivos estáticos
app.use(express.static('public'));

//inicia o servidor
app.listen(process.env.PORT || 5000);