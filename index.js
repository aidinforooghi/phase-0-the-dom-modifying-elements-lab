// Write your code here!
const mainNode = document.querySelector('main#main');
if (mainNode) {
    mainNode.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Aidin is the champion';

document.body.appendChild(newHeader);