import {browser} from '@wdio/globals';
import PageContent from '../components/pageContent.component.js';

export default class PastebinUserPastes {
  constructor() {
    this.pageContent = new PageContent();
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

  getPageTitles1() {
    return process.env.PAGE_TITLES1.split(',');
  }
  getPageTitles2() {
    return process.env.PAGE_TITLES2.split(',');
  }

  get pasteText() {
    return this.pageContent
        .items('pastedTextBox')
        .map(async (el) => await el.getText())
        .join('\n');
  }

  get expirationTime() {
    return this.pageContent.item('expirationTime')
        .getHTML(false);
  }

  get bashButtonText() {
    return this.pageContent.item('bashButton').getHTML(false);
  }
}
