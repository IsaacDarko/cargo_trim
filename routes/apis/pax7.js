const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax7 = require('../../models/PaxCompt7');


//@route GET api/pax7
//@desc Gets all passenger compartment 7 data
//@access Private*
router.post('/', (req, res) => {
    const numberofpax = req.body.pax;
    if( numberofpax !== '' && numberofpax <= 8 && numberofpax !== 0){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax7.findOne({
            where: { numberofpax },                       
        })                     
        .then((pax7Data)=>{
            console.log(pax7Data);
            const cargoWeight = pax7Data.weight;
            const cargoId = cargoWeight * 0.022;
            const cargoIndex = cargoId.toFixed(1);
            res.status(200).json({
                    pax : pax7Data.numberofpax,
                    weight : pax7Data.weight,
                    index : cargoIndex                
            })                  
        })



    //handling inputs that are empty strings
    }else if ( numberofpax === '' ){
        res.status(200).json({
            index: 0,
            weight: 0,
            message: 'No passengers assigned'
        })



    //handling invalid inputs
    }else{
        return(
            res.status(200).json({
                index: 0,
                weight: 0,
                message : 'Your input for this field falls outside the valid range'
            })
        )
    }
    
});



module.exports = router;