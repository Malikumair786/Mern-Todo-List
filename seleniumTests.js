const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("chai").assert;

describe("MERN Todo List Application Tests", function () {
  this.timeout(30000); // Increase timeout for Selenium tests

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("should add a new item to the list", async function () {
    await driver.get("http://3.88.215.232"); // Update with your app URL

    // Enter data into the input field
    const inputField = await driver.findElement(By.tagName("input"));
    await inputField.sendKeys("New Test Item", Key.RETURN);

    // Wait for the new item to appear in the list
    const newItem = await driver.findElement(
      By.xpath('//p[text()="New Test Item"]')
    );
    assert.equal(await newItem.getText(), "New Test Item");
  });

  it("should delete an item from the list", async function () {
    // Assuming there is an item to delete, otherwise modify as needed
    const deleteButton = await driver.findElement(
      By.css('button[title="Delete"]')
    );
    await deleteButton.click();

    // Wait for the item to be removed from the list
    const deletedItem = await driver.findElement(
      By.xpath('//p[text()="New Test Item"]')
    );
    assert.isFalse(await deletedItem.isDisplayed());
  });

  it("should test general application functionality", async function () {
    // Implement additional test cases as needed
  });
});
