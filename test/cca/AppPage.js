class AppPage {
  get header() { return $('h1') };
  get totalValue() { return $('h3.total-count') };
  get defaultCounterName() { return $$('h3')[1] };
  get countersNames () { return $$('h3')};
  get deleteBtnDefaultCounter() { return $('button[id="1"]') };
  get resetBtnDefaultCounter() { return $('button[class*="reset"]') };
  get leftPlaceholder() { return $('button[name="negative"]') };
  get rightPlaceholder() { return $('button[name="positive"]') };
  get leftPlaceholders() { return $$('button[name="negative"]') };
  get rightPlaceholders() { return $$('button[name="positive"]') };
  get leftResetLFBtn() { return $('button[name="negative"]')};
  get rightResetLFBtn() { return $('button[name="positive"]')};
  get lF1() { return $('input[name="lower"]') };
  get lF2() { return $('input[name="upper"]') };
  get blackBtn() { return $('button[class*="btn-black"]') };
  get blackBtns() { return $$('button[class*="btn-black"]') };
  get countValue() { return $('span[class*="badge-primary"]') };
  get countValues() { return $$('span[class*="badge-primary"]') };
  get resetBtns() { return $$('button[class*="reset"]') };
  get newCounterName() { return $('input[name="name"]') };
  get newCounterValue() { return $('input[name="value"]') };
  get addNewCounterBtn() { return $('//button[text()="Add Counter"]') };
  get counterTitleLabel() { return $('//label[contains(text(),"Enter Counter Title:")]') };
  get initialCountLabel() { return $('//label[contains(text(),"Initial Count:")]') };
  get editCounterNameLabel() { return $('//label[contains(text(),"Edit")]') };
  get editCounterNameField() {return $('input[id="1"]') };
  get error() {return $('//div[contains(@class, "alert")]/span')};

  open() {
    browser.url('https://likejean.github.io/homework-5/');
  };

  addNewCounter(name, count) {
      this.newCounterName.setValue(name);
      this.newCounterValue.setValue(count);
      this.addNewCounterBtn.click();
  };

  counterWithIdDisplayed(i) {
    $(`//h3[text()="${i}. "]`).isDisplayed();
  };

  clickBlackButton(str) {
    $(`//button[text()="${str}"]`).click();
  };

  async deleteCounterById(id) {
    await (await $(`button[id="${id}"]`)).click();
  };

  async resetCounterById(id) {
    const button = await $$('button[class*="reset"]');
    await button[id - 1].click();
  };

  async getCounterNameById(id){
    const countersNames = await this.countersNames;
    return await countersNames[id].getText();
  };

  async getCounterValueByID(id){
    const countValues = await this.countValues;
    const countValue = countValues[id - 1];
    return countValue.getText();
  };

  editCounterNameById(id, name){
    $(`input[id=${id}]`).setValue(name);
  };
}

export default new AppPage();
