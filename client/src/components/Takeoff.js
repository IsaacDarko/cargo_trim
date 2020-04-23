import React, { Component } from 'react';
import Form from './Form';
import Officiator from './Officiator';


export default class Takeoff extends Component {
    render() {
        return (
            <div>
                <Form></Form>
                <Officiator></Officiator>                
            </div>
        )
    }
}
