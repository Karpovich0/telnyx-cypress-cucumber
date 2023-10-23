class smsApiPage {
	elements = {
		mmsLink: () => cy.get('[href="https://telnyx.com/products/mms-api"]'),
		useCasesSection: () => cy.get("#nhZRrToVgqEhdqn8dj5Ja"),
		useCasesTitle: () => cy.get("#nhZRrToVgqEhdqn8dj5Ja h2"),
		accountNotificationsCard: () => cy.get("#Account-notifications"),
		twoFactorAuthenticationCard: () => cy.get("#Two-factor-authentication"),
		useCasesArrowNext: () => cy.get("#nhZRrToVgqEhdqn8dj5Ja button+button"),
		startBuidingSection: () => cy.get("#4vt7WRkKtRmNeBRtjE0f88"),
		pythonLang: () => cy.get('[id="radix-:Rlml5m:-trigger-Python"]'),
		curlCode: () => cy.get('div[id="radix-:Rlml5m:-content-cURL"]'),
		pythonCode: () => cy.get('[id="radix-:Rlml5m:-content-Python"]'),
		faqTitle: () => cy.get("#Zh8MLscY9liDwmW0dbqt1"),
		faqItem: () => cy.get("[id='radix-:Ricrl5m:']"),
		faqItemText: () => cy.get("[id='radix-:R2hcrl5m:']"),
		faqItemTextThatWillBeVisible: () => cy.get("[id='radix-:R2icrl5m:']"),
		customerStoriesSection: () => cy.get("#4Vcs6V9diKkRVpVofXki0a"),
		readCustomerStoryLink: () => cy.get("#6sMJ0jbNCsQwfR63Z743sX"),
		homePageLink: () => cy.get('header a[href="/"]'),
	};
}

module.exports = new smsApiPage();
