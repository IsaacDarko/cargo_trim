import React, { Component } from 'react';
import {
    Input
} from 'reactstrap';
import styled from 'styled-components';
import { DataConsumer } from '../context';

export default class Officiator extends Component {
    render() {
        return (
            <DataConsumer>
                {value => {
                
                 return( 
                

                    <Ledger className="row" >
                       

                        <LabelGrouper className="col-2 ml-0">
                            <FormGroup>
                                <Input type="text" name="flightNo" id="flightNo" placeholder="FLIGHT NUMBER" onBlur={value.handleFlightNo} />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="captain" id="captain" placeholder="CAPTAIN" onBlur={value.handleCaptain} />
                            </FormGroup>
                        </LabelGrouper>


                        <LabelGrouper className="col-2 ml-8">
                            <FormGroup>
                                <Input type="text" name="preparedBy" id="preparedBy" placeholder="PREPARED BY" onBlur={value.handleDisp} />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="from" id="from" placeholder="FROM" onBlur={value.handleFrom} />
                            </FormGroup>
                        </LabelGrouper>


                        <LabelGrouper className="col-2 mr-0">
                            <FormGroup>
                            <Input type="text" name="date" id="date" placeholder="DATE" onBlur={value.handleDate} />
                            </FormGroup>

                            <FormGroup>
                                <Input type="text" name="to" id="to" placeholder="TO" onBlur={value.handleTo} />
                            </FormGroup>
                        </LabelGrouper>

                        <LabelGrouper className="col-2 mr-0">           
                            <FormGroup>
                                <Input type="text" name="fOffSig" id="fOffSig" placeholder="FIRST OFFICER'S SIG." onBlur={value.fOSign} />
                            </FormGroup>  

                            
                        </LabelGrouper>
                        

                        <LabelGrouper className="col-2 mr-0">
                            <Buttonator>LOG THIS TRIM SHEET</Buttonator>
                        </LabelGrouper>

                        <LabelGrouper className="col-2 mr-0">
                            <FormGroup>
                                <Buttonators>Email This Trim Sheet</Buttonators>
                            </FormGroup>

                            <FormGroup>
                                <Buttonators>Print This Trim Sheet</Buttonators>
                            </FormGroup>
                        </LabelGrouper>
                        
                    </Ledger>
            )}
        }
        </DataConsumer>
    )}
    
}


const Ledger = styled.div`
    background-color:rgba(67, 163, 121, 1);
`

const LabelGrouper = styled.div`
    margin-top:1rem;
    margin-bottom:1rem;
`


const FormGroup = styled.div`
    margin-bottom:1.1rem;

`
const Buttonator = styled.button`
    font-family:Roboto;
    font-weight:bold;
    color:rgba(255,255,255,0.8);
    height:5.3rem;
    width:13rem;
    border:3px solid rgb(0,0,0);
    border-radius:8px;
    background-color:rgba(40, 163, 41, 1);
`

const Buttonators = styled.button`
font-family:Roboto;
font-weight:bold;
color:rgba(255,255,255,0.8);
height:2.2rem;
width:12rem;
border:2px solid rgb(0,0,0);
border-radius:6px;
background-color:rgba(240, 80, 20, 1);
`