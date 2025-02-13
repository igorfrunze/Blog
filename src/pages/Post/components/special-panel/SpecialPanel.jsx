import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CLOSE_MODAL, openModal, removePostAsync } from "../../../../actions";
import { Icon } from "../../../../components";
import { selectUserRole } from "../../../../selectors";
import { useServerRequest } from "../../../../hooks";
import styled from "styled-components";
import { checkAccess } from "../../../../utils";
import { ROLE } from "../../../../constants";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: "Удалить стастью?",
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate("/"),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && (
					<Icon
						inactive={true}
						id="fa-calendar-o"
						size="18px"
						margin="0 10px 0 0"
					/>
				)}
				{publishedAt}
			</div>
			{isAdmin && (
				<div className="buttons">
					{editButton}
					{publishedAt && (
						<Icon
							id="fa-trash-o"
							margin="0 0 0 10px"
							size="21px"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& i {
		position: relative;
		top: -6 px;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}
`;
