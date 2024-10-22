# UI-test_project for Pastebin website

This project was developed as part of a Test Automation Bootcamp organized by [EPAM](https://www.epam.com/) in 2024. 
It demonstrates the implementation of a Test Automation Framework (TAF) and Page Object Model (POM) for the [Pastebin website](https://pastebin.com/) 

## Technologies Used

- **WebdriverIO**: Automation framework for writing reliable UI tests.
- **Mocha**: JavaScript testing framework for asynchronous testing.

## Project Structure

- `/test/data`: test data.
- `/test/pageObjects`: Page Object Model (pages and components).
- `/test/specs`: test scripts for UI testing.

## The project contains solutions of 3 practical tasks (see description of tasks below)

## How to Run

### Prerequisites

1. **Node.js** (v14 or later) - Make sure it's installed.

### Install Dependencies

```bash
npm install
```
### to run task 1 script:
```bash
npm run task1
```
### to run task 2 script:
```bash
npm run task2
```
### to run task 3 script:
```bash
npm run task3
```

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
   * Expiration time is 10 minutes

## Wdio Task 3 decription

### Automate the following script:

1. Open https://pastebin.com/ in any browser.
2. Log in

3. Create 'New Paste' with the following attributes:
   * Code:  
    "This is a first paste of a registered user"
   * Syntax Highlighting: "CSS"
   * Paste Expiration: "1 week"
   * Paste Name / Title: "First paste"

4.Save 'paste' and check the following:
   * Browser page title matches 'Paste Name / Title'
   * Syntax is suspended for CSS
   * Check that the code matches the one from paragraph 3
   * Expiration time is 1 week

## Author
This project was developed by Marija Voroncova as an individual project during the EPAM Test Automation Bootcamp in 2024.

