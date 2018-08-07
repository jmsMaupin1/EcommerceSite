import React, { Component } from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: grid;
	grid-row-gap: 10px;
	grid-column-gap: 10px;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-template-areas: 
		"a f f f f f"
		"b f f f f f"
		"c f f f f f"
		"d f f f f f"
		"e f f f f f";
`;

const SideImage1 = styled.div`
	background: url(${props => props.img});
	background-size: cover;
	grid-area: a;
	border: 1px solid black;
`;

const SideImage2 = styled.div`
	background: url(${props => props.img});
	background-size: cover;
	grid-area: b;
	border: 1px solid black;
`;

const SideImage3 = styled.div`
	background: url(${props => props.img});
	background-size: cover;
	grid-area: c;
	border: 1px solid black;
`;

const SideImage4 = styled.div`
	background: url(${props => props.img});
	background-size: cover;	
	grid-area: d;
	border: 1px solid black;
`;

const SideImage5 = styled.div`
	background: url(${props => props.img});
	background-size: cover;
	grid-area: e;
	border: 1px solid black;
`;

const MainImage = styled.div`
	background: url(${props => props.img});
	background-size: cover;
	grid-area: f;
	border: 1px solid black;
`;

export default class ProductGallery extends Component {

	constructor(props) {
		super(props);

		this.state = {
			images: props.images,
			selectedImage: 0
		}
	}

	handleClick = (imageIndex) => {
		this.setState({selectedImage: imageIndex});
	}

	render() {
		const {images} = this.props;
		return (
			<GridWrapper>
				<SideImage1 onClick={this.handleClick.bind(this, 0)} img={images[0]}/>
				<SideImage2 onClick={this.handleClick.bind(this, 1)} img={images[1]}/>
				<SideImage3 onClick={this.handleClick.bind(this, 2)} img={images[2]}/>
				<SideImage4 onClick={this.handleClick.bind(this, 3)} img={images[3]}/>
				<SideImage5 onClick={this.handleClick.bind(this, 4)} img={images[4]}/>
				<MainImage img={images[this.state.selectedImage]}/>
			</GridWrapper>
		);
	}
}
