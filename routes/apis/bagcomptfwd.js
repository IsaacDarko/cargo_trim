const express = require('express');
const router = express.Router();
const BaggFwd = require('../../models/Baggfwd');
 

//@route POST /api/bagfwd
//@desc Gets all baggage forward compartment data
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    //now handling all the weight which are clearly specified in the baggage fwd compartment data table
    if( weight !== "" && weight < 232 && weight%25 == 0 ){
    //retrieving bag fwd compartment data from the database using the weight sent from from front-end.
        BaggFwd.findOne({
            where: { weight },                       
        })                     
        .then((baggfwdData)=>{
            console.log(baggfwdData);
            res.status(200).json({
                index : baggfwdData.comp_index,
                weight : baggfwdData.weight            
            })                  
        })


    //handles inputs that are empty strings
    }else if( weight === '' ){
        res.status(200).json({
            index : 0,
            weight : 0,                        
            message: 'No baggage is assigned'            
        })



    //now handling all valid weights which are unspecified in the database and assigning the best suited indices. 
    }else if( weight%25 > 0 ){



        //covering the 0 to 25 range
        if(weight > 0 &&  weight < 25 ){
            const higher = 25-weight;
            const lower = weight-0;
            //checking if the weight is closer to the lower or upper limits and assigning the best suited index
            if(higher > lower){
                const index = -0.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -0.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }        
        
        //covering the 25 to 50 range
        else if( weight > 25 && weight < 50 ){
            const higher = 50-weight;
            const lower = weight - 25;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = -1.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -1.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering 50 to 75 range
        else if( weight > 50 && weight < 75 ){
            const higher = 75-weight;
            const lower = weight - 50;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = -2.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -2.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 75 to 100 range
        else if( weight > 75 && weight < 100 ){
            const higher = 100-weight;
            const lower = weight - 75;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = -3.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -3.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 100 to 125 range
         else if( weight > 100 && weight < 125 ){
            const higher = 125-weight;
            const lower = weight - 100;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = -4.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -4.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 125 to 150 range
        else if( weight > 125 && weight < 150 ){
            const higher = 150-weight;
            const lower = weight - 125;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = -5.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -5.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 150 to 175 range
        else if( weight > 150 && weight < 175 ){
            const higher = 175-weight;
            const lower = weight - 150;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = -6.0;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -6.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 175 to 200 range
        else if( weight > 175 && weight < 200 ){
            const higher = 200-weight;
            const lower = weight - 175;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = -7.0;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -7.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 200 to 225 range
        else if( weight > 200 && weight < 225 ){
            const higher = 225-weight;
            const lower = weight - 200;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = -7.9;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = -8.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 200 to 231 range
        else{            
            const index = -8.8;
            const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
        }



    //catching all other invalid input     
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