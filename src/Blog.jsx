import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import styled from "styled-components";
import { Auth, Registration, Users } from "./pages";

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`;

const Page = styled.div`
	padding: 120px 0;
`;

function Blog() {
	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница </div>} />
					<Route path="/login" element={<Auth />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Page>
			<Footer />
		</AppColumn>
	);
}

export default Blog;
