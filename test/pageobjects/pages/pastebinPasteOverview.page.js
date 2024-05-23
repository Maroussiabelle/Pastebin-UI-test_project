import {$, browser} from "@wdio/globals"
import PageContent from "../components/pageContent.component.js";
import Header from "../components/common/header.component.js";

export default class PastebinUserPastes {
    constructor() {
        this.header = new Header()
        this.pageContent = new PageContent()
    }

    async getPageTitle() {
        return await browser.getTitle();
    }

    getPageTitles() {
        return process.env.PAGE_TITLES.split(',');
    }

}