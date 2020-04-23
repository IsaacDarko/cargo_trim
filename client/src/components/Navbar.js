import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import brandlogo from '../logo.png';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (

            <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={brandlogo} alt="logo" className="navbar-brand" />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li className="nav-item ml-5">
                        <Link to="/takeoff" className="nav-link">
                            Take-off
                        </Link>
                    </li>

                    <li className="nav-item ml-5">
                        <Link to="/result" className="nav-link">
                            Results
                        </Link>
                    </li>
                </ul>

                <Link to="/log" className="ml-auto">
                     <ButtonContainer>
                         <span className="mr-2">
                            <i className="fas fa-clipboard-list" />
                         </span>                         
                         Log History
                     </ButtonContainer>
                </Link>
            </NavContainer>
            
        )
    }
}

const ButtonContainer = styled.button `

    background: white;
    border-radius:7px;
    border: 0.2rem solid rgba(140, 59, 59, 0.7);

`

const NavContainer = styled.nav `

    background-color:rgba(2, 166, 106, 0.7);
    font-size:18px;
    color:rgb(255, 255, 255);
    font-family:;
    

`