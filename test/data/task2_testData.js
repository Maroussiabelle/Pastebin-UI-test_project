
export const TASK2_TEST_DATA = {
  codeToPaste: `git config --global user.name  "New Sheriff in Town"
git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
git push origin master --force`,
  syntaxHighlighting: 'Bash',
  pasteExpiration: '10 Minutes',
  pasteName: 'how to gain dominance among developers',
  pasteExpirationResult: '10 min',
  bashButtonText: 'Bash',
};

console.log(TASK2_TEST_DATA.codeToPaste);


