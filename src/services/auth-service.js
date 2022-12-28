import axios from "axios";

const apiUrl = "https://localhost:7183";

class authService {
	async login(username, password) {
		const email = "";
		return await axios
			.post(apiUrl + "/api/Account/Login", {
				username,
				password,
				email,
			})
			.then(response => {
				if (response.data.successStatus === true) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				// console.log(response.data);
				return response.data;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	async register(username, password, email) {
		return await axios.post(apiUrl + "/api/Account/Register", {
			username,
			password,
			email,
		});
	}

	getCurrentUser() {
		while (localStorage.getItem("user") == null);
		return JSON.parse(localStorage.getItem("user"));
	}

	loggedIn() {
		if (localStorage.getItem("user") === null) {
			return false;
		}
		return true;
	}

	getToken() {
		const user = this.getCurrentUser();
		console.log(user.message)
		return user.message;
	}
}

export default new authService();
