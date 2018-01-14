document.forms[0].onsubmit = function(e) {
  e.preventDefault(); // Prevent submission
  var answer = document.getElementById('answer').value;

  chrome.runtime.getBackgroundPage(function(bgWindow) {
    bgWindow.setAnswer(answer);
    window.close();     // Close dialog
  });
};
