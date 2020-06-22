import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';
import styled from 'styled-components';
import envelope from '../envelope.png';


export default class Graph extends Component {
    
    render() {
        return (
            <Canvas className="chart">
                <Scatter
                data={this.props.chartData}
                width={100}
                height={100}
                options={ this.props.chartOptions}
                />
            </Canvas>
        )
    }
}

const Canvas = styled.div`
    margin: 0px;
    padding: 0px;
    background-image: url(${envelope});

`
