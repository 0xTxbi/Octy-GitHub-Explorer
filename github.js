class GitHub {

	constructor() {
		this.client_id = '01eccde36a2b2fa579d4';
		this.client_secret = '01eccde36a2b2fa579d4';
	}


	async getUser(user) {

		const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const profile = await profileResponse.json();

		return {
			profile
		}

	}

}