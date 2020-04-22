class UI {
	constructor() {
		this.profile = document.querySelector(".profile");
	}

	// Display Profile
	showProfile(user) {
		this.profile.innerHTML = `
      <div class="card card-body mb-3 ">

        <div class="row">

          <div class="col-md-3">
            <img class="img-fluid mb-2 " src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>

          <div class="col-md-9">
            <span class="badge badge-primary mb-2">Public Repos:${user.public_repos}</span>

            <span class="badge badge-secondary mb-2">Public Gists:${user.public_gists}</span>

            <span class="badge badge-success mb-2">Followers:${user.followers}</span>

            <span class="badge badge-info mb-2">Following:${user.following}</span>
            <br><br>

            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>

              <li class="list-group-item">Website/Blog: ${user.blog}</li>

              <li class="list-group-item">Location: ${user.location}</li>

              <li class="list-group-item">Member Since: ${user.created_at}</li>

            </ul>

            

          </div>

      </div>

      <h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
      <div id="repos"></div>

    `;
	}

	// Display Repos
	showRepos(repos) {
		let output = "";

		repos.forEach(function (repo) {
			output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6 mb-2">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <span class="badge badge-primary mb-2"
            >Stars:${repo.stargazers_count}</span
          >
    
          <span class="badge badge-secondary mb-2"
            >Watchers:${repo.watchers_count}</span
          >
    
          <span class="badge badge-success mb-2">Forks:${repo.forks_count}</span>
        </div>
      </div>
    </div>
    
      `;
		});

		// Output
		document.querySelector("#repos").innerHTML = output;
	}

	// Show Alert
	showAlert(message, clasName) {
		// Clear previous alerts
		this.clearAlert();

		// Create Div
		const div = document.createElement("div");

		// Add Classes
		div.className = clasName;

		// Add Text
		div.appendChild(document.createTextNode(message));

		// Get Parents
		const container = document.querySelector(".searchContainer");
		// Get Search Box
		const search = document.querySelector(".search");
		// Insert the alert
		container.insertBefore(div, search);

		// Timeout after 3s
		setTimeout(() => {
			this.clearAlert();
		}, 3000);
	}

	// Clear Alert Message
	clearAlert() {
		const currentAlert = document.querySelector(".alert");

		if (currentAlert) {
			currentAlert.remove();
		}
	}

	// Clear Profile
	clearProfile() {
		this.profile.innerHTML = "";
	}
}
