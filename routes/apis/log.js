const express = require('express');
const router = express.Router();
const Log = require('../../models/Log');

 
//@route POST api/pax1
//@desc Returns specific data for a particular compartment passed on the 
//@access Private* 
router.post('/', (req, res) => {
    const { sno, owe_weight, owe_index, observer_weight, observer_index, wardrobe_weight, wardrobe_index, 
        pax_compt1_weight, pax_compt1_index, pax_compt2_weight, pax_compt2_index, pax_compt3_weight, 
        pax_compt3_index, pax_compt4_weight, pax_compt4_index, pax_compt5_weight, pax_compt5_index, 
        pax_compt6_weight, pax_compt6_index, pax_compt7_weight, pax_compt7_index, bags_compt_fwd_weight,
        bags_compt_fwd_index, bags_compt_aft1_weight, bags_compt_aft1_index, bags_compt_aft2_weight, 
        bags_compt_aft2_index, zfweight, zfindex, fuelonboard_weight, fuelonboard_index, ramp_weight, 
        ramp_index, taxifuel_weight, taxifuel_index, takeoff_weight, takeoff_index, estfuelused_weight, 
        estfuelused_index, landing_weight, landing_index, totalpax } = req.body.logData;
    
    if( !sno, !owe_weight, !owe_index, !observer_weight, !observer_index, !wardrobe_weight, !wardrobe_index, 
        !pax_compt1_weight, !pax_compt1_index, !pax_compt2_weight, !pax_compt2_index, !pax_compt3_weight, 
        !pax_compt3_index, !pax_compt4_weight, !pax_compt4_index, !pax_compt5_weight, !pax_compt5_index, 
        !pax_compt6_weight, !pax_compt6_index, !pax_compt7_weight, !pax_compt7_index, !bags_compt_fwd_weight,
        !bags_compt_fwd_index, !bags_compt_aft1_weight, !bags_compt_aft1_index, !bags_compt_aft2_weight, 
        !bags_compt_aft2_index, !zfweight, !zfindex, !fuelonboard_weight, !fuelonboard_index, !ramp_weight, 
        !ramp_index, !taxifuel_weight, !taxifuel_index, !takeoff_weight, !takeoff_index, !estfuelused_weight, 
        !estfuelused_index, !landing_weight, !landing_index, !totalpax ){

            return(
                res.status(200).json({
                    index : 0,
                    weight : 0,                        
                    message: 'Not are fields are provided'
                })
            )            
        

    //handling inputs that are empty strings
    }else if( numberofpax === '' ){
        res.status(200).json({
            index : 0,
            weight : 0,                        
            message: 'No passengers assigned'            
        })



    //handling valid inputs 
    }else{
    //retrieving passenger-data from the database using the compt_nopax sent from from front-end.
        Pax1.findOne({
            where: { numberofpax },                       
        })                     
        .then((pax1Data)=>{
            console.log(pax1Data);
            res.status(200).json({
                    pax : pax1Data.numberofpax,
                    weight : pax1Data.weight,
                    index : pax1Data.pax_index                
            })                  
        })
    }
        
});


module.exports = router;