import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background: #343434;
		color: white;
		font-family: "Roboto", sans-serif;
		margin: 0;

		overflow: hidden;
	}
`;

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const App = () => {
	<Wrapper></Wrapper>
};
