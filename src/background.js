chrome.commands.getAll(function (commands) {
  console.log(commands);
})

chrome.commands.onCommand.addListener(function(command) {
  console.log(command);

  if (command === 'open-bookmark-dialog') {
    chrome.tabs.create({
      url: chrome.extension.getURL('dialog/dialog.html'),
      active: false
    }, function(tab) {
      chrome.windows.create({
        tabId: tab.id,
        type: 'popup',
        focused: true
      });
    });
  }
});

function setAnswer(answer) {
  console.log(answer);
};
