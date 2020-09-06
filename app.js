// Instantiate Github
const github = new Github;

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

			if (data.profile.message === 'Not Found' ) {
				
				// Show Alert

			} else {
				
				// Display User Profile
				ui.showProfile(data.profile);
				console.log(data);

			}

		})
		
	} else {

		// Clear Profile

	}

});