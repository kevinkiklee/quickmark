document.forms[0].onsubmit = function(e) {
  e.preventDefault();
  var answer = document.getElementById('answer').value;

  chrome.runtime.getBackgroundPage(function(bgWindow) {
    bgWindow.setAnswer(answer);
    window.close();
  });
};
