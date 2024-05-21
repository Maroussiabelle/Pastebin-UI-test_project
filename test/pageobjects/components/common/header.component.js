import {$} from "@wdio/globals";

export default class Header {
    getLoginBtn() {
        return $('a.btn-sign.sign-in');
    }

    getSignBtn() {
        return $('a.btn-sign.sign-up')
    }

    getCreatePasteBtn() {
        return $('a.header__btn')
    }
}