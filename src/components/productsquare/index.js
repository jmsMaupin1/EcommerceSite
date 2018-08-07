import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	display: inline-block;
	padding: 10px;
	background: #fff;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	img {
		display: block;
		margin: 0 auto;
		width: '100%';
	}

	@media only screen and (max-width: 750px) {
		padding: 0px;
	}
`;

const Left = styled.div`
	float: left;
	font-size: 1.2em;
`;

const ProductHighlightSquare = ({title, price, productImage}) => (
	<Card>
		<img src={productImage} alt=""/>
		<h4>{title}</h4>
		<Left>{`Price: $${price}`}</Left>
	</Card>	
);

export default ProductHighlightSquare;
