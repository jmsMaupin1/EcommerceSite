import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Carousel from '../components/carousel';
import Header from '../components/header';

// Carousel Slide Assets
import IjoyZenth3Banner from '../assets/carouselslides/ijoy-zenth3-banner.jpg';
import PolarModBanner from '../assets/carouselslides/polar-mod-banner.jpg';
import SmallTobaccoBanner from '../assets/carouselslides/small-tobacco-banner.jpg';
import SolaceBanner from '../assets/carouselslides/solace-banner.jpg';

const Slide = styled.div`
	width: 100%;
	img {
		display: block;
		margin: 0 auto;
		width: 80%;
		height: auto;
		@media only screen and (max-width: 750px) {
			width: 100%;
			margin: 0;
		}
	}
`;

const Grid = styled.div`
	padding-top: 50px;
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-column-gap: 50px;
	grid-row-gap: 50px;

	/* Small Laptop */
	@media only screen and (max-width: 1024px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	/* Tablet */
	@media only screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-row-gap: 20px;
		padding-top: 20px;
	}

	/* Mobile */
	@media only screen and (max-width: 426px) {
		width: 100%;
		grid-template-columns: auto;
		grid-row-gap: 20px;
		padding-top: 20px;
	}
`;

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		}
	}

	handleClick = () => {
		this.setState({showMenu: !this.state.showMenu});
	}

	render() {
		const {showMenu} = this.state;
		
		return (
			<div>
				<Header
					isOpen={showMenu}
					mobileMaxWidth="750px"
					clickHandler={this.handleClick}
				>
				</Header>
				<Carousel>
					<Slide>
						<img src={IjoyZenth3Banner} alt=""/>
					</Slide>

					<Slide>
						<img src={PolarModBanner} alt=""/>
					</Slide>

					<Slide>
						<img src={SmallTobaccoBanner} alt=""/>
					</Slide>

					<Slide>
						<img src={SolaceBanner} alt=""/>
					</Slide>
				</Carousel>
			</div>
		);
	}
}
