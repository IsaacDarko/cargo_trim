const express = require('express');
const router = express.Router();
const Passenger = require('../../models/PassengerData');
const Pax3 = require('../../models/PaxCompt3');



//@route GET api/pax3
//@desc Gets all passenger compartment 3 data
//@access Private*
router.post('/', (req, res) => {
    const numberofpax = req.body.pax;
    if( numberofpax !== '' && numberofpax <= 12 && numberofpax !== 0){
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax3.findOne({
            where: { numberofpax },                       
        })                     
        .then((pax3Data)=>{
            console.log(pax3Data);
            res.status(200).json({
                    pax : pax3Data.numberofpax,
                    weight : pax3Data.weight,
                    index : pax3Data.pax_index                
            })                  
        }) 


    //handling inputs that are empty strings
    }else if( numberofpax === '' ){
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