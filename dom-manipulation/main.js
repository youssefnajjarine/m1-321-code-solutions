var hotButtonClicks = 0;
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', incrementer);

function incrementer() {
  hotButtonClicks++;
  clickCount.textContent = 'Clicks: ' + hotButtonClicks;
  if (hotButtonClicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (hotButtonClicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (hotButtonClicks < 10) {
    hotButton.className = ' hot-button tepid';
  } else if (hotButtonClicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (hotButtonClicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}
