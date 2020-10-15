package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class HotelRoomPage {
    public HotelRoomPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//a[@class='nav-link'])[7]")
    public WebElement loginButton;

    @FindBy(id = "UserName")
    public WebElement username;

    @FindBy (id ="Password" )
    public WebElement password;

    @FindBy(id = "btnSubmit")
    public WebElement submitButton;




}