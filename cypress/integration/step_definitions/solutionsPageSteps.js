import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import solutionsPage from "./../pages/solutionsPage";
import useCasePage from "../pages/useCasePage";
import telnyx from "./../../fixtures/telnyx.json";

Given("Solutions page is opened", () => {
	cy.visitAndAcceptCookies("/solutions");
});
// Scroll down functionality on Solutions' page
When("User clicks on See use cases link", () => {
	solutionsPage.elements.useCasesLink().click();
});

Then("Page is scrolled to a use cases section", () => {
	solutionsPage.elements.usesCasesSection().should("be.visible");
});

Then("The section title meets clicked link", () => {
	solutionsPage.elements.useCasesTitle().should("be.visible");
});

// Open uses case's page

When("User scroll to an use case card", () => {
	solutionsPage.elements.useCase().scrollIntoView().should("be.visible");
});

When("Clicks on use case link", () => {
	solutionsPage.elements.useCasePageLink().click();
});

Then("Uses case's page is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("include", data.useCaseLink);
	});
});

Then("Title of page meets clicked use case's title", () => {
	cy.fixture("telnyx").then((data) => {
		useCasePage.elements.title().should("have.text", data.useCaseTitle);
	});
});
