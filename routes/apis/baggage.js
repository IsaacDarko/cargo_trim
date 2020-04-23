const express = require('express');
const router = express.Router();
//importing the baggage models
const bagg1 = require('../../models/Bagg1');
const bagg2 = require('../../models/Bagg2');
const baggfwd = require('../../models/Baggfwd');


//@route GET api/bagcomptdata
//@desc Gets all baggage compartment data
//@access Private

router.get('/', (req, res) => {
     
});
