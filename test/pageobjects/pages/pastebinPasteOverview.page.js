import {browser} from "@wdio/globals";
import Header from "../components/common/header.component.js";
import dotenv from "dotenv";

export default class PastebinUserPastes {

    async getPageTitle(){
        return await browser.getTitle();
    }

    getPageTitles() {
        return process.env.PAGE_TITLES.split(',');
    }


}