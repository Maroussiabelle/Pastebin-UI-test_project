import {$} from '@wdio/globals';

const selectors = {
  pastedTextBox: 'li.li1 div.de1',
  expirationTime: 'div.expire',
};

export default class PageContent {
  get rootEl() {
    return $('div.content');
  }

  item(param) {
    return this.rootEl.$(selectors[param]);
  }

  items(param) {
    return this.rootEl.$$(selectors[param]);
  }
}
