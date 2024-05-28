import PastebinHomePage from '../pageobjects/pages/pastebinHome.page.js'
import {expect} from 'chai'
import PastebinUserPastes from '../pageobjects/pages/pastebinPasteOverview.page.js'
import {TASK2_TEST_DATA} from '../data/task2_testData.js'
import {TASK1_TEST_DATA as TasK2_TEST_DATA} from '../data/task1_testData.js'

const pastebinHomepage = new PastebinHomePage()
const pastebinPasteOverviewPage = new PastebinUserPastes()


describe('WebDriver Task 2 suite', () => {
  it('Should open webpage, without login create a new paste with given attributes, verify paste', async () => {
    await pastebinHomepage.open()
    await pastebinHomepage.popUp.tryClose()
    await pastebinHomepage.header.item('createPasteButton').click()
    await pastebinHomepage.createPasteForm.item('pasteTextArea').setValue((TASK2_TEST_DATA.codeToPaste).trim())
    await pastebinHomepage.selectLanguage(TASK2_TEST_DATA.syntaxHighlighting)
    await pastebinHomepage.selectExpiration(TASK2_TEST_DATA.pasteExpiration)
    await pastebinHomepage.createPasteForm.item('title').setValue((TASK2_TEST_DATA.pasteName))
    await pastebinHomepage.createPasteForm.item('createNewPasteBtn').click()
    expect(pastebinPasteOverviewPage.getPageTitles2()).to.include(await pastebinPasteOverviewPage.getPageTitle())
    expect(await pastebinPasteOverviewPage.bashButtonText).to.equal(TASK2_TEST_DATA.bashButtonText)
    expect(await pastebinPasteOverviewPage.pasteText).to.include(TASK2_TEST_DATA.codeToPaste)
    expect((await pastebinPasteOverviewPage.expirationTime).trim())
        .to.equal(TASK2_TEST_DATA.pasteExpirationResult)
  })
})
