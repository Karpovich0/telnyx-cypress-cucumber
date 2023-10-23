class homePage {
	elements = {
		headerNavigation: () => cy.get("header nav:not([id])"),
		logo: () => cy.get('header [href="/"]'),
		productsVoiceApi: () => cy.get('[href$="/products/voice-api"]').first(),
		footer: () => cy.get("footer"),
		footerGlobalCoverage: () => cy.get('footer a[href="/global-coverage"]'),
		registrationLink: () => cy.get("#header-sign-up"),
		solutionsLink: () => cy.get('[href="/solutions"]').eq(0),
		signUpLink: () => cy.get('[href="/sign-up"]').eq(0),
		dropDown: () => cy.get('div[data-state="open"]'),
		contactUsLink: () => cy.get('[href="/contact-us"]').eq(0),
	};

	clickOnSignup() {
		this.elements.registrationLink().click();
	}
}

module.exports = new homePage();
