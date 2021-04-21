var $openModal = document.querySelector('button.openModal');
var $blackBackground = document.querySelector('div.blackBackground');
var $openModalDiv = document.querySelector('div.openModalDiv');
var $openModalButton = document.querySelector('button.openModal');
var $noButton = document.querySelector('.survey button');

$openModal.addEventListener('click', openModal);
$noButton.addEventListener('click', handleNo);

function openModal() {
  $blackBackground.className = 'blackBackground';
  $openModalDiv.className = 'modalBlackGround';
  $openModalButton.className = 'openModal2';
}

function handleNo() {
  $blackBackground.className = 'blackBackground hidden';
  $openModalDiv.className = 'openModalDiv';
  $openModalButton.className = 'openModal';
}
