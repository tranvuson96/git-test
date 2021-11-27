import React, {Component} from 'react';
import {Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />    
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="/home" >
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="/aboutus" >
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="/menu" >
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} to="/contactus" >
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cusines, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;