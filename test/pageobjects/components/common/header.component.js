import {$} from '@wdio/globals';

const selectors = {
  loginButton: 'a.btn-sign.sign-in',
  signInButton: 'a.btn-sign.sign-up',
  createPasteButton: 'a.header__btn',
};

export default class Header {
  get rootEl() {
    return $('div.header__container');
  }


  item(param) {
    return this.rootEl.$(selectors[param]);
  }
}
