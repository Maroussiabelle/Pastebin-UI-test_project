import {browser} from "@wdio/globals";
import CreatePasteFormComponent from "../components/createPasteForm.component.js";
import Header from "../components/common/header.component.js";
import PopUp from "../components/popUp.component.js";
import GoogleAdd from "../components/googleAdd.component.js";

export default class PastebinHomePage {
    async open() {
        await browser.url('https://pastebin.com/')
    }

    constructor() {
        this.createPasteForm = new CreatePasteFormComponent()
        this.header = new Header()
        this.popUp = new PopUp()
        this.googleAdd = new GoogleAdd()
    }

    async selectExpiration (expiration) {
        try {
            await this.createPasteForm.clickExpirationAndSelect(expiration)
        } catch (e) {
            await this.googleAdd.tryCloseGoogleAd()
            await this.createPasteForm.clickExpirationAndSelect(expiration)
        }
    }

}