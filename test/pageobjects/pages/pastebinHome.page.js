import {$, browser} from '@wdio/globals'
import CreatePasteFormComponent from '../components/createPasteForm.component.js'
import Header from '../components/common/header.component.js'
import PopUp from '../components/popUp.component.js'
import GoogleAd from '../components/googleAdd.component.js'

export default class PastebinHomePage {
  async open() {
    await browser.url('https://pastebin.com/')
  }

  constructor() {
    this.createPasteForm = new CreatePasteFormComponent()
    this.header = new Header()
    this.popUp = new PopUp()
    this.googleAdd = new GoogleAd()
  }

  async clickExpirationAndSelect(expiration) {
    await this.createPasteForm.item('setExpiration').click()
    await $(`//li[text()='${expiration}']`).click()
  }

  async selectExpiration(expiration) {
    try {
      await this.clickExpirationAndSelect(expiration)
    } catch (e) {
      await this.googleAdd.tryClose()
      await this.clickExpirationAndSelect(expiration)
    }
  }

  async clickLanguageDropdownAndSelect(language) {
    await this.createPasteForm.item('syntaxHighlight').click()
    await $(`//li[text()='${language}']`).click()
  }

  async selectLanguage(language) {
    try {
      await this.clickLanguageDropdownAndSelect(language)
    } catch (e) {
      await this.googleAdd.tryClose()
      await this.clickLanguageDropdownAndSelect(language)
    }
  }
}
