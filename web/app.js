const headerTop = document.querySelector('.header-top')
let body = document.body
let docElem = document.documentElement
let offset = 100
let scrollPos;
let docHeight;

docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4
}
window.addEventListener('scroll', function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop
    if (scrollPos > offset) {
        headerTop.classList.add('show')
    } else {
        headerTop.classList.remove('show')
    }
})