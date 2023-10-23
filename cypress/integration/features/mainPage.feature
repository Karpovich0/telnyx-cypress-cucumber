Feature: Main page

  Background:
    Given Main page is opened

  Scenario: Homepage Validation
    When User scrolls down to footer  
    Then Logo of Telnyx is visible
    And Navigation is visible
    And Footer is visible

  Scenario: Header Navigation Functionality
    When User clicks on Header Navigations Button
    And Click on any link from opened dropdown 
    Then New page from header link is loaded
    And Page’s content meets clicked link from header

  Scenario: Footer Navigation Functionality
    When User scrolls down to footer 
    And Click on any link in footer
    Then New page from footer link is loaded
    And Page’s content meets clicked link from footer 

  Scenario: Open contact us form
    When User clicks on contact us link 
    Then Contact us page is loaded
    And Contact us title is displayed

  Scenario: Open sign up form
    When User clicks on sign up link 
    Then Sign up page is loaded
    And Sign up title is displayed

  Scenario: Open solutions page
    When User clicks on solution link on header navigation
    Then Solutions page is loaded
    And Solutions' title is visible