const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const sign = document.querySelector('#sign');
window.onscroll = function() {
    if(window.location.href === 'http://127.0.0.1:5500/') {
        home.classList.add('activateScrolling')
    } else if(window.location.href === 'http://127.0.0.1:5500/about.html') {
        about.classList.add('activateScrolling')
    } else if(window.location.href === 'http://127.0.0.1:5500/contact.html') {
        contact.classList.add('activateScrolling')
    } else if(window.location.href === 'http://127.0.0.1:5500/signUp.html') {
        sign.classList.add('activateScrolling')
    }
}