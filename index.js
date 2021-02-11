let res = [];
var xhr = new XMLHttpRequest;
xhr.open('GET', '//127.0.0.1:3000/', true);
xhr.responseType = 'json';
xhr.timeout = 10000;
xhr.send();
xhr.onload = () => {
    res = xhr.response;
}

let newCards = document.getElementById('new-cards');
let bestCards = document.getElementById('best-cards');

