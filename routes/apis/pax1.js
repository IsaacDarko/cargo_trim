const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax1 = require('../../models/PaxCompt1');

  
//@route POST api/pax1
//@desc Returns specific data for a particular compartment passed on the 
//@access Private* 
router.post('/', (req, res) => {
    const numberofpax = req.body.pax;
    if( numberofpax !=="" && numberofpax <= 10 && numberofpax !== 0 ){

    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax1.findOne({
            where: { numberofpax },                       
        })                     
        .then((pax1Data)=>{
            console.log(pax1Data);
            const cargoWeight = pax1Data.weight;
            const cargoId = cargoWeight * -0.029;
            const cargoIndex = cargoId.toFixed(1);
            res.status(200).json({
                    pax : pax1Data.numberofpax,
                    weight : pax1Data.weight,
                    index : cargoIndex                
            })                  
        })

    //handling inputs that are empty strings
    }else if( numberofpax === '' ){
        res.status(200).json({
            index : 0,
            weight : 0,                        
            message: 'No passengers assigned'            
        })



    //handling invalid inputs 
    }else{
        return(
            res.status(200).json({
                index : 0,
                weight : 0,                        
                message: 'Your input for this field falls outside the valid range'
            })
        )
    }
        
});


module.exports = router;