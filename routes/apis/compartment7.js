const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax7 = require('../../models/PaxCompt7');

 
//@route GET api/pax7
//@desc Gets all passenger compartment 7 data
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    if( weight !== '' && weight <= 672 && weight !== 0 && weight === 84 && weight === 168 && weight === 252 && weight === 336 && weight === 420 && weight === 504 && weight === 588 && weight === 672 ){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax7.findOne({
            where: { weight },                       
        })                     
        .then((pax7Data)=>{
            console.log(pax7Data);
            const cargoWeight = parseInt(pax7Data.weight);
            const cargoId = cargoWeight * 0.022;
            const cargoIndex = cargoId.toFixed(5);
            res.status(200).json({
                    pax : pax7Data.numberofpax,
                    weight : cargoWeight,
                    index : cargoIndex                
            })                  
        })

    }else if( weight !== '' && weight <= 672 && weight !== 0 && weight !== 84 && weight !== 168 && weight !== 252 && weight !== 336 && weight !== 420 && weight !== 504 && weight !== 588 && weight !== 672 ){
        const cargoId = weight * 0.022;
        const cargoIndex = cargoId.toFixed(5); 
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