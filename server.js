const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./config/db.js');

const pax1 = require('./routes/apis/pax1');
const pax2 = require('./routes/apis/pax2');
const pax3 = require('./routes/apis/pax3');
const pax4 = require('./routes/apis/pax4');
const pax5 = require('./routes/apis/pax5');
const pax6 = require('./routes/apis/pax6');
const pax7 = require('./routes/apis/pax7');
const user = require('./routes/apis/user');
const fuel = require('./routes/apis/fuel');
const baggaft1 = require('./routes/apis/bagaft1');
const baggaft2 = require('./routes/apis/bagaft2');
const baggfwd = require('./routes/apis/bagcomptfwd');
const wardrobe = require('./routes/apis/wardrobe');
const observer = require('./routes/apis/observer');

//BodyParser Middleware 
app.use(bodyParser.json());

//Test db connection
db.authenticate()
.then(()=> console.log('Database connected successfully'))
.catch(err => console.log(`Error :+ ${err}`))


app.use('/api/pax1', pax1);
app.use('/api/pax2', pax2);
app.use('/api/pax3', pax3);
app.use('/api/pax4', pax4);
app.use('/api/pax5', pax5);
app.use('/api/pax6', pax6);
app.use('/api/pax7', pax7);
app.use('/api/bagfwd', baggfwd);
app.use('/api/bagaft1', baggaft1);
app.use('/api/bagaft2', baggaft2);
app.use('/api/wardrobe', wardrobe);
app.use('/api/fuel', fuel);
app.use('/api/observer', observer);




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening to port ${PORT}`));