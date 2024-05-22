import {$} from "@wdio/globals";
import {TASK1_TEST_DATA} from "../../data/testData.js";

const selectors = {
    pasteTextArea: '.textarea.-form.js-paste-code',
    setExpiration: 'span#select2-postform-expiration-container',
    syntaxHighlight: 'span#select2-postform-format-container',
    title: 'input#postform-name',
    createNewPasteBtn: 'button[type="submit"]'
};


export default class CreatePasteFormComponent {

    get rootEl() {
        return $('.js-create-form.form-horizontal')
    }

    item(param) {
        return this.rootEl.$(selectors[param])
    }

    get googleAddWindow() {
        return $('vli.vliIgnore');
    }

    async tryCloseGoogleAd() {
        try {
            await this.googleAddWindow.click()
        } catch (ignored) {
        }
    }


    get codeText() {
        return $('pre').getText()
    }
}
