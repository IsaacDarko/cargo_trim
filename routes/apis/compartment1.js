const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax1 = require('../../models/PaxCompt1');

  
//@route POST api/pax1
//@desc Returns specific data for a particular compartment passed on the 
//@access Private* 
router.post('/', (req, res) => {
    const weight = req.body.weight;

    if( weight <= 840 && weight !=='' && weight === 84 && weight === 168 && weight === 252 && weight === 336 && weight === 420 && weight === 504 && weight === 588 && weight === 672 && weight === 756 && weight === 840 && weight !== 0 ){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax1.findOne({
            where: { weight },                       
        })                      
        .then((pax1Data)=>{
            console.log(pax1Data);
            const cargoWeight = parseInt(pax1Data.weight);
            const cargoId = cargoWeight * -0.029;
            const cargoIndex = cargoId.toFixed(5);
            res.status(200).json({
                    pax : pax1Data.numberofpax,
                    weight : pax1Data.weight,
                    index : cargoIndex                
            })                  
        })

    //handling inputs that are empty strings
    }else if( weight <= 840 && weight !=='' && weight !== 84 && weight !== 168 && weight !== 252 && weight !== 336 && weight !== 420 && weight !== 504 && weight !== 588 && weight !== 672 && weight !== 756 && weight !== 840 ){
        const cargoId = weight * -0.029;
        const cargoIndex = cargoId.toFixed(5); 
        res.status(200).json({
            weight,
            index : cargoIndex,
            message: 'Ok'               
        })  

    }else if( weight == '' ){
        res.status(200).json({
            pax: 0,
            index : 0,
            weight : 0,                        
            message: 'No Cargo Weight Assigned'            
        })

    
    //handling invalid inputs 
    }else{
        return(
            res.status(200).json({
                index : 0,
                weight : 0,                        
                message: 'Exceeds Max Weight Limit'
            })
        )
    }
        
});


module.exports = router;