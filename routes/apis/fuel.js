const express = require('express');
const router = express.Router();
const Fuel = require('../../models/Fuel');


//@route POST api/observer
//@desc Returns specific data for a particular weight passed in for the observer 
//@access Private*
router.post('/', (req, res) => {
        const weight = req.body.weight;

        if( weight !== "" && weight !== 0  && weight < 2601 && weight == 100 || weight == 500 || weight == 800 || weight == 1000 || weight == 1200 || weight == 1400 || weight == 1600 || weight == 1800 || weight == 2000 || weight == 2200 || weight == 2400 || weight == 2600
        || weight == 2800 || weight == 3000 || weight == 3200 || weight == 3400 || weight == 3600 || weight == 3800 || weight == 4000 || weight == 4200 || weight == 4400 || weight == 4600 || weight == 4900 || weight == 5318 )
        {
            //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
            Fuel.findOne({
                where: { weight },                       
            })                     
            .then((fuelData)=>{
                console.log(fuelData);
                res.status(200).json({
                        weight : fuelData.weight,
                        index : fuelData.f_index                
                })                  
            })





        }else if( weight == "" || weight == 0 ){
            res.status(200).json({
                index : 0,
                weight : 0,                        
                message: 'Fuel on board field should not be empty'            
            })





        }else if ( weight < 2601 && weight !== 0 && weight !== 100 || weight !== 500 || weight !== 800 || weight !== 1000 || weight !== 1200 || weight !== 1400 || weight !== 1600 || weight !== 1800 || weight !== 2000 || weight !== 2200 || weight !== 2400 || weight !== 2600
        || weight !== 2800 || weight !== 3000 || weight !== 3200 || weight !== 3400 || weight !== 3600 || weight !== 3800 || weight !== 4000 || weight !== 4200 || weight !== 4400 || weight !== 4600 || weight !== 4900 || weight !== 5318 )
        {
            if( weight > 100 && weight < 500 ){
                const index = 0.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }
            
            else if( weight > 500 && weight < 800 ){
                const index = 0.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 800 && weight < 1000 ){
                const index = 0.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 1000 && weight < 1200 ){
                const index = 0.7;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 1200 && weight < 1400 ){
                const index = 0.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 1400 && weight < 1600 ){
                const index = 0.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 1600 && weight < 1800 ){
                const index = 1.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 1800 && weight < 2000 ){
                const index = 1.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 2000 && weight < 2200 ){
                const index = 1.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 2200 && weight < 2400 ){
                const index = 1.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 2400 && weight < 2600 ){
                const index = 1.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 2600 && weight < 2800 ){
                const index = 1.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 2800 && weight < 3000 ){
                const index = 1.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 3000 && weight < 3200 ){
                const index = 1.8;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 3200 && weight < 3400 ){
                const index = 1.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 3400 && weight < 3600 ){
                const index = 2.0;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 3600 && weight < 3800 ){
                const index = 2.1;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 3800 && weight < 4000 ){
                const index = 2.2;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 4000 && weight < 4200 ){
                const index = 2.3;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 4200 && weight < 4400 ){
                const index = 2.4;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 4400 && weight < 4600 ){
                const index = 2.5;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }

            else if( weight > 4600 && weight < 4900 ){
                const index = 2.6;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
            }            
            else{
                const index = 2.9;
                const numWeight = parseInt(weight);
                res.status(200).json({
                    index,
                    weight : numWeight
                }) 
                 
            }













        }else{
            res.status(400).json({
                status: '400',
                errcode: 'Fuel_01',
                message: 'The value you put in falls outside the acceptable weight range for this field (0kg-2kg)',
                field: 'request-body'
            })
        }
       
});


module.exports = router;