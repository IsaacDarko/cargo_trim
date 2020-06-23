const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax2 = require('../../models/PaxCompt2');
 

//@route GET api/pax2
//@desc Gets all passenger compartment 2 data
//@access Private*
router.post('/', (req, res) => {
    const numberofpax = req.body.pax;
    if( numberofpax !== "" && numberofpax <= 12 && numberofpax !== 0){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax2.findOne({
            where: { numberofpax },                       
        })                     
        .then((pax2Data)=>{
            console.log(pax2Data);
            const cargoWeight = pax2Data.weight;
            const cargoId = cargoWeight * -0.021;
            const cargoIndex = cargoId.toFixed(1);
            res.status(200).json({
                    pax : pax2Data.numberofpax,
                    weight : pax2Data.weight,
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