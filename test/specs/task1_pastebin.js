import PastebinHomePage from "../pageobjects/pages/pastebinHome.page.js";
import {TASK1_TEST_DATA} from "../data/testData.js";
const pastebinHomepage = new PastebinHomePage();

describe('WebDriver Task 1 suite', () => {
    it('Should open webpage and create new paste with given attributes', async () => {
        await pastebinHomepage.open();
        await pastebinHomepage.popUp.tryClose()
        await pastebinHomepage.googleAdd.tryCloseGoogleAd()
        await pastebinHomepage.header.getCreatePasteBtn().click()
        await pastebinHomepage.createPasteForm.item('pasteTextArea').setValue(TASK1_TEST_DATA.codeToPaste)
        await pastebinHomepage.createPasteForm.clickExpirationAndSelect(TASK1_TEST_DATA.pasteExpiration)
        await pastebinHomepage.createPasteForm.item('title').setValue((TASK1_TEST_DATA.pasteName))
        await pastebinHomepage.createPasteForm.item('createNewPasteBtn').click()
    })
})
