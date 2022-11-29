import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink
} from "./FooterStyles";

const FooterComp = () => {
    const btnStyle = {
        width: '100px',
        borderRadius: '5px',
        cursor: 'pointer'
    }
return (
	<Box>
	<Container>
		<Row>
		<Column>
        <FooterLink href="/">Home</FooterLink>
		</Column>
		<Column>
			<FooterLink href="/about">About</FooterLink>
		</Column>
        <Column>
			<FooterLink href="/contact">Contact</FooterLink>
		</Column>
        <Column>
			<FooterLink href="/menu"><button style={btnStyle}>Order</button></FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default FooterComp;
