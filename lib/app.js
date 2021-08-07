// Import classes
import Github from "./github.js";
import UI from "./ui.js";

export function AppRunner() {

	// Get search input data
	let obtainedUser = window.sessionStorage.getItem('searchInput')
	console.log(obtainedUser)


	// Instantiate Github class
	const github = new Github;

	// Instantiate UI class
	const ui = new UI;

	// Search input
	const searchUser = document.getElementById('generateUser');

	// Search Input Event Listener
	searchUser.addEventListener('onClick', (e) => {

		console.log('hey')

		// Get Input Text
		let userText = obtainedUser;

		if (userText !== '') {

			// Make HTTP Call
			github.getUser(userText)
				.then(data => {

					if (data.profile.message === 'Not Found') {

						// Show Alert
						ui.showAlert('User Not Found', 'alert alert-danger');

					} else {

						// Display User Profile
						console.log(data)

					}

				})

		} else {

			// Clear Profile
			ui.clearProfile();

		}

	})

}