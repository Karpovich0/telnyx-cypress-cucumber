import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "./../pages/homePage";
import contactUsPage from "./../pages/contactUsPage";
import signUpPage from "./../pages/signUpPage";
import telnyx from "./../../fixtures/telnyx.json";

Given("Main page is opened", () => {
	cy.visitAndAcceptCookies("/");
});
// Homepage Validation
When("User scrolls down to footer", () => {
	homePage.elements.footer().scrollIntoView();
});
Then("Logo of Telnyx is visible", () => {
	homePage.elements.logo().should("be.visible");
});
Then("Navigation is visible", () => {
	homePage.elements.headerNavigation().should("be.visible");
});
Then("Footer is visible", () => {
	homePage.elements.footer().should("be.visible");
});
// Header Navigation Functionality
When("User clicks on Header Navigations Button", () => {
	homePage.elements.headerNavigation().within(() => {
		cy.get("button:first-of-type").click();
	});
});
When("Click on any link from opened dropdown", () => {
	homePage.elements.productsVoiceApi().should("be.visible").click();
});
Then("New page from header link is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("eq", data.productsVoiceApiLink);
	});
});
Then("Page’s content meets clicked link from header", () => {
	cy.fixture("telnyx").then((data) => {
		cy.get("h1").should("have.text", data.productsVoiceApiTitle);
	});
});
// Footer Navigation Functionality

When("Click on any link in footer", () => {
	homePage.elements.footerGlobalCoverage().click();
});
Then("New page from footer link is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("eq", data.globalCoverageLink);
	});
});
Then("Page’s content meets clicked link from footer", () => {
	cy.fixture("telnyx").then((data) => {
		cy.get("h1 span").should("have.text", data.globalCoverageTitle);
	});
});
// Open contact us form
When("User clicks on contact us link", () => {
	homePage.elements.contactUsLink().click();
});
Then("Contact us page is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("eq", data.contactUsLink);
	});
});
Then("Contact us title is displayed", () => {
	cy.fixture("telnyx").then((data) => {
		contactUsPage.elements.title().should("have.text", data.contactUsTitle);
	});
});
// Open sign up form

When("User clicks on sign up link", () => {
	homePage.elements.signUpLink().click();
});
Then("Sign up page is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("eq", data.signUpLink);
	});
});
Then("Sign up title is displayed", () => {
	cy.fixture("telnyx").then((data) => {
		signUpPage.elements.title().should("have.text", data.signUpTitle);
	});
});

// Open solutions page

When("User clicks on solution link on header navigation", () => {
	homePage.elements.solutionsLink().click();
});
Then("Solutions page is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("eq", data.solutionsPageLink);
	});
});
Then("Solutions' title is visible", () => {
	cy.fixture("telnyx").then((data) => {
		signUpPage.elements.title().should("have.text", data.solutionsPageTitle);
	});
});
