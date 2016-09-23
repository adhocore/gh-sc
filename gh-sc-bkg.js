var xhr = new XMLHttpRequest;

chrome.runtime.onMessage.addListener(function(request) {
  xhr.open('GET', request.url + '/cancel');
  xhr.send();
});
