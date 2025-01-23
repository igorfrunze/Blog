import styled from "styled-components";
import { H2 } from "../H2/H2";

const Div = styled.div`
	  display: flex;
	  flex-direction: column;
	  justify-content: center;
`

export const Content = ({ children, error }) =>
	error ? (
		<Div>
			<H2>Ошибка</H2>
			<div>{error}</div>
		</Div>
	) : (
		children
	);
