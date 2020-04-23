const express = require('express');
const router = express.Router();
const Bagg2 = require('../../models/Bagg2');
 

//@route GET api/pax1
//@desc Gets all passenger compartment 1 data
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    if( weight !== "" && weight < 454 && weight%25 == 0 ){
        //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Bagg2.findOne({
            where: { weight },                       
        })                     
        .then((bagg2Data)=>{
            console.log(bagg2Data);
            res.status(200).json({
                    index : bagg2Data.comp_index,
                    weight : bagg2Data.weight             
            })                  
        })


    //handles inputs that are empty strings
    }else if ( weight === '' ){
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
                const index = 0.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 0.6;
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
                const index = 1.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 1.6;
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
                const index = 2.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 2.7;
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
                const index = 3.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 3.7;
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
                const index = 4.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 4.7;
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
                const index = 5.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 5.7;
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
                const intIndex = 6.4;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 6.7;
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
                const intIndex = 7.4;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 7.7;
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
                const intIndex = 8.4;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 8.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 225 to 250 range
        else if( weight > 225 && weight < 250 ){
            const higher = 250-weight;
            const lower = weight - 225;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 9.5;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 9.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 250 to 275 range
        else if( weight > 250 && weight < 275 ){
            const higher = 275-weight;
            const lower = weight - 250;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 10.5;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 10.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 275 to 300 range
        else if( weight > 275 && weight < 300 ){
            const higher = 300-weight;
            const lower = weight - 275;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 11.5;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 11.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 300 to 325 range
        else if( weight > 300 && weight < 325 ){
            const higher = 325-weight;
            const lower = weight - 300;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 12.5;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 12.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 325 to 350 range
        else if( weight > 325 && weight < 350 ){
            const higher = 350-weight;
            const lower = weight - 325;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 13.5;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 13.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

         //covering the 350 to 375 range
         else if( weight > 350 && weight < 375 ){
            const higher = 375-weight;
            const lower = weight - 350;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 14.6;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 15.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

         //covering the 375 to 400 range
         else if( weight > 375 && weight < 400 ){
            const higher = 400-weight;
            const lower = weight - 375;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 15.6;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 16.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 400 to 425 range
        else if( weight > 400 && weight < 425 ){
            const higher = 425-weight;
            const lower = weight - 400;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 16.6;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 17.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 425 to 450 range
        else if( weight > 425 && weight < 450 ){
            const higher = 450-weight;
            const lower = weight - 425;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 17.6;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 17.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 450 to 454 range
        else{            
            const index = 18.5;
            const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
        }




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