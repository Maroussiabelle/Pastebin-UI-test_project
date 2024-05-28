import PastebinHomePage from '../pageobjects/pages/pastebinHome.page.js'
import {expect} from 'chai'
import PastebinUserPastes from '../pageobjects/pages/pastebinPasteOverview.page.js'
import {TASK3_TEST_DATA} from '../data/task3_testData.js'
import LoginPage from '../pageobjects/pages/login.page.js'


const pastebinHomepage = new PastebinHomePage()
const pastebinPasteOverviewPage = new PastebinUserPastes()
const loginPage = new LoginPage()

describe('WebDriver Task 3 suite', () => {
  it('Should open webpage, log in and create a new paste with given attributes, verify paste', async () => {
    await pastebinHomepage.open()
    await pastebinHomepage.popUp.tryClose()
    await pastebinHomepage.header.item('loginButton').click()
    await loginPage.login(process.env.PASTEBIN_USERNAME, process.env.PASTEBIN_PASSWORD)
    await loginPage.header.item('createPasteButton').click()
    await pastebinHomepage.createPasteForm.item('pasteTextArea').setValue((TASK3_TEST_DATA.codeToPaste).trim())
    await pastebinHomepage.selectLanguage(TASK3_TEST_DATA.syntaxHighlighting)
    await pastebinHomepage.selectExpiration(TASK3_TEST_DATA.pasteExpiration)
    await pastebinHomepage.createPasteForm.item('title').setValue((TASK3_TEST_DATA.pasteName))
    await pastebinHomepage.createPasteForm.item('createNewPasteBtn').click()
    expect(pastebinPasteOverviewPage.getPageTitles3()).to.include(await pastebinPasteOverviewPage.getPageTitle())
    expect(await pastebinPasteOverviewPage.bashButtonText).to.equal(TASK3_TEST_DATA.languageButtonText)
    expect(await pastebinPasteOverviewPage.pasteText).to.include(TASK3_TEST_DATA.codeToPaste)
    expect((await pastebinPasteOverviewPage.expirationTime).trim())
        .to.equal(TASK3_TEST_DATA.pasteExpirationResult)
  })
})
