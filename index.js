var loader = document.getElementsByClassName('loader');
let res = [];
var xhr = new XMLHttpRequest;
xhr.open('GET', '//127.0.0.1:3000/', true);
console.log('Opening XHR...');
xhr.responseType = 'json';
xhr.timeout = 10000;
xhr.send();
console.log('Sending XHR...');
xhr.onload = () => {
    res = xhr.response;
    console.log('XHR successfully got');
    for (let i = 0; i < loader.length; i++) {
        console.log('Trying to change display of element ' + i);
        loader[i].style.display = 'none';
    }
}

let newCardsDom = document.getElementById('new-cards');
let bestCardsDom = document.getElementById('best-cards');

