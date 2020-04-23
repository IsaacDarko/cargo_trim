const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax1 = require('../../models/PaxCompt1');
const Pax2 = require('../../models/PaxCompt2');
const Pax3 = require('../../models/PaxCompt3');
const Pax4 = require('../../models/PaxCompt4');
const Pax5 = require('../../models/PaxCompt5');
const Pax6 = require('../../models/PaxCompt6');
const Pax7 = require('../../models/PaxCompt7');


//@route GET api/pax
//@desc Gets all passenger compartment data
//@access Private*

router.get('/', async function (req, res) {
    try{
        //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        await Passenger.findAll()                     
        .then((paxdata)=>{
            res.status(200).json(paxdata); //returns a json response containing the requested products details
        })
    }
    catch(err){
        console.log(err);  //logs all unhandled errors to the console
    }
});

router.get('/compt', async function (req, res) {
    try{
        const compt = req.compt
        const nopax = req.pax;
        //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        await Passenger.find({
            attributes:[ 'weight'],
            where: { 
                numberofpax : nopax
             },                       
        })                     
        .then((weight)=>{
            console.log(weight);
            Passenger.findAll({
                where : [
                    { weight },
                    sequelize.col('compt')
                ]
            })
        })
    }
    catch(err){
        console.log(err);  //logs all unhandled errors to the console
    }
});


module.exports = router;