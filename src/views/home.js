import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Carousel from '../components/carousel';

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

export default class Home extends Component {
	render() {
		return (
			<div>
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
