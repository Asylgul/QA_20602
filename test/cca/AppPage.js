class AppPage {
  get header() { return $('h1') }
  get totalValue() { return $('h3.total-count') }
  get defaultCounterName() { return $$('h3')[1] }
  get countersNames () { return $$('h3')}

  get deleteBtnDefaultCounter() { return $('button[id="1"]') }
  get resetBtnDefaultCounter() { return $('button[class*="reset"]') }
  get leftPlaceholder() { return $('button[name="negative"]') }
  get rightPlaceholder() { return $('button[name="positive"]') }
  get leftPlaceholders() { return $$('button[name="negative"]') }
  get rightPlaceholders() { return $$('button[name="positive"]') }

  get lF1() { return $('input[name="lower"]') }
  get lF2() { return $('input[name="upper"]') }
  get blackBtn() { return $('button[class*="btn-black"]') }
  get blackBtns() { return $$('button[class*="btn-black"]') }
  get countValue() { return $('span[class*="badge-primary"]') }
  get countValues() { return $$('span[class*="badge-primary"]') }
  get resetBtns() { return $$('button[class*="reset"]') }

  get newCounterName() { return $('input[name="name"]') }
  get newCounterValue() { return $('input[name="value"]') }
  get addNewCounterBtn() { return $('//button[text()="Add Counter"]') }
  get counterTitleLabel() { return $('//label[contains(text(),"Enter Counter Title:")]') }
  get initialCountLabel() { return $('//label[contains(text(),"Initial Count:")]') }
  get editCounterNameLabel() { return $('//label[contains(text(),"Edit")]') }
  get rightResetBtn() { return $('//button[@name="positive" and text()="X"]') }
  get leftResetBtn() { return $('//button[@name="negative" and text()="X"]') }
  get editCounterNameField() {return $('input[id="1"]') }

  get error() {return $('//div[contains(@class, "alert")]/span')}


  open() {
    browser.url('https://likejean.github.io/homework-5/');
  }

  addNewCounter(name, count) {
      this.newCounterName.setValue(name);
      this.newCounterValue.setValue(count);
      this.addNewCounterBtn.click();
  }

  counterWithIdDisplayed(id) {
    return $(`//h3[contains(text(), "${id}. ")]`).isDisplayed();
  }

  clickBlackButton(str) {
    $(`//button[text()="${str}"]`).click();
  }

  deleteCounterById(id) {
    $(`button[id="${id}"]`).click();
  }

  resetCounterById(id) {
    this.resetBtns[id - 1].click();
  }

  editCounterNameById(id, name){
    $(`input[id="${id}"]`).setValue(name);
  }

  getCounterNameById(id){
    return $$('h3').map(el => el.getText().split(' ')[1])[id]
  }

  getCounterValueByID(id) {
    return this.countValues[id - 1].getText()
  }

  numberOfCounters(){
    return $$('.container-fluid.counter-wrapper').length;
  }

  lastCounterId(){
    return $$('.container-fluid.counter-wrapper').length;
  }
}

export default new AppPage();
