const express = require('express');
const router = express.Router();
const Bagg1 = require('../../models/Bagg1');
 

//@route GET api/pax1
//@desc Gets all passenger compartment 1 data
//@access Private*
router.post('/', (req, res) => {
    const weight = req.body.weight;
    if( weight !== "" && weight <= 1225 && weight%25 == 0 ){
        //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Bagg1.findOne({
            where: { weight },                       
        })                     
        .then((bagg1Data)=>{
            console.log(bagg1Data);
            res.status(200).json({
                index : bagg1Data.comp_index,
                weight : bagg1Data.weight          
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
                const index = 1.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 1.5;
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
                const index = 2.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 2.3;
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
                const index = 2.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 3.3;
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
                const index = 3.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 4.2;
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
                const index = 4.7;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 5.0;
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
                const intIndex = 5.5;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 5.8;
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
                const intIndex = 6.4;
                const index = parseFloat(intIndex.toFixed(1));
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

        //covering the 200 to 225 range
        else if( weight > 200 && weight < 225 ){
            const higher = 225-weight;
            const lower = weight - 200;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 7.3;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 7.6;
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
                const intIndex = 8.2;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 8.5;
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
                const intIndex = 9.0;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 9.3;
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
                const intIndex = 9.9;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 10.2;
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
                const intIndex = 10.7;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 11.0;
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
                const intIndex = 11.6;
                const index = parseFloat(intIndex.toFixed(1));
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

         //covering the 350 to 375 range
         else if( weight > 350 && weight < 375 ){
            const higher = 375-weight;
            const lower = weight - 350;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 12.5;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 12.8;
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
                const intIndex = 13.4;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 13.7;
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
                const intIndex = 14.2;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 14.5;
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
                const intIndex = 15.1;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 15.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 450 to 475 range
        else if( weight > 450 && weight < 475 ){
            const higher = 475-weight;
            const lower = weight - 450;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 16.0;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 16.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

         //covering the 475 to 500 range
         else if( weight > 475 && weight < 500 ){
            const higher = 500-weight;
            const lower = weight - 475;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 16.9;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 17.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 500 to 525 range
        else if( weight > 500 && weight < 525 ){
            const higher = 525-weight;
            const lower = weight - 500;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 17.7;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 18.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 525 to 550 range
        else if( weight > 525 && weight < 550 ){
            const higher = 550-weight;
            const lower = weight - 525;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 18.6;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 18.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 550 to 575 range
        else if( weight > 550 && weight < 575 ){
            const higher = 575-weight;
            const lower = weight - 550;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 19.5;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 19.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 575 to 600 range
        else if( weight > 575 && weight < 600 ){
            const higher = 600-weight;
            const lower = weight - 575;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 20.3;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 20.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 600 to 625 range
        else if( weight > 600 && weight < 625 ){
            const higher = 625-weight;
            const lower = weight - 600;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 21.2;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 21.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }






















        //covering the 625 to 650 range
        else if( weight > 625 && weight < 650 ){
            const higher = 650-weight;
            const lower = weight - 625;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = 22.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 22.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering 650 to 675 range
        else if( weight > 650 && weight < 675 ){
            const higher = 675-weight;
            const lower = weight - 650;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = 23.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 23.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 675 to 700 range
        else if( weight > 675 && weight < 700 ){
            const higher = 700-weight;
            const lower = weight - 675;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = 23.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 24.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 700 to 725 range
         else if( weight > 700 && weight < 725 ){
            const higher = 725-weight;
            const lower = weight - 700;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = 24.7;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 25.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 725 to 750 range
        else if( weight > 725 && weight < 750 ){
            const higher = 750-weight;
            const lower = weight - 725;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const index = 25.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 25.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 750 to 775 range
        else if( weight > 750 && weight < 775 ){
            const higher = 775-weight;
            const lower = weight - 750;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 26.5;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 26.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 775 to 800 range
        else if( weight > 775 && weight < 800 ){
            const higher = 800-weight;
            const lower = weight - 775;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 27.3;
                const index = intIndex.toFixed(1);
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 27.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 200 to 225 range
        else if( weight > 800 && weight < 825 ){
            const higher = 825-weight;
            const lower = weight - 800;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 28.2;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 28.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 825 to 850 range
        else if( weight > 825 && weight < 850 ){
            const higher = 850-weight;
            const lower = weight - 825;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 29.1;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 29.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 850 to 875 range
        else if( weight > 850 && weight < 875 ){
            const higher = 875-weight;
            const lower = weight - 850;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 30.0;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 30.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 875 to 900 range
        else if( weight > 275 && weight < 300 ){
            const higher = 300-weight;
            const lower = weight - 275;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex =30.8;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 31.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 900 to 925 range
        else if( weight > 900 && weight < 925 ){
            const higher = 925-weight;
            const lower = weight - 900;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 31.7;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 32.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 925 to 950 range
        else if( weight > 925 && weight < 950 ){
            const higher = 950-weight;
            const lower = weight - 925;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 32.6;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 32.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

         //covering the 950 to 975 range
         else if( weight > 950 && weight < 975 ){
            const higher = 975-weight;
            const lower = weight - 950;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 33.5;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 33.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

         //covering the 975 to 1000 range
         else if( weight > 975 && weight < 1000 ){
            const higher = 1000-weight;
            const lower = weight - 975;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 34.3;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 34.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1000 to 1025 range
        else if( weight > 1000 && weight < 1025 ){
            const higher = 1025-weight;
            const lower = weight - 1000;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 35.2;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 35.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1025 to 1050 range
        else if( weight > 1025 && weight < 1050 ){
            const higher = 1050-weight;
            const lower = weight - 1025;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 36.1;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 36.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1050 to 1075 range
        else if( weight > 1050 && weight < 1075 ){
            const higher = 1075-weight;
            const lower = weight - 1050;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 36.9;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 37.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

         //covering the 1075 to 1100 range
         else if( weight > 1075 && weight < 1100 ){
            const higher = 1100-weight;
            const lower = weight - 1075;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 37.8;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 38.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1100 to 1125 range
        else if( weight > 1100 && weight < 1125 ){
            const higher = 1125-weight;
            const lower = weight - 1100;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 38.7;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 39.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1125 to 1150 range
        else if( weight > 1125 && weight < 1150 ){
            const higher = 1150-weight;
            const lower = weight - 1125;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 39.6;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 39.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1150 to 1175 range
        else if( weight > 1150 && weight < 1175 ){
            const higher = 1175-weight;
            const lower = weight - 1150;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 40.4;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 40.7;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1175 to 1200 range
        else if( weight > 1175 && weight < 1200 ){
            const higher = 1200-weight;
            const lower = weight - 1175;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 41.3;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 41.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering the 1200 to 1225 range
        else if( weight > 1200 && weight < 1225 ){
            const higher = 1225-weight;
            const lower = weight - 1200;
            //comparing if weight is closer to the max or min range and selecting an index accordingly    
            if( higher > lower ){
                const intIndex = 42.1;
                const index = parseFloat(intIndex.toFixed(1));
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }else{
                const index = 42.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                })
            }
        }

        //covering above range
        else{            
            const index = 0;
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