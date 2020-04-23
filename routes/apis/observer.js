const express = require('express');
const router = express.Router();
const Observer = require('../../models/Observer');


//@route POST api/observer
//@desc Returns specific data for a particular weight passed in for the observer 
//@access Private*
router.post('/', (req, res) => {
        const weight = req.body.weight;
        if( weight !== '' && weight !== 0  &&  weight <= 85 ){
            //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
            Observer.findOne({
                where: { weight },                       
            })                     
            .then((observerData)=>{
                console.log(observerData);
                res.status(200).json({
                        weight : observerData.weight,
                        index : observerData.o_index                
                })                  
            }) 
        }else if( weight === 0 || weight === '' ){
            res.status(200).json({
                index : 0,
                weight : 0,                        
                message: 'No observer'            
            })


        }else if( weight > 0 && weight < 85  ){
            res.status(200).json({
                index : -3.7,
                weight,                        
                message: ''            
            })


        }else{
            return(
                res.status(200).json({
                    index : 0,
                    weight : 0,                        
                    message: 'Invalid input'  
                })
            )
        }
        
});


module.exports = router;