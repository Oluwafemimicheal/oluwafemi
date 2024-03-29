// Menubar Selector
const btn = document.querySelector('.bar')
const menu = document.querySelector('.menubar-sm')
    // Back to top Selector
const backToTop = document.querySelector('.back-to-top')
let body = document.body
let docElem = document.documentElement
let offset = 100
let scrollPos;
let docHeight;

// preloading
const preload = document.querySelector('.preload'),
    activePage = document.querySelectorAll('.menubar ul li')


window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('window-scroll', window.scrollY > 500)
})

activePage.forEach((nav) => {
    nav.addEventListener('click', (e) => {
        activePage.forEach((item) => {
            if (item !== nav) {
                item.classList.remove('border')
            }
        })
        let display = e.currentTarget
        if (nav === display) {
            nav.classList.add('border')
        }
    })
})

// Preloading
window.addEventListener('load', function() {
    preload.classList.add('load')
    doneLoading()
});

function doneLoading() {
    setTimeout(() => {
        preload.classList.remove('load')
    }, 1000)
}


// Menubar
function timeout() {
    setTimeout(() => {
        menu.classList.remove('show')
    }, 15000)
};
btn.addEventListener('click', function() {
    menu.classList.toggle('show');
    menu.addEventListener('click', function() {
        menu.classList.remove('show')
    })
    timeout()

})

// Back-To-Top
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4
}
window.addEventListener('scroll', function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop
    if (scrollPos > offset) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
})