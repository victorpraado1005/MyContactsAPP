const express = require('express');

const routes = require('./routes');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('Server started at http://localhost:3001'));
