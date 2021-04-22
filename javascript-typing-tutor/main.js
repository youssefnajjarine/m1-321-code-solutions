window.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {

  var currentCharacter = document.querySelector('.current');

  var expectedCharacter = currentCharacter.textContent;

  var next = currentCharacter.nextElementSibling;

  var keyPressed = e.key;

  if (keyPressed === 'Shift') return;

  if (keyPressed === expectedCharacter) {
    currentCharacter.classList = 'good';
    next.classList = 'current';
  } else {
    currentCharacter.classList.add('bad');
  }
}
