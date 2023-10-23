class signUpPage {
	elements = {
		title: () => cy.get("section h1"),
	};
}

module.exports = new signUpPage();
