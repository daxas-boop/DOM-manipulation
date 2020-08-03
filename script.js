const $container = document.querySelector('#container')
const $parrafo = document.createElement('p');
$parrafo.innerText = "Hey I'm red!";
$parrafo.style.color = 'red';
$container.appendChild($parrafo);

const $subtitle = document.createElement('h3');
$subtitle.style.color = 'blue';
$subtitle.innerText = "Hey I'm blue h3";
$container.appendChild($subtitle);

const $subContainer = document.createElement('div');
$subContainer.setAttribute('style', 'background: pink; border: 1px solid black');
const $title = document.createElement('h1');
$title.innerText = "I'm in a div";
const $parrafo2 = document.createElement('p');
$parrafo2.innerText = 'ME TOO!';
$subContainer.appendChild($title);
$subContainer.appendChild($parrafo2);
$container.appendChild($subContainer);
