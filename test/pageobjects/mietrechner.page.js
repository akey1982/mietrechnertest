const Page = require("./page");

class Mietrechner extends Page {
  get inputRent() {
    return $("//input[@id='mr-mtl-miete']");
  }

  get inputInterst() {
    return $("//input[@id='mr-mietsteigerung']");
  }

  get btnCalc() {
    return $("//a[@href='#']/span[@class='spk-btn__text']");
  }

  get btnAccept() {
    return $("//*[@id='popin_tc_privacy_button']");
  }

  get table() {
    return $$("//div[@id='mr-miettabelle']/table[@class='resultTable']//td");
  }

  get eleResult() {
    return $(
      "//div[@class='calculator-body']/div[@class='resultContainer']//h2[@class='mb-40']"
    );
  }

  get errorInfo() {
    return $("//div[@id='calculator_mietrechner_root']//p[@class='error']");
  }

  /**
   *
   * @param {*} rent to set the rent
   * @param {*} interest to set the interest
   */
  async setValues(rent, interest) {
    await this.inputRent.clearValue();
    await this.inputRent.setValue(rent);
    await this.inputInterst.doubleClick();
    await browser.keys("Delete");
    await this.inputInterst.setValue(interest);
  }

  /**
   * handleCookies
   */
  async handleCookies() {
    if (await this.btnAccept.isExisting()) {
      await this.btnAccept.click();
    }
  }

  /**
   * click on calculate button
   */
  async clickTocal() {
    await this.btnCalc.click();
  }


  /**
   * 
   * @param {*} ele the element to wait for
   * @param {*} message error message is optional
   * @returns 
   */
  async waitFor(ele, message) {
    return browser.waitUntil(() => ele.isDisplayed(), {
      timeout: 20000,
      timeoutMsg:
        message || " element loaded not correctly please check selector ",
    });
  }

  /**
   * open the page
   */
  open() {
    return super.open("mietrechner.html");
  }
}

module.exports = new Mietrechner();
