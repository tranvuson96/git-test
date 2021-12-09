import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		// console.log(props);
		this.state = {
			isNavOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}
	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}
	render() {
		return (
			<React.Fragment>
				<Navbar dark expand='md'>
					<div className='container d-flex'>
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-auto' href='/'>
							<img
								src='asset/images/logo.png'
								height='30'
								width='41'
								alt='Ristorante Con Fusion'
							/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink
										className={({ isActive }) =>
											"nav-link" + (isActive ? " activated" : "")
										}
										to='/home'>
										<span className='fa fa-home fa-lg'></span>Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={({ isActive }) =>
											"nav-link" + (isActive ? " activated" : "")
										}
										to='/staffs'>
										<span className='fa fa-address-book fa-lg'></span>Staffs
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={({ isActive }) =>
											"nav-link" + (isActive ? " activated" : "")
										}
										to='/departments'>
										<span className='fa fa-address-card fa-lg'></span>
										Departments
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className={({ isActive }) =>
											"nav-link" + (isActive ? " activated" : "")
										}
										to='/salary'>
										<span className='fa fa-address-card fa-lg'></span>Salary
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<div className='jumbotron'>
					<div className='container'>
						<div className='row row-header'>
							<div className='col-12 col-sm-6'>
								<NavLink to='/home' className='demo'>
									<h1>Demo App</h1>
								</NavLink>
							</div>
							<div className='col-12 col-sm-6'></div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;
