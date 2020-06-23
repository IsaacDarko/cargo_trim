const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax5 = require('../../models/PaxCompt5');
  

//@route GET api/pax5
//@desc Gets all passenger compartment 5 data
//@access Private*
router.post('/', (req, res) => {
    const numberofpax = req.body.pax;
    if( numberofpax !== '' && numberofpax <= 12 && numberofpax !== 0){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax5.findOne({
            where: { numberofpax },                       
        })                     
        .then((pax5Data)=>{
            console.log(pax5Data);
            const cargoWeight = pax5Data.weight;
            const cargoId = cargoWeight * 0.006;
            const cargoIndex = cargoId.toFixed(1);
            res.status(200).json({
                    pax : pax5Data.numberofpax,
                    weight : pax5Data.weight,
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