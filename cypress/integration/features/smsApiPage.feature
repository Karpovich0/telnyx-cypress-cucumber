Feature: SMS API page

  Background:
    Given SMS API page is opened

  Scenario: Check MMS link  
    When User clicks on MMS link
    Then MMS API page is opened
  
  Scenario: Scroll to use cases section  
    When Scroll down to use cases section
    Then Use cases title is visible

  Scenario: Verify functionality of slider's arrows  
    When Scroll down to use cases section
    And Click on right arrow
    Then A card disapears
    And A new card appears

  Scenario: Choose programming language in Start Buiding section 
  When Scroll down to Start building section
  And Click on any inactive programming language
  Then Previously  choosen language is inactive
  And Clicked by user programming language is active

  Scenario: Open FAQ item
  When Scroll down to FAQ section
  And Click on any closed FAQ item
  Then Previously  open FAQ item is closed
  And Clicked by user FAQ item is opened

  Scenario: Visit customer story page
  When Scroll down to customer stories section
  And Click on 'Read customer story' link
  Then Customer story is opened
  And Customer's name is displayed

  Scenario: Return to main page
  When User clicks on Telnyx logo in header
  Then Main page is loaded
  And Navigation is visible