Feature: Solutions page

  Background:
    Given Solutions page is opened

  Scenario: Scroll down functionality on Solutions' page
    When User clicks on See use cases link  
    Then Page is scrolled to a use cases section
    And The section title meets clicked link

Scenario: Open uses case's page
    When User scroll to an use case card   
    And Clicks on use case link    
    Then Uses case's page is loaded
    And Title of page meets clicked use case's title