window.setInterval(function () {
  var SC = document.querySelectorAll('.commit-ci-status .text-pending');

  if (SC.length < 2) return;

  for (var i = 0; i < SC.length - 1; i++) {
    chrome.runtime.sendMessage({ url: SC[i].href });
  }
}, 5000);
