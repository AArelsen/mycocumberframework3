@create_hotel_room
Feature: US1002_user_create_a_hotel_room
  Scenario : TC01_user_create_a_hotel_room
    Given user is on the webpage
    And user clicks on the new login button
    When user enters the username
    When user enters the password
    And user click on the log button
    And user clicks on the hotel management button
    And user clicks on the hotel room button
    And user clicks on the add hotel room button
    When user enters the hotel id
    When user enters the code
    When user enters the name
    When user enters the location
    When user types the description
    When user drags the price
    When user drop the price
    When user enters the location
    When user enters the max adult count
    When user enters the max children count
    And user select the proved
    Then user clicks on the save button