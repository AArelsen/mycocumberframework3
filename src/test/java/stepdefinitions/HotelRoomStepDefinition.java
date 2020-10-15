package stepdefinitions;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pages.HotelRoomPage;
import utilities.ConfigReader;
import utilities.Driver;

import javax.security.auth.login.Configuration;

public class HotelRoomStepDefinition {
    HotelRoomPage hotelRoomPage=new HotelRoomPage();
    @Given("user is on the webpage")
    public void userIsOnTheWebpage() {
        Driver.getDriver().get(ConfigReader.getProperty("kaola_url"));
    }

    @And("user clicks on the new login button")
    public void userClicksOnTheNewLoginButton() {
      hotelRoomPage.loginButton.click();
    }

    @When("user enters the username")
    public void userEntersTheUsername() {
        hotelRoomPage.username.sendKeys("username");
    }

    @When("user enters the password")
    public void userEntersThePassword() {
        hotelRoomPage.password.sendKeys(ConfigReader.getProperty("password"));
    }

    @And("user click on the log button")
    public void userClickOnTheLogButton() {
    }

    @And("user clicks on the hotel management button")
    public void userClicksOnTheHotelManagementButton() {
    }

    @And("user clicks on the hotel room button")
    public void userClicksOnTheHotelRoomButton() {
    }

    @And("user clicks on the add hotel room button")
    public void userClicksOnTheAddHotelRoomButton() {
    }

    @When("user enters the hotel id")
    public void userEntersTheHotelId() {
    }

    @When("user enters the code")
    public void userEntersTheCode() {
    }

    @When("user enters the name")
    public void userEntersTheName() {
    }

    @When("user enters the location")
    public void userEntersTheLocation() {
    }

    @When("user types the description")
    public void userTypesTheDescription() {
    }

    @When("user drags the price")
    public void userDragsThePrice() {
    }

    @When("user drop the price")
    public void userDropThePrice() {
    }

    @When("user enters the max adult count")
    public void userEntersTheMaxAdultCount() {
    }

    @When("user enters the max children count")
    public void userEntersTheMaxChildrenCount() {
    }

    @And("user select the proved")
    public void userSelectTheProved() {
    }

    @Then("user clicks on the save button")
    public void userClicksOnTheSaveButton() {
    }
}
