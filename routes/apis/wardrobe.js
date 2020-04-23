const express = require('express');
const router = express.Router();
const Ward = require('../../models/Wardrobe');


//@route POST api/wardrobe
//@desc Returns specific data for a particular weight passed in for the wardrobe compartment 
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    //catches all input that are valid and fall within the range of the wardrobe database
    if( weight !== "" && weight < 73 &&  weight == 10 || weight == 30 || weight == 50 || weight == 60 || weight == 70 || weight == 72 ){
        //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Ward.findOne({
            where: { weight },                       
        })                     
        .then((wardrobeData)=>{
            console.log(wardrobeData);
            res.status(200).json({
                    weight : wardrobeData.weight,
                    index : wardrobeData.w_index                
            })                  
        })
    }else if ( weight == "" ){
        res.status(200).json({
            index : 0,
            weight : 0,                        
            message: 'No weight assigned to the wardrobe'
        })



    //handling all inputs that are valid but are not covered by the wardrobe database and assigns appropriates indexes to them.
    }else if ( weight < 73 && weight !== 10 || weight !== 30 || weight !== 50 || weight !== 60 || weight !== 70 || weight !== 72 ){

        //catches all input from 0 - 10 range
        if( weight > 0 && weight < 10 ){
            const index = -0.2
            const numWeight = parseInt(weight);
            res.status(200).json({
                index,
                weight : numWeight
            })
        }
        //catches all input from 10-30
        else if( weight > 10 && weight < 30 ){
            const higher = 30-weight;
            const lower = weight-10;

            if(higher>lower){
                const index = -0.7
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else if (higher == lower){
                const index = -0.8
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -1.0
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
            
        }
        //catches all input from 30-50
        else if( weight > 30 && weight < 50 ){
            const higher = 50-weight;
            const lower = weight-30;

            if(higher>lower){
                const index = -1.5
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -1.7
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
            
        }
        //catches all input from 50-60
        else if( weight > 50 && weight < 60 ){
            const index = -2.3;
            const numWeight = parseInt(weight);
            res.status(200).json({
                index,
                weight : numWeight
            })
            
        }
        //catches all inputs from 60-70
        else if( weight > 60 && weight < 70 ){
            const index = -2.7;
            const numWeight = parseInt(weight);
            res.status(200).json({
                index,
                weight : numWeight
            })
            
        }
        //catches all inputs from 70-72
        else{
            const index = -3.0;
            const numWeight = parseInt(weight);
            res.status(200).json({
                index,
                weight : numWeight
            })
            
        }


    //Catch all other invalid input
    }else{
        res.status(200).json({
            index : 0,
            weight : 0,                        
            message: 'Your input falls outside the acceptable range'
        })
    }
        
});


module.exports = router;