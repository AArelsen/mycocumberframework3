$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US1000%20Google%20search%20test.feature");
formatter.feature({
  "name": "US1000 Google search test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@flowersearch"
    }
  ]
});
formatter.background({
  "name": "User is on the google page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_is_on_the_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC04 Verify bmw search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@flowersearch"
    },
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "user search for \"bmw\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has \"bmw\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US1002_user_should_add_data_with_parameters.feature");
formatter.feature({
  "name": "US1002_user_should_add_data_with_parameter",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.scenario({
  "name": "TC01_Testing_the_data_tables_web_page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "user is on the datatables page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_is_on_the_datatables_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the firstname \"Adam\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  enters the lastname \"Arelsen\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the position \"Qa\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the office \"dll\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the extension \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_extension(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the startdate \"2020-11-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the salary \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search for the first name \"Adam\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.search_for_the_first_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the name fields contains first name \"Adam\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.verify_the_name_fields_contains_first_name(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//td[class\u003d\u0027sorting_1\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Duygus-MacBook-Pro.local\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\n\tat stepdefinitions.DataTablesStepDefinition.verify_the_name_fields_contains_first_name(DataTablesStepDefinition.java:99)\n\tat ✽.verify the name fields contains first name \"Adam\"(file:///Users/duygueren/IdeaProjects/mycocumberframework3/src/test/resources/features/US1002_user_should_add_data_with_parameters.feature:15)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "TC02_Testing_the_data_tables_web_page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test1"
    },
    {
      "name": "@test1,"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "user is on the datatables page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_is_on_the_datatables_page()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.DataTablesStepDefinition\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Duygus-MacBook-Pro.local\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/c7/blcl6lt91w9...}, goog:chromeOptions: {debuggerAddress: localhost:49779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e9fa9312c2ade38e6f145a9e49193bb4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat utilities.Driver.getDriver(Driver.java:47)\n\tat pages.DataTablePage.\u003cinit\u003e(DataTablePage.java:11)\n\tat stepdefinitions.DataTablesStepDefinition.\u003cinit\u003e(DataTablesStepDefinition.java:11)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the firstname \"Ad\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user  enters the lastname \"Ar\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the position \"Q\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the office \"dl\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the extension \"12345688\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_extension(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the startdate \"2020-11-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the salary \"12345699\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search for the first name \"Ad\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.search_for_the_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the name fields contains first name \"Ad\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.verify_the_name_fields_contains_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC03_Testing_the_data_tables_web_page_with_feature_data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "user is on the datatables page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_is_on_the_datatables_page()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.DataTablesStepDefinition\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Duygus-MacBook-Pro.local\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/c7/blcl6lt91w9...}, goog:chromeOptions: {debuggerAddress: localhost:49779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e9fa9312c2ade38e6f145a9e49193bb4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat utilities.Driver.getDriver(Driver.java:47)\n\tat pages.DataTablePage.\u003cinit\u003e(DataTablePage.java:11)\n\tat stepdefinitions.DataTablesStepDefinition.\u003cinit\u003e(DataTablesStepDefinition.java:11)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the firstname \"Aa3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user  enters the lastname \"Aa\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the position \"Qa\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the office \"dla\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the extension \"1234568844\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_extension(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the startdate \"2020-11-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the salary \"1234569944\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search for the first name \"Aa3\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.search_for_the_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the name fields contains first name \"Aa3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.verify_the_name_fields_contains_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC04_Testing_the_data_tables_web_page_with_feature_data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "user is on the datatables page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_is_on_the_datatables_page()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.DataTablesStepDefinition\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Duygus-MacBook-Pro.local\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/c7/blcl6lt91w9...}, goog:chromeOptions: {debuggerAddress: localhost:49779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e9fa9312c2ade38e6f145a9e49193bb4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat utilities.Driver.getDriver(Driver.java:47)\n\tat pages.DataTablePage.\u003cinit\u003e(DataTablePage.java:11)\n\tat stepdefinitions.DataTablesStepDefinition.\u003cinit\u003e(DataTablesStepDefinition.java:11)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the firstname \"Aa4\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user  enters the lastname \"Aa4\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the position \"Qa\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the office \"dla\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the extension \"1234568844\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_extension(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the startdate \"2020-11-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the salary \"1234569944\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search for the first name \"Aa4\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.search_for_the_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the name fields contains first name \"Aa4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.verify_the_name_fields_contains_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC05_Testing_the_data_tables_web_page_with_feature_data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test1"
    }
  ]
});
formatter.step({
  "name": "user is on the datatables page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_is_on_the_datatables_page()"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Failed to instantiate class stepdefinitions.DataTablesStepDefinition\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:135)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.getInstance(ObjectFactoryServiceLoader.java:121)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat io.cucumber.core.runtime.ObjectFactoryServiceLoader$DefaultJavaObjectFactory.cacheNewInstance(ObjectFactoryServiceLoader.java:129)\n\t... 33 more\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d85.0.4183.121)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Duygus-MacBook-Pro.local\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.121, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/c7/blcl6lt91w9...}, goog:chromeOptions: {debuggerAddress: localhost:49779}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e9fa9312c2ade38e6f145a9e49193bb4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat utilities.Driver.getDriver(Driver.java:47)\n\tat pages.DataTablePage.\u003cinit\u003e(DataTablePage.java:11)\n\tat stepdefinitions.DataTablesStepDefinition.\u003cinit\u003e(DataTablesStepDefinition.java:11)\n\t... 38 more\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the firstname \"Aa5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_firstname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user  enters the lastname \"Aa5\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_lastname(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the position \"Qa\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_position(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the office \"dla\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_office(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the extension \"1234568844\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_extension(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the startdate \"2020-11-11\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_startdate(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the salary \"1234569944\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_enters_the_salary(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the create button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.user_clicks_on_the_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "search for the first name \"Aa5\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.search_for_the_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the name fields contains first name \"Aa5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DataTablesStepDefinition.verify_the_name_fields_contains_first_name(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});