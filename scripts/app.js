requirejs(["github", "ui"], function (github, ui) {
	//This function is called when scripts/helper/util.js is loaded.
	//If util.js calls define(), then this function is not fired until
	//util's dependencies have loaded, and the util argument will hold
	//the module value for "helper/util".
});


// Instantiate Github
const github = new Github();

// Instantiate UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {

	// Get Input Text
	let userText = e.target.value;

	if (userText !== '') {

		// Make HTTP Call
		github.getUser(userText)
			.then(data => {

				if (data.profile.message === 'Not Found') {

					// Show Alert
					ui.showAlert('User Not Found', 'alert alert-danger');

				} else {

					// Display User Profile
					ui.clearAlert();
					ui.showProfile(data.profile);

					ui.showRepos(data.repos);

				}

			})

	} else {

		// Clear Profile
		ui.clearProfile();

	}

});