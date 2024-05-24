# UI-test_project

## Wdio Task 1 description

When performing a task, you must use the capabilities of WebdriverIO, a unit test framework (Mocha) and the Page Object concept.

### Automate the following script:

1. Open https://pastebin.com/  in any browser.

2. Create 'New Paste' with the following attributes:
   * Code: "Hello from WebDriver"
   * Paste Expiration: "10 Minutes"
   * Paste Name / Title: "helloweb"

3. Save 'paste' and check the following:
   * Browser page title matches 'Paste Name / Title'
   * Expiration time is 10 minutes
   * Check that the code matches "Hello from WebDriver"

## Wdio Task 2 decription

### Automate the following script:

1. Open https://pastebin.com/ in any browser.

2. Create 'New Paste' with the following attributes:
   * Code:
     git config --global user.name  "New Sheriff in Town"
     git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
     git push origin master --force
   * Syntax Highlighting: "Bash"
   * Paste Expiration: "10 Minutes"
   * Paste Name / Title: "how to gain dominance among developers"
   
3. Save 'paste' and check the following:
   * Browser page title matches 'Paste Name / Title'
   * Syntax is suspended for bash
   * Check that the code matches the one from paragraph 2



