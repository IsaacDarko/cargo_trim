const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax2 = require('../../models/PaxCompt2');
 
 
//@route GET api/pax2
//@desc Gets all passenger compartment 2 data
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    if( weight !== '' && weight <= 1008 && weight === 84 && weight === 168 && weight === 252 && weight === 336 && weight === 420 && weight === 504 && weight === 588 && weight === 672 && weight === 756 && weight === 840 && weight === 924 && weight === 1008 ){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax2.findOne({
            where: { weight },                       
        })                     
        .then((pax2Data)=>{
            console.log(pax2Data);
            const cargoWeight = parseInt(pax2Data.weight);
            const cargoId = cargoWeight * -0.021;
            const cargoIndex = cargoId.toFixed(5);
            res.status(200).json({
                    pax : pax2Data.numberofpax,
                    weight : cargoWeight,
                    index : cargoIndex                
            })                  
        }) 


    //handling inputs that are empty strings
    }else if( weight !== '' && weight <= 1008  && weight !== 84 && weight !== 168 && weight !== 252 && weight !== 336 && weight !== 420 && weight !== 504 && weight !== 588 && weight !== 672 && weight !== 756 && weight !== 840 && weight !== 924 && weight !== 1008 ){
        const cargoId = weight * -0.021;
        const cargoIndex = cargoId.toFixed(5); 
        res.status(200).json({
            weight,
            index : cargoIndex,
            message: 'Ok'            
    })      
    }else if ( weight === '' ){
        res.status(200).json({
            index: 0,
            weight: 0,
            message: 'No Cargo Weights Assigned'
        })
        

    //handling invalid inputs
    }else{
        return(
            res.status(200).json({
                index: 0,
                weight: 0,
                message : 'Exceeds Max Weight Limit'
            })
        )
    }
    
});



module.exports = router;