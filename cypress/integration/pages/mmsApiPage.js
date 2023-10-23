class mmsApiPage {
	elements = {
		mmsTitle: () => cy.get("h1"),
	};
}

module.exports = new mmsApiPage();
