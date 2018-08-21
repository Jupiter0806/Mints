import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import logo from '../img/logo.png';

export default ({}) => (
    <Navbar style={{
            backgroundColor: '#f8f8f8',
            borderBottom: '1px solid #e7e7e7',
            position: 'fixed',
            width: '100%',      
            marginTop: -70  
        }}>
        <Navbar.Header>
            <Navbar.Brand>
                <a style={{ color: '#5e5e5e' }} href="#/">
                    <img 
                        style={{
                            width: 22,
                            marginTop: -5,
                            marginRight: 6
                            }} 
                        src={logo} 
                        alt='logo' 
                        />
                    Mints
                </a>
            </Navbar.Brand>
        </Navbar.Header>

        <Nav style={{ flexDirection: 'row' }}>
            <NavItem style={{ paddingRight: 15 }} eventKey={1} href="#/">
                <span style={{ color: '#777777' }}>Primary</span>
            </NavItem>

            <NavItem style={{ paddingRight: 15 }} eventKey={2} href="#/secondary">
                <span style={{ color: '#777777' }}>Secondary</span>
            </NavItem>
        </Nav>
    </Navbar>
)