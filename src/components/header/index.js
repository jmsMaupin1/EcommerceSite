import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
	background: white;
	padding-top: 10px;
`;

const LargeHeader = styled.div`
	display: block;
  	@media (max-width: ${props => props.menuChangePoint}) {
    	display: none;
  	}
`;

const SmallHeader = styled.div`
	display: none;
  	@media (max-width: ${props => props.menuChangePoint}) {
    	display: block;
  	}
`;

const Spacer = styled.div`
	display: flex;
  	align-items: center;
  	justify-content: space-between;
  	font-size: 3em;
  	margin: 0 8px;
`;

const Menu = styled.div`
	li + span {
		display: none;
	}

	a {
		text-decoration: none;
		text-transform: uppercase;
	}

	a:hover {
		color: white;
	}

	/* Mobile specific */
	@media (max-width: ${props => props.maxMobileWidth}) {
		max-height: ${props => props.isOpen ? '200px' : 0};
		overflow: hidden;
		transition: max-height .5s ease-in-out;

		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: table;
			table-layout: fixed;
			width: 100%;
		}

		li {
			width: 100%;
			padding: 1em 8px;
			background: ${props => props.bgcolor || 'white'};
		}

		li a {
			color: black;
		}
	}

	/* Desktop specific */
	@media (min-width: ${props => props.maxMobileWidth}) {
		ul {
			padding: 0;
			display: flex;
			justify-content: space-between;
			width: 80%;
			margin: 0 auto;
		}

		li {
			display: inline;
			padding: 2em 0;
			text-align: center;
			font-size: 1em;
		}

		span {
			display: inline;
			text-align: center;
			padding: 2em 0;
		}
	}
`;

const CollapseToggle = ({ onClick, icon }) => (
	  <div role="button" onClick={onClick}>
	    {icon}
	  </div>
);

const Navbar = ({isOpen, maxMobileWidth, bgColor}) => (
	<Menu
		isOpen={isOpen}
		maxMobileWidth={maxMobileWidth}>
		<ul>
			<li>
				<a href="#t">Home</a>
			</li>
			<li>
				<a href="#t">About</a>
			</li>
			<li>
				<a href="#t">Sign In</a>
			</li>
			<li>
				<a href="#t">Cart</a>
			</li>
		</ul>
	</Menu>
);

const Header = ({isOpen, mobileMaxWidth, clickHandler}) => {
	return (
		<HeaderContainer>
			<LargeHeader menuChangePoint={mobileMaxWidth}>
				<div style={{width: '100%'}}>
					<h1 style={{textAlign: 'center'}}>Shoppit</h1>
				</div>
				<Navbar maxMobileWidth="750px"/>
			</LargeHeader>

			<SmallHeader menuChangePoint={mobileMaxWidth}>
				<Spacer>
					<CollapseToggle onClick={clickHandler} icon={<i className="fa fa-bars" />}/>
					<p>Shoppit</p>
					<i className="fa fa-shopping-cart" />
				</Spacer>
				<Navbar isOpen={isOpen} maxMobileWidth="750px"/>
			</SmallHeader>
		</HeaderContainer>
	);
}

export default Header;
