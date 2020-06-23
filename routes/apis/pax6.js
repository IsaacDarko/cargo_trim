const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax6 = require('../../models/PaxCompt6');

 
//@route GET api/pax6
//@desc Gets all passenger compartment 6 data
//@access Private*
router.post('/', (req, res) => {
    const numberofpax = req.body.pax;
    if( numberofpax !== '' && numberofpax <= 12 && numberofpax !== 0){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax6.findOne({
            where: { numberofpax },                       
        })                      
        .then((pax6Data)=>{
            console.log(pax6Data);
            const cargoWeight = pax6Data.weight;
            const cargoId = cargoWeight * 0.015;
            const cargoIndex = cargoId.toFixed(1);
            res.status(200).json({
                    pax : pax6Data.numberofpax,
                    weight : pax6Data.weight,
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