import {$} from '@wdio/globals';

export default class PopUp {
  get popUpWindow() {
    return $('//button[@mode="secondary"]/span[text()="MORE OPTIONS"]');
  }

  get rejectAllBtn() {
    return $('//button[text()="REJECT ALL"]');
  }

  get saveAndExitBtn() {
    return $('//div[@class="qc-cmp2-buttons-desktop"]//button[@mode="primary" and text()="SAVE & EXIT"]');
  }

  async tryClose() {
    try {
      await this.popUpWindow.click();
      await this.rejectAllBtn.click();
      await this.saveAndExitBtn.click();
    } catch (ignored) {
    }
  }
}
