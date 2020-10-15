@regression
Feature: US1002_user_should_add_data_with_parameter
  Scenario: TC01_Testing_the_data_tables_web_page
    Given user is on the datatables page
    And user clicks on the new button
    When user enters the firstname "Adam"
    When user  enters the lastname "Arelsen"
    When user enters the position "Qa"
    When user enters the office "dll"
    When user enters the extension "123456"
    When user enters the startdate "2020-11-11"
    When user enters the salary "123456"
    And user clicks on the create button
    And search for the first name "Adam"
    Then verify the name fields contains first name "Adam"

  @regression
  Scenario: TC02_Testing_the_data_tables_web_page
    Given user is on the datatables page
    And user clicks on the new button
    When user enters the firstname "Ad"
    When user  enters the lastname "Ar"
    When user enters the position "Q"
    When user enters the office "dl"
    When user enters the extension "12345688"
    When user enters the startdate "2020-11-11"
    When user enters the salary "12345699"
    And user clicks on the create button
    And search for the first name "Ad"
    Then verify the name fields contains first name "Ad"

  Scenario: TC03_Testing_the_data_tables_web_page_with_feature_data
    Given user is on the datatables page
    And user clicks on the new button
    When user enters the firstname "Aa3"
    When user  enters the lastname "Aa"
    When user enters the position "Qa"
    When user enters the office "dla"
    When user enters the extension "1234568844"
    When user enters the startdate "2020-11-11"
    When user enters the salary "1234569944"
    And user clicks on the create button
    And search for the first name "Aa3"
    Then verify the name fields contains first name "Aa3"


  Scenario: TC04_Testing_the_data_tables_web_page_with_feature_data
    Given user is on the datatables page
    And user clicks on the new button
    When user enters the firstname "Aa4"
    When user  enters the lastname "Aa4"
    When user enters the position "Qa"
    When user enters the office "dla"
    When user enters the extension "1234568844"
    When user enters the startdate "2020-11-11"
    When user enters the salary "1234569944"
    And user clicks on the create button
    And search for the first name "Aa4"
    Then verify the name fields contains first name "Aa4"

  Scenario: TC05_Testing_the_data_tables_web_page_with_feature_data
    Given user is on the datatables page
    And user clicks on the new button
    When user enters the firstname "Aa5"
    When user  enters the lastname "Aa5"
    When user enters the position "Qa"
    When user enters the office "dla"
    When user enters the extension "1234568844"
    When user enters the startdate "2020-11-11"
    When user enters the salary "1234569944"
    And user clicks on the create button
    And search for the first name "Aa5"
    Then verify the name fields contains first name "Aa5"