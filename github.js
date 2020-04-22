class GitHub {
	constructor() {
		this.repo_count = 5;
		this.repos_sort = "created: asc";
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://api.github.com/users/${user}`);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos,
		};
	}
}
