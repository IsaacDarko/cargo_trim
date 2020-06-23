const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./config/db.js');

const compartment1 = require('./routes/apis/compartment1');
const compartment2 = require('./routes/apis/compartment2');
const compartment3 = require('./routes/apis/compartment3');
const compartment4 = require('./routes/apis/compartment4');
const compartment5 = require('./routes/apis/compartment5');
const compartment6 = require('./routes/apis/compartment6');
const compartment7 = require('./routes/apis/compartment7');
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


app.use('/api/compartment1', compartment1);
app.use('/api/compartment2', compartment2);
app.use('/api/compartment3', compartment3);
app.use('/api/compartment4', compartment4);
app.use('/api/compartment5', compartment5);
app.use('/api/compartment6', compartment6);
app.use('/api/compartment7', compartment7);
app.use('/api/bagfwd', baggfwd);
app.use('/api/bagaft1', baggaft1);
app.use('/api/bagaft2', baggaft2);
app.use('/api/wardrobe', wardrobe);
app.use('/api/fuel', fuel);
app.use('/api/observer', observer);




const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening to port ${PORT}`));