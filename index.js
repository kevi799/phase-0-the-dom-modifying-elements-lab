// Write your code here!
const main = document.getElementById('main');
if (main) {
  main.remove();  
}

const newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.innerHTML = 'Kevin Mulwa is the champion'
document.body.appendChild(newHeader);
