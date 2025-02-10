import styled from "styled-components";
import { Input, Icon } from "../../../../components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon inactive={true} id="fa-search" size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	margin: 40px auto 0;
	width: 340px;
	height: 40px;

	& > input {
		padding: 10px 40px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 6px;
		right: 9px;
	}
`;
