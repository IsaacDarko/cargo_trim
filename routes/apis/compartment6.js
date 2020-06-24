const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax6 = require('../../models/PaxCompt6');

  
//@route GET api/pax6
//@desc Gets all passenger compartment 6 data
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    if( weight !=='' && weight <= 1008 && weight !== 0 && weight === 84 && weight === 168 && weight === 252 && weight === 336 && weight === 420 && weight === 504 && weight === 588 && weight === 672 && weight === 756 && weight === 840 && weight === 924 && weight === 1008 ){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax6.findOne({
            where: { weight },                       
        })                      
        .then((pax6Data)=>{
            console.log(pax6Data);
            const cargoWeight = parseInt(pax6Data.weight);
            const cargoId = cargoWeight * 0.015;
            const cargoIndex = cargoId.toFixed(3);
            res.status(200).json({
                    pax : pax6Data.numberofpax,
                    weight : cargoWeight,
                    index : cargoIndex                
            })                  
        })


    }else if ( weight !== '' && weight <= 1008 && weight !== 0 && weight !== 84 && weight !== 168 && weight !== 252 && weight !== 336 && weight !== 420 && weight !== 504 && weight !== 588 && weight !== 672 && weight !== 756 && weight !== 840 && weight !== 924 && weight !== 1008 ){
        const cargoId = weight * 0.015;
        const cargoIndex = cargoId.toFixed(3); 
        res.status(200).json({
            weight,
            index : cargoIndex,
            message: 'Ok'               
        }) 


    //handling inputs that are empty strings
    }else if ( weight === '' ){
        res.status(200).json({
            index: 0,
            weight: 0,
            message: 'No Cargo Weight Assigned'
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