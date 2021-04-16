var $clickMe = document.querySelector('.click-button');
var $hoverMe = document.querySelector('.hover-button');
var $doubleClickMe = document.querySelector('.double-click-button');


$clickMe.addEventListener('click', handleClick);
$hoverMe.addEventListener('mouseover', handleMouseover);
$doubleClickMe.addEventListener('dblclick', handleDoubleClick);




function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
