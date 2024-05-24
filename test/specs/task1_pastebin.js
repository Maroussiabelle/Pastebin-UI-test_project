import PastebinHomePage from '../pageobjects/pages/pastebinHome.page.js';
import {TASK1_TEST_DATA} from '../data/task1_testData.js';
import {expect} from 'chai';
import PastebinUserPastes from '../pageobjects/pages/pastebinPasteOverview.page.js';
const pastebinHomepage = new PastebinHomePage();
const pastebinPasteOverviewPage = new PastebinUserPastes();


describe('WebDriver Task 1 suite', () => {
  it('Should open webpage, without login create a new paste with given attributes, verify paste', async () => {
    await pastebinHomepage.open();
    await pastebinHomepage.popUp.tryClose();
    await pastebinHomepage.header.item('createPasteButton').click();
    await pastebinHomepage.createPasteForm.item('pasteTextArea').setValue(TASK1_TEST_DATA.codeToPaste);
    await pastebinHomepage.selectExpiration(TASK1_TEST_DATA.pasteExpiration);
    await pastebinHomepage.createPasteForm.item('title').setValue((TASK1_TEST_DATA.pasteName));
    await pastebinHomepage.createPasteForm.item('createNewPasteBtn').click();
    expect(pastebinPasteOverviewPage.getPageTitles1()).to.include(await pastebinPasteOverviewPage.getPageTitle());
    expect(await pastebinPasteOverviewPage.pageContent.item('pastedTextBox').getText()).to.include(TASK1_TEST_DATA.codeToPaste);
    expect((await pastebinPasteOverviewPage.pageContent.item('expirationTime').getHTML(false)).trim()).to.equal(TASK1_TEST_DATA.pasteExpirationResult);
  });
});
