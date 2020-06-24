import React, { Component } from 'react';
import {  
    Input
} from 'reactstrap';
import styled from 'styled-components';
import schematics from '../diagram.png';
import Graph from './Graph'
import { DataConsumer } from '../context';

export default class TrimForm extends Component {
    render() {
        return (

            <DataConsumer>
                {value => {
                const { index : obsindex, message : obsMssge } = value.observerData;
                const { index : windex } = value.wardrobeData;
                const { weight: c1weight, index: c1index, message : c1errMssge } = value.pax1Data;
                const { weight: c2weight, index: c2index, message : c2errMssge } = value.pax2Data;
                const { weight: c3weight, index: c3index, message : c3errMssge } = value.pax3Data;
                const { weight: c4weight, index: c4index, message : c4errMssge } = value.pax4Data;
                const { weight: c5weight, index: c5index, message : c5errMssge } = value.pax5Data;
                const { weight: c6weight, index: c6index, message : c6errMssge } = value.pax6Data;
                const { weight: c7weight, index: c7index, message : c7errMssge } = value.pax7Data;
                const { sumUp : totPax, message: totPaxMssge } = value.totalNumberOfPax;
                const { index: bfdindex, message : bagfdMssge } = value.baggfwdData;
                const { index: ba1index, message : bag1Mssge } = value.baggaft1Data;
                const { index: ba2index, message : bag2Mssge } = value.baggaft2Data;
                const { weight : zfweight, message: zfMssge } = value.zeroFuelWeight;
                const { index : zfindex } = value.zeroFuelWeightIndex;
                const { index: tfindex } = value.taxiFuelData;
                const { weight: rampWeight, index: rampIndex, errMssge: rampMssge } = value.rampData;
                const { index: findex } = value.fobData
                const { weight : toffWeight, index : twIndex, message: tWMssge } = value.takeOffData;
                const { weight: fusedWeight, index: fusedIndex } = value.estimatedFuelUsedData;
                const { weight: lweight, index: lindex, message: lmssge } = value.landingData;
                const {index : totIndex} = value.totalIndex;
                const { data, options } = value.graphData;
                 return( 
                
                
        <div>        
            <Pager >
                <Form>
                    <div className="row">

                    <FormContainer className="col-7">
                            {/*Header Row  -----  Where headers begin*/}
                        <div className="row">
                            <div className="col-3">
                            </div>
                            <div className="col-1">
                            </div>

                            <Labeller className="col-3">                                
                                <h6>CARGO WEIGHT</h6>
                            </Labeller> 

                            <div className="col-2">
                                <h6>WEIGHT kg</h6>
                            </div>

                            <div className="col-1">
                                <h6>INDEX</h6>
                            </div>                   
                        </div>
                    {/*Header Row  -----  Where headers end*/}



                    {/*Where form begin*/}
                        

                        
                        {/*Where form labels begin*/}    
                            <div className="row">
                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            OWE
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">N/A</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">                                    
                                    <FormGroup>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </FormGroup>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input name="owe_weight" id="owe_weight" placeholder="17980" disabled />
                                        </FormGroup>
                                    </LabelGrouper> 
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="owe_index" id="owe_index">90.5</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>



                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            OBSERVER
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">N/A</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3"> 
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <FormGroup>
                                        <Input name="observer_weight" id="observer_weight" onBlur={value.handleObserver} />
                                        {obsMssge}
                                    </FormGroup>
                                </div>    

                                <div className="col-2">

                                    <LabelGrouper>
                                            <Spandex name="observer_index" id="observer_index">{obsindex}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>



                            <div className="row">
                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            WARDROBE
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            FWD
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                
                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>


                                <div className="col-2">
                                    <FormGroup>
                                        <Input name="wardrobe_fwd_weight" id="wardrobe_fwd_weight" onBlur={value.handleWardrobe} />       
                                    </FormGroup>
                                </div>


                                <div className="col-2">
                                   <FormGroup>
                                        <Spandex name="wardrobe_fwd_index" id="wardrobe_fwd_index" >{windex}</Spandex>
                                    </FormGroup>
                                </div>


                            </div>




                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            1
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">                                    
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt1_nopax" id="compt1_nopax" placeholder="Max 840" onBlur={value.handlePax1} />
                                            <Alert>{c1errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="pax_compt1_weight" id="pax_compt1_weight">{c1weight}KG</Spandex>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                                                                                   
                                    <LabelGrouper>                                    
                                        <Spandex name="pax_compt1_index" id="pax_compt1_index">{c1index}</Spandex>
                                    </LabelGrouper>
                                </div>
                                
                            </div>






                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT 
                                        </FormText>
                                    </LabelGrouper>        
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            2
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt2_nopax" id="compt2_nopax" placeholder="Max 1008" onBlur={value.handlePax2} />
                                            <Alert>{c2errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="pax_compt2_weight" id="pax_compt2_weight">{c2weight}KG</Spandex>
                                    </LabelGrouper> 
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="pax_compt2_index" id="pax_compt2_index">{c2index}</Spandex>
                                    </LabelGrouper>
                                </div>

                                
                            </div>




                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            3
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt3_nopax" id="compt3_nopax" placeholder="Max 1008" onBlur={value.handlePax3} />
                                            <Alert>{c3errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>                                        
                                        <Spandex name="pax_compt3_weight" id="pax_compt3_weight">{c3weight}KG</Spandex>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Spandex name="pax_compt3_index" id="pax_compt3_index">{c3index}</Spandex>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                            </div>





                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            4
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt4_nopax" id="compt4_nopax" placeholder="Max 1008" onBlur={value.handlePax4} />
                                            <Alert>{c4errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="pax_compt4_weight" id="pax_compt4_weight">{c4weight}KG</Spandex>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="pax_compt4_index" id="pax_compt4_index">{c4index}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>







                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            5
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt5_nopax" id="compt5_nopax" placeholder="Max 1008" onBlur={value.handlePax5} />
                                            <Alert>{c5errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="pax_compt5_weight" id="pax_compt5_weight">{c5weight}KG</Spandex>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="pax_compt5_index" id="pax_compt5_index">{c5index}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>






                            <div className="row">
                                
                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            6
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt6_nopax" id="compt6_nopax" placeholder="Max 1008" onBlur={value.handlePax6} />
                                            <Alert>{c6errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Spandex name="pax_compt6_weight" id="pax_compt6_weight">{c6weight}KG</Spandex>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="pax_compt6_index" id="pax_compt6_index">{c6index}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>




                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            COMPARTMENT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            7
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt7_nopax" id="compt7_nopax" placeholder="Max 672" onBlur={value.handlePax7} />
                                            <Alert>{c7errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="pax_compt7_weight" id="pax_compt7_weight">{c7weight}KG</Spandex>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="pax_compt7_index" id="pax_compt7_index">{c7index}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>





                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            BAG COMPT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            FWD
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Input type="text" name="bags_comptfwd_weight" id="bags_comptfwd_weight" placeholder="Max 231" onBlur={value.handleBaggFwd} />
                                    </LabelGrouper>
                                </div>   

                                <div className="col-2">                                 
                                    <FormGroup>
                                        <Spandex name="bags_comptfwd_index" id="bags_comptfwd_index">{bfdindex}</Spandex>
                                    </FormGroup>
                                </div>                         
                                                                
                            </div>





                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            BAG COMPT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            AFT1
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>                                       
                                        <Input type="text" name="bags_comptaft1_weight" id="bags_comptaft1_weight" placeholder="Max 1225" onBlur={value.handleBaggAft1} />
                                    </LabelGrouper>
                                </div> 

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="bags_comptaft1_index" id="bags_comptaft1_index">{ba1index}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>






                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            BAG COMPT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            AFT2
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>                                       
                                        <Input type="text" name="bags_comptaft2_weight" id="bags_comptaft2_weight" placeholder="Max 454" onBlur={value.handleBaggAft2} />
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">                                 
                                    <LabelGrouper>
                                        <Spandex name="bags_comptaft2_index" id="bags_comptaft2_index">{ba2index}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>





                            <div className="row">

                                <div className="col-3">                                    
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            ZF-WEIGHT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="zfw_weight" id="zfw_weight">{zfweight}</Spandex>
                                        <Alert>{zfMssge}</Alert>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="zfw_index" id="zfw_index">{zfindex}</Spandex>
                                    </LabelGrouper>
                                </div>

                            </div>





                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            FUEL ON BOARD
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                        <Input type="text" name="fob_weight" id="fob_weight" onBlur={value.handleFuel} />
                                </div> 

                                <div className="col-2">
                                        <Spandex name="fob_index" id="fob_index">{findex}</Spandex>
                                    
                                </div>                                  

                            </div>






                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            RAMP WEIGHT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div> 

                                <div className="col-2">
                                        <Spandex name="rw_weight" id="rw_weight">{rampWeight}</Spandex>
                                        <Alert>{rampMssge}</Alert>
                                </div> 

                                <div className="col-2"> 
                                        <Spandex name="rw_index" id="rw_index">{rampIndex}</Spandex>
                                        <Alert></Alert>
                                </div>

                            </div>





                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            TAXI FUEL
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <Input type="text" name="tf_weight" id="tf_weight" onBlur={value.handleTaxiFuel} />
                                </div> 

                                <div className="col-2">
                                    <Spandex name="tf_index" id="tf_index">{tfindex}</Spandex>
                                </div>

                            </div>






                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            TAKE-OFF WEIGHT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <Spandex name="tw_weight" id="tw_weight"> {toffWeight} </Spandex>
                                    <Alert>{tWMssge}</Alert>
                                </div>

                                <div className="col-2"> 
                                        <Spandex name="tw_index" id="tw_index">{twIndex}</Spandex>
                                </div>

                            </div>






                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            EST FUEL USED
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <Input type="text" name="estfuelused_weight" id="estfuelused_weight" onBlur={value.handleFused} />
                                 
                                </div>  

                                <div className="col-2">
                                        <Spandex name="estfuelused_index" id="estfuelused_index">{fusedIndex}</Spandex>
                                </div>

                            </div>







                            <div className="row">

                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            LANDING WEIGHT
                                        </FormText>
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>
                                
                                <div className="col-3">
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <Spandex name="lw_weight" id="lw_weight"> {lweight} </Spandex>
                                        <Alert>{lmssge}</Alert>
                                    </LabelGrouper> 
                                </div>  

                                <div className="col-2">                                 
                                    <FormGroup>
                                        <Spandex name="lw_index" id="lw_index">{lindex}</Spandex>
                                    </FormGroup>
                                </div>                              

                            </div>






                            <div className="row">
                                <div className="col-3">
                                    <LabelGrouper>                                        
                                        Totals                                       
                                    </LabelGrouper>
                                </div>

                                <div className="col-1">
                                    <LabelGrouper>
                                        <Spanner color="muted">
                                            AFT2
                                        </Spanner>
                                    </LabelGrouper>
                                </div>
                                
                               <div className="col-3">
                                    <LabelGrouper>
                                        <FormGroup>
                                             {totPax}
                                            <Alert>{totPaxMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>
                                </div>

                                <div className="col-2">
                                    <LabelGrouper>
                                        <FormGrouper>
                                            <Spandex name="total_weight" id="total_weight">.</Spandex>
                                        </FormGrouper>
                                    </LabelGrouper> 
                                </div>                                                          
                                
                                <div className="col-2">                                 
                                    <FormGroup>
                                       Index:{totIndex}
                                    </FormGroup>
                                </div>
                            </div>            

                    </FormContainer>


                    <DiagramContainer className="col-5">
                        
                        <ControlsContainer>

                        </ControlsContainer>

                        <ImageContainer className="row">
                            <img alt="plane-chart" src={schematics} />
                        </ImageContainer>

                        <GraphContainer>
                            <Graph chartData={data} chartOptions={options} />
                        </GraphContainer>
                        
                    </DiagramContainer>
                </div>  
            </Form>
        </Pager>
        </div>    
            
            
                 )
        }}
        </DataConsumer>
        )
    }
}

{/* styled-components rules begin here */}
const Pager = styled.div`
    background-color:rgba(241, 242, 228, 1);
    padding-left:2rem;
    margin:0px;
    width:inherit;
`

const Form = styled.div`
    padding:0px;
    width:inherit;

`


const ControlsContainer = styled.div`
    margin-top:3rem;
    margin-bottom:3rem;

`


const FormContainer = styled.div`
    


`

const ImageContainer = styled.div`
    margin-top:3rem;
    margin-bottom:5rem;

`


const GraphContainer = styled.div`
    margin-top:;
    margin-bottom:;

`


const Alert = styled.span`
    margin-top:3px;
    font-size:10px;
    height:12px;
    color: rgba(171,3,3,1);
`


const DiagramContainer = styled.div`
    padding-left:0px;
    background-color:rgba(219, 224, 213, 0.7);

`

const LabelGrouper = styled.div`
    height:3rem;
    margin-top:1rem;
    margin-bottom:1rem;
`

const FormGroup = styled.div`
    margin-top:1.1rem;
    margin-bottom:1.1rem;

`

const FormGrouper = styled.div`
    margin-top:2rem;
    margin-bottom:1rem;

`

const FormText = styled.div`
    margin-bottom:2rem;
    text-size:12px;
    font-family:Quicksand;

`

const Labeller = styled.div`
    margin-left:2rem;


`

const Spanner = styled.span`
    height:1rem;
    color:rgba(225,225,225,0);

`

const Spandex = styled.div`
    width:5rem;
    font-weight:bold;
    font-family:Montserrat;
    padding-left:1.5rem;
`