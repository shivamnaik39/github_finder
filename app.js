// Initialize github
const gitHub = new GitHub();

// Initialize UI
const ui = new UI();

const searchUser = document.querySelector("#searchUser");
const searchBtn = document.querySelector("#searchBtn");

// Search Button Event Listener
searchBtn.addEventListener("click", (e) => {
	const userText = searchUser.value;

	if (userText !== "") {
		// Make Http call

		gitHub.getUser(userText).then((data) => {
			if (data.profile.message === "Not Found") {
				// Show Alert
				ui.showAlert("User Not Found!", "alert alert-danger");
			} else {
				// Show Profile
				// console.log(data.profile);
				ui.showProfile(data.profile);

				ui.showRepos(data.repos);
			}
		});
	} else {
		// Clear Profile
		ui.clearProfile();
	}

	e.preventDefault();
});
