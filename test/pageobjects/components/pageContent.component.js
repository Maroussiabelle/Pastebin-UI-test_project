import {$} from "@wdio/globals";

const selectors = {
    pastedTextBox: 'li[class="li1"] div[class="de1"]',
    expirationTime: 'div[class="expire"]'
};


export default class PageContent {

    get rootEl() {
        return $('div.content')
    }

    item(param) {
        return this.rootEl.$(selectors[param])
    }

}