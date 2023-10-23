class solutionsPage {
	elements = {
		title: () => cy.get("section h1"),
		useCasesLink: () => cy.get('[href="#use-cases"]'),
		useCasesTitle: () => cy.get("#use-cases strong"),
		usesCasesSection: () => cy.get("section#use-cases"),
		useCase: () => cy.get("section#use-cases h3").eq(0),
		useCasePageLink: () => cy.get('[href="/use-cases/ai-and-machine-learning"]'),
	};
}

module.exports = new solutionsPage();
