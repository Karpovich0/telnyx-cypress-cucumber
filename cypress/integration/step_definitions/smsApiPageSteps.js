import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import smsApiPage from "./../pages/smsApiPage";
import mmsApiPage from "./../pages/mmsApiPage";
import customerStoriesPage from "./../pages/customerStoriesPage";
import telnyx from "./../../fixtures/telnyx.json";

Given("SMS API page is opened", () => {
	cy.visitAndAcceptCookies("/products/sms-api");
});

When("User clicks on MMS link", () => {
	smsApiPage.elements.mmsLink().click();
});

When("Scroll down to use cases section", () => {
	smsApiPage.elements.useCasesSection().scrollIntoView();
});

Then("MMS API page is opened", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("include", data.mmsLink);
		mmsApiPage.elements.mmsTitle().should("have.text", data.mmsTitleText);
	});
});

Then("Use cases title is visible", () => {
	smsApiPage.elements.useCasesTitle().should("be.visible");
});

When("Click on right arrow", () => {
	smsApiPage.elements.useCasesArrowNext().click();
});
Then("A card disapears", () => {
	smsApiPage.elements.accountNotificationsCard().should("not.be.visible");
});
Then("A new card appears", () => {
	smsApiPage.elements.twoFactorAuthenticationCard().should("be.visible");
});

// Programming language

When("Scroll down to Start building section", () => {
	smsApiPage.elements.startBuidingSection().scrollIntoView();
});
When("Click on any inactive programming language", () => {
	smsApiPage.elements.pythonLang().click();
});
Then("Previously  choosen language is inactive", () => {
	smsApiPage.elements.curlCode().should("not.be.visible");
});
Then("Clicked by user programming language is active", () => {
	smsApiPage.elements.pythonCode().should("be.visible");
});

// FAQ

When("Scroll down to FAQ section", () => {
	smsApiPage.elements.faqTitle().scrollIntoView();
});
When("Click on any closed FAQ item", () => {
	smsApiPage.elements.faqItem().click();
});
Then("Previously  open FAQ item is closed", () => {
	smsApiPage.elements.faqItemText().should("not.be.visible");
});
Then("Clicked by user FAQ item is opened", () => {
	smsApiPage.elements.faqItemTextThatWillBeVisible().should("be.visible");
});

// Customer story

When("Scroll down to customer stories section", () => {
	smsApiPage.elements.customerStoriesSection().scrollIntoView();
});
When("Click on 'Read customer story' link", () => {
	smsApiPage.elements.readCustomerStoryLink().click();
});
Then("Customer story is opened", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("include", data.customerLink);
	});
});
Then("Customer's name is displayed", () => {
	cy.fixture("telnyx").then((data) => {
		customerStoriesPage.elements.customerName().should("have.text", data.customerName);
	});
});

//Return to main page
When("User clicks on Telnyx logo in header", () => {
	smsApiPage.elements.homePageLink().click();
});
Then("Main page is loaded", () => {
	cy.fixture("telnyx").then((data) => {
		cy.url().should("include", data.homePageLink);
	});
});
