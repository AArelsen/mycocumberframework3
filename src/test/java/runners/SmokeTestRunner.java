package runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
                "html:target/default-cucumber-reports3",
                "json:target/json-reports/cucumber3.json",
                "junit:target/xml-report/cucumber3.xml"
        },
        //plugin = "html:target\\default-cucumber-reports",
        features ="src/test/resources/features",
        glue = "stepdefinitions",
        tags = "@smoke",
        dryRun = false
)
public class SmokeTestRunner {
}
