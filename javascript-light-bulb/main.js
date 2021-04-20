var button = document.querySelector('button');
var backGroundColor = document.querySelector('div.backGroundColor');



button.addEventListener('click', toggleLight);



function toggleLight() {

  if (button.className === 'darkButton') {
    backGroundColor.className = 'backGroundColor2';
    return button.className = 'lightButton';
  }
  backGroundColor.className = 'backGroundColor';
  return button.className = 'darkButton';
}
