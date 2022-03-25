const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const {setHeaders} = require('./middleware/setHeaders');
const db = require('./models');

const PORT = process.env.PORT || 3005;
if (!process.env.PORT) process.env.PORT = PORT;

const app = express();

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(cors());
app.use(setHeaders);

app.use('/api/users', require('./routes/users')(db));
app.use('/api/products', require('./routes/products')(db));
app.use('/api/orders', require('./routes/orders')(db));
app.use('/api/checkout', require('./routes/checkout')(db));

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
