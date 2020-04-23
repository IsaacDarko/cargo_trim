import React, { Component } from 'react';
import {  
    Input
} from 'reactstrap';
import styled from 'styled-components';
import schematics from '../diagram.png';
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
                const { sumUp : totPax } = value.totalNumberOfPax;
                const { index: bfdindex, message : bagfdMssge } = value.baggfwdData;
                const { index: ba1index, message : bag1Mssge } = value.baggaft1Data;
                const { index: ba2index, message : bag2Mssge } = value.baggaft2Data;
                const { weight : zfweight, message: zfMssge } = value.zeroFuelWeight;
                const { index : zfindex } = value.zeroFuelWeightIndex;
                const { index: tfindex } = value.taxiFuelData;
                const { weight: rampWeight, index: rampIndex, errMssge: rampMssge } = value.rampData;
                const { index: findex } = value.fobData
                const { weight : toffWeight, index : twIndex } = value.takeOffData;
                const { weight: lweight, index: lindex } = value.landingData;
                 return( 
                
                
        <div>        
            <Pager >
                <Form>
                    <div className="row">

                    <FormContainer className="col-8">

                    {/*Header Row  -----  Where headers begin*/}
                        <div className="row">
                            <div className="col-3">
                            </div>
                            <div className="col-1">
                            </div>

                            <Labeller className="col-4">                                
                                <h6>NO. PAX</h6>
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
                        

                            <div className="row">
                         {/*Where form labels begin*/}
                                <div className="col-3">
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            OWE
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            OBSERVER
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            WARDROBE
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            PAX COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            BAG COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            BAG COMPT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            BAG COMPT
                                        </FormText>
                                    </LabelGrouper>
                                    
                                    <LabelGrouper>
                                        <FormText color="muted">
                                            ZF-WEIGHT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            FUEL ON BOARD
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            RAMP WEIGHT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            TAXI FUEL
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            TAKE-OFF WEIGHT
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            EST FUEL USED
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            LANDING WEIGHT
                                        </FormText>
                                    </LabelGrouper>
                                    
                                </div>
                         {/*Where form labels ends*/}






                        {/*Where numbered labels begin*/}
                                <div className="col-1">

                                    <LabelGrouper>
                                        <Spanner color="muted">N/A</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner color="muted">N/A</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            FWD
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            1
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            2
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            3
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            4
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            5
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            6
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            7
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            FWD
                                        </FormText>
                                    </LabelGrouper>


                                    <LabelGrouper>
                                        <FormText color="muted">
                                            AFT1
                                        </FormText>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormText color="muted">
                                            AFT2
                                        </FormText>
                                    </LabelGrouper>

                                </div>

                            {/*Where numbered labels end*/}





                            {/*Where pax inputs begin*/}

                                <div className="col-4">                                    
                                    <FormGroup>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </FormGroup>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>
                                    
                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt1_nopax" id="compt1_nopax" placeholder="Max 10" onBlur={value.handlePax1} />
                                            <Alert>{c1errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt2_nopax" id="compt2_nopax" placeholder="Max 12" onBlur={value.handlePax2} />
                                            <Alert>{c2errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt3_nopax" id="compt3_nopax" placeholder="Max 12" onBlur={value.handlePax3} />
                                            <Alert>{c3errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt4_nopax" id="compt4_nopax" placeholder="Max 12" onBlur={value.handlePax4} />
                                            <Alert>{c4errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt5_nopax" id="compt5_nopax" placeholder="Max 12" onBlur={value.handlePax5} />
                                            <Alert>{c5errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt6_nopax" id="compt6_nopax" placeholder="Max 12" onBlur={value.handlePax6} />
                                            <Alert>{c6errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="compt7_nopax" id="compt7_nopax" placeholder="Max 8" onBlur={value.handlePax7} />
                                            <Alert>{c7errMssge}</Alert>
                                        </FormGroup>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <FormGroup>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </FormGroup>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spanner name="" id="" disabled >.</Spanner>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <FormGroup>
                                             Total Pax : {totPax}
                                        </FormGroup>
                                    </LabelGrouper>
                                    

                                </div>
                            {/*Where pax inputs end*/}






                            {/*Where weight inputs begin*/}
                                <div className="col-2">
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input name="owe_weight" id="owe_weight" placeholder="17980" disabled />
                                        </FormGroup>
                                    </LabelGrouper>                                    

                                   
                                        <FormGroup>
                                            <Input name="observer_weight" id="observer_weight" onBlur={value.handleObserver} />
                                            {obsMssge}
                                        </FormGroup>                                     
                                    
                                        <FormGroup>
                                            <Input name="wardrobe_fwd_weight" id="wardrobe_fwd_weight" onBlur={value.handleWardrobe} />       
                                        </FormGroup>                                  
                                    
                                    
                                        <LabelGrouper>
                                            <Spandex name="pax_compt1_weight" id="pax_compt1_weight">{c1weight}KG</Spandex>
                                        </LabelGrouper>
                                                                           
                                   
                                    
                                        <LabelGrouper>
                                            <Spandex name="pax_compt2_weight" id="pax_compt2_weight">{c2weight}KG</Spandex>
                                        </LabelGrouper>                                  
                                    
                                    <LabelGrouper>
                                        
                                            <Spandex name="pax_compt3_weight" id="pax_compt3_weight">{c3weight}KG</Spandex>
                                        
                                    </LabelGrouper>                                    
                                    
                                        <LabelGrouper>
                                            <Spandex name="pax_compt4_weight" id="pax_compt4_weight">{c4weight}KG</Spandex>
                                        </LabelGrouper>
                                    
                                    
                                    <LabelGrouper>
                                            <Spandex name="pax_compt5_weight" id="pax_compt5_weight">{c5weight}KG</Spandex>
                                    </LabelGrouper>
                                    
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Spandex name="pax_compt6_weight" id="pax_compt6_weight">{c6weight}KG</Spandex>
                                        </FormGroup>
                                    </LabelGrouper>
                                    
                                    
                                        <LabelGrouper>
                                            <Spandex name="pax_compt7_weight" id="pax_compt7_weight">{c7weight}KG</Spandex>
                                        </LabelGrouper>
                                    
                                    
                                    <LabelGrouper>
                                            <Input type="text" name="bags_comptfwd_weight" id="bags_comptfwd_weight" placeholder="Max 231" onBlur={value.handleBaggFwd} />
                                    </LabelGrouper>
                                    
                                    <SkiperGrouper>                                       
                                        <Input type="text" name="bags_comptaft1_weight" id="bags_comptaft1_weight" placeholder="Max 1225" onBlur={value.handleBaggAft1} />
                                    </SkiperGrouper>
                                    
                                    <LabelGrouper>
                                        <FormGroup>
                                            <Input type="text" name="bags_comptaft2_weight" id="bags_comptaft2_weight" placeholder="Max 454" onBlur={value.handleBaggAft2} />
                                        </FormGroup>
                                    </LabelGrouper>
                                    


                                        <FormGroup>
                                            <Spandex name="zfw_weight" id="zfw_weight">{zfweight}</Spandex>
                                            <Alert>{zfMssge}</Alert>
                                        </FormGroup>
                                                                       
                                    
                                    
                                        <FormGrouper>
                                            <Input type="text" name="fob_weight" id="fob_weight" onBlur={value.handleFuel} />
                                        </FormGrouper>
                                    
                                    
                                   
                                        <FormGrouper>
                                            <Spandex name="rw_weight" id="rw_weight">{rampWeight}</Spandex>
                                            <Alert>{rampMssge}</Alert>
                                        </FormGrouper>
                                    
                                    
                                    
                                        <FormGrouper>
                                            <Input type="text" name="tf_weight" id="tf_weight" onBlur={value.handleTaxiFuel} />
                                        </FormGrouper>
                                    
                                    
                                    
                                        <FormGrouper>
                                            <span name="tw_weight" id="tw_weight"><h5>{toffWeight} KG</h5></span>
                                        </FormGrouper>
                                    
                                    
                                        <FormGrouper>
                                            <Input type="text" name="estfuelused_weight" id="estfuelused_weight" onBlur={value.handleFused} />
                                        </FormGrouper>
                                    
                                    
                                    <LabelGrouper>
                                        <FormGrouper>
                                            <span name="lw_weight" id="lw_weight"><h5>{lweight} KG</h5></span>
                                        </FormGrouper>
                                    </LabelGrouper>                                   

                                </div>
                            {/*Where weight inputs end*/}






                            {/*Where index displays begin*/}
                                <div className="col-2">

                                    <LabelGrouper>
                                        <Spandex name="owe_index" id="owe_index">90.5</Spandex>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                            <Spandex name="observer_index" id="observer_index">{obsindex}</Spandex>
                                    </LabelGrouper>                                    
                                   
                                  
                                    <FormGroup>
                                        <Spandex name="wardrobe_fwd_index" id="wardrobe_fwd_index" >{windex}</Spandex>
                                    </FormGroup>
                                   
                                    
                                   
                                <LabelGroupie>                                    
                                    <Spandex name="pax_compt1_index" id="pax_compt1_index">{c1index}</Spandex>
                                </LabelGroupie>                                    
                                    
                                <LabelGrouper>
                                    <Spandex name="pax_compt2_index" id="pax_compt2_index">{c2index}</Spandex>
                                </LabelGrouper>

                                <LabelGrouper>
                                    <FormGroup>
                                        <Spandex name="pax_compt3_index" id="pax_compt3_index">{c3index}</Spandex>
                                    </FormGroup>
                                </LabelGrouper>
                                
                                    <LabelGrouper>
                                        <Spandex name="pax_compt4_index" id="pax_compt4_index">{c4index}</Spandex>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spandex name="pax_compt5_index" id="pax_compt5_index">{c5index}</Spandex>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spandex name="pax_compt6_index" id="pax_compt6_index">{c6index}</Spandex>
                                    </LabelGrouper>

                                    <LabelGrouper>
                                        <Spandex name="pax_compt7_index" id="pax_compt7_index">{c7index}</Spandex>
                                    </LabelGrouper>

                                    <FormGroup>
                                        <Spandex name="bags_comptfwd_index" id="bags_comptfwd_index">{bfdindex}</Spandex>
                                    </FormGroup>

                                    <SkipGrouper>
                                        <Spandex name="bags_comptaft1_index" id="bags_comptaft1_index">{ba1index}</Spandex>
                                    </SkipGrouper>

                                    <FormGrouper>
                                        <Spandex name="bags_comptaft2_index" id="bags_comptaft2_index">{ba2index}</Spandex>
                                    </FormGrouper>

                                    <Groupest>
                                        <Spandex name="zfw_index" id="zfw_index">{zfindex}</Spandex>
                                    </Groupest>

                                    <FormGrouper>
                                        <Spandex name="fob_index" id="fob_index">{findex}</Spandex>
                                    </FormGrouper>

                                    <FormGrouper>
                                        <Spandex name="rw_index" id="rw_index">{rampIndex}</Spandex>
                                        <Alert></Alert>
                                    </FormGrouper>

                                    <FormGroupest>
                                        <span name="tf_index" id="tf_index">{tfindex}</span>
                                    </FormGroupest>

                                    <FormGrouper>
                                        <span name="tw_index" id="tw_index">{twIndex}</span>
                                    </FormGrouper>

                                    <FormGrouper>
                                        <span name="estfuelused_index" id="estfuelused_index"></span>
                                    </FormGrouper>

                                    <FormGroup>
                                        <span name="lw_index" id="lw_index">{lindex}</span>
                                    </FormGroup>

                                    <LabelGrouper>
                                        <Spandex name="totindex" id="totindex"></Spandex>
                                    </LabelGrouper>
                                </div>
                            {/*Where index displays end*/}

                            </div>

                    </FormContainer>


                    <DiagramContainer className="col-4">
                        <img alt="plane-chart" src={schematics} />
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

const Gap = styled.div`
    

`


const Officiator = styled.div`
    

`


const FormContainer = styled.div`
    


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

const NeutralGrouper = styled.div`
    margin-top:2.5rem;

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

const FormGroupest = styled.div`
    margin-top:3rem;

`

const Groupest = styled.div`
    margin-top:2.9rem;

`

const LabelGroupie = styled.div`
    margin-top:1.5rem;
    margin-bottom:2.2rem;

`

const FormGrouper = styled.div`
    margin-top:2rem;
    margin-bottom:1rem;

`

const SkipGrouper = styled.div`
    margin-top:3rem;

`

const SkiperGrouper = styled.div`
    margin-top:1rem;

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

const Spanners = styled.span`
    margin-top:3rem;

`

const Spandex = styled.div`
    width:5rem;
    font-weight:bold;
    font-family:Montserrat;
    padding-left:1.5rem;
`

const Trim = styled.div`
    
`