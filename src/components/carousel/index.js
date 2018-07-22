import React, { Component } from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
	display: flex;
	width: 100%;
	overflow: hidden;
`;

const SlotWrapper = styled.div`
	display: flex;
	transform: translateX(-${props => props.position * 100}%);
	transition: transform 1s ease;
`;

const CarouselSlot = styled.div`
	flex: 1 0 100%;
	width: 80%;
	overflow: hidden;
`;

export default class carousel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			position: 0
		}

		setInterval(()=>this.nextSlide(), props.interval || 5000)
	}

	nextSlide = () => {
		this.setState((state, props) => {
			const {position} = state;
			return {
				position: position < this.props.children.length - 1 ? position + 1 : 0
			}
		});
	}

	render() {
		const { children } = this.props;
		const { position } = this.state;

		return (
			<Carousel>
				<SlotWrapper position={position}>
					{ children.map((child, index)=>(
						<CarouselSlot key={index}>
							{child}
						</CarouselSlot>
					)) }
				</SlotWrapper>
			</Carousel>
		);
	}
}
