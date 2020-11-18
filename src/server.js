const express = require('express');
const routes = require('./routes');
const cors = require('cors');

app.use(cors());  // colocar níveis de seguranaça 

const app = express();
app.use(express.json());


app.use(routes);


app.listen(3001);