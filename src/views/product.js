import React, { Component } from 'react';
import styled from 'styled-components';	

// Components
import Header from '../components/header';
import ProductGallery from '../components/productgallery';

// Product Assets
import SDFK from '../assets/productphotos/smok-devlin-full-kit.jpg';
import SGB from '../assets/productphotos/smok-gp-baby.jpg';
import SPPSK from '../assets/productphotos/smok-pen-prince-starter-kit.jpg';
import SPSK from '../assets/productphotos/smok-pen-starter-kit.jpg';
import SPAPK from '../assets/productphotos/smok-Priv-and-prince-kit.jpg';

import "react-image-gallery/styles/css/image-gallery.css";

const ContentWrapper = styled.div`
	display: grid;
	width: 80%;
	/*Top Right Bot Left*/
	margin: 10vh auto auto auto;
	grid-template-columns: 1fr 1fr;
`;

const FlatButton = styled.button`
	float: left;
	color: #6496c8;
	background: rgba(0,0,0,0);
  	border: solid 2px #6496c8;
`;

export default class product extends Component {
	constructor(props) {
		super(props);

		this.state = {showMenu: false}
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
				/>
				<ContentWrapper>
					<div style={{width: "500px", height: "400px"}}>
						<ProductGallery images={[SDFK, SGB, SPPSK, SPSK, SPAPK]}/>
					</div>

					<div style={{margin: '0 auto'}}>
						<h1>Smok Devlin Full Kit | $700</h1>
						<div style={{display: 'flex', justifyContent: 'space-between', fontSize: '2em'}}>
							<FlatButton>Button</FlatButton>
							<div style={{display: 'flex', width: '50%', justifyContent: 'space-between', background: 'red', alignItems: 'center'}}>
								<i className="fa fa-plus"/>
								<div style={{border: '1px solid black'}}>
									1
								</div>
								<i className="fa fa-minus"/>
							</div>
						</div>
					</div>
				</ContentWrapper>

			</div>
		);
	}
}