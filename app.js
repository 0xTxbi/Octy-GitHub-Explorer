// Instantiate Github
const github = new GitHub;

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

			}

		})
		
	} else {

		// Clear Profile

	}

});