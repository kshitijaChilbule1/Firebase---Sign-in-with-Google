import styled from 'styled-components';

export const Box = styled.div`
background: black;
padding: 10px;
position: absolute;
bottom: 0;
position: fixed;
width: 100%;
@media (max-width: 1000px) {
	padding: 6px 6px;
}
`;

export const Container = styled.div`
	max-width: 1000px;
	margin: 0 auto;
    
`
export const Column = styled.div`

`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(150px, 1fr));
grid-gap: 35px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(5px, 1fr));
}
`;
export const FooterLink = styled.a`
color: #fff;
font-size: 20px;
text-decoration: none;
display: flex;
margin-left: 400px;

&:hover {
	color: white;
}
`;

