import React, { Component } from 'react';
import {
    Button,
    Form,
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Input
} from 'reactstrap';
import styled from 'styled-components';
import background from '../frontbg.jpg'

export default class Home extends Component {
    render() {
        return (
            <HomeContainer>
                <div className="row">
                    <AuthContainer className="col-3">
                        <Hot3>
                            Trim Sheet
                        </Hot3>
                        
                        <Login>
                        <h5>Please Login</h5>
                            <Form>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Username</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="" />
                                </InputGroup>
                                    <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Password</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="" />
                                </InputGroup>
                                <br/>
                                <Button>Login</Button>
                            </Form>                               
                        </Login>
                    </AuthContainer>   


                    <Clearfix className="col-9">
                        <img alt="homebg" src={background}  />
                    </Clearfix>                    
                </div>             
            </HomeContainer>
        )
    }
}

const HomeContainer = styled.div`
    padding-left:0px;
    padding-right:0px;
    margin-right:0px;
    margin-left:0px;
    
`

const AuthContainer = styled.div`
    width:22rem;
    padding-left:0px;
    padding-right:0px;
    margin-right:0px;
    margin-left:0px;
    background-color:rgba(2, 166, 106, 0.7);

`

const Clearfix = styled.div`
    padding-left:0px;
    padding-right:0px;
    margin-right:0px;
    margin-left:0px;

`

const Login = styled.div`
    margin-left:1.2rem;
    margin-top:1rem;
    background-color:rgba(255,255,255,0.7);
    width:20rem;
    height:15rem;
    border: solid 2px rgba(237, 190, 21, 1);
    border-radius:8px;
    padding:1rem;
    font-family:Gotu;
`

const Hot3 = styled.h3`
    margin-left:2rem;
    margin-top:6rem;
    font-family:Gotu;
    color:rgba(255,255,255, 1)
`