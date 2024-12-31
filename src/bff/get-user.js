import { getUsers } from "./get-users";

const getUser = async (loginToFind) => {
	const users = await getUsers();

	return users.find(({ login }) => login === loginToFind);
};
