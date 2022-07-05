const Project = [{
        id: 1,
        name: 'My Book',
        about: 'HTML,CSS & JS',
        url: 'image/project1.png',
        desc: 'This Landing-page is for some information about a oranization and to narrate something a out an organization and to pass and idea of what the organization is into, for people who really need to kown what the company is all about in the first place and to have a full details about it before they proceed with the company in the way of a business relationship and so on.'
    },
    {
        id: 2,
        name: 'software',
        about: 'HTML,CSS & JS',
        url: 'www.facebook,com',
        desc: 'This Landing-page is for some information about a oranization and to narrate something a out an organization and to pass and idea of what the organization is into, for people who really need to kown what the company is all about in the first place and to have a full details about it before they proceed with the company in the way of a business relationship and so on.'
    },
    {
        id: 3,
        name: 'Landing Page',
        about: 'HTML,CSS & JS',
        url: 'www.facebook,com',
        desc: 'This Landing-page is for some information about a oranization and to narrate something a out an organization and to pass and idea of what the organization is into, for people who really need to kown what the company is all about in the first place and to have a full details about it before they proceed with the company in the way of a business relationship and so on.'
    },
    {
        id: 4,
        name: 'Landing Page',
        about: 'HTML,CSS & JS',
        url: 'www.facebook,com',
        desc: 'This Landing-page is for some information about a oranization and to narrate something a out an organization and to pass and idea of what the organization is into, for people who really need to kown what the company is all about in the first place and to have a full details about it before they proceed with the company in the way of a business relationship and so on.'
    },
    {
        id: 5,
        name: 'Landing Page',
        about: 'HTML,CSS & JS',
        url: 'www.facebook,com',
        desc: 'This Landing-page is for some information about a oranization and to narrate something a out an organization and to pass and idea of what the organization is into, for people who really need to kown what the company is all about in the first place and to have a full details about it before they proceed with the company in the way of a business relationship and so on.'
    }
]
const projectView = document.getElementById('box')
const projectBtn = document.querySelectorAll('.btn')

const getItem = Project.map((items) => {
    return `
    <div id="box" class="box">
        <h1>${items.name}</h1>
        <div class="imbx">
            <img src="${items.url}">
        </div>
        <p> ${items.desc}</p>
    </div>
    `
})


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
// Contact-Form Selector
const checkBtn = document.querySelector('.check')
const popup = document.querySelector('.popup-container')
const remove = document.querySelector('.fa-times')
    // preloading
const preload = document.querySelector('.preload')


// Project Button
projectBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const project_btn = e.currentTarget.dataset.id
        switch (project_btn) {
            case 'project1':
                projectView.innerHTML = getItem[0];
                break;
            case 'project2':
                projectView.innerHTML = getItem[1];
                break;
            case 'project3':
                projectView.innerHTML = getItem[2];
                break;
            case 'project4':
                projectView.innerHTML = getItem[3];
                break;
            case 'project5':
                projectView.innerHTML = getItem[4];
                break;
            default:
                projectView.innerHTML = getItem[5];
        }
    })
})



// Preloading
window.addEventListener('load', function() {
    preload.classList.add('load')
    doneLoading()
    projectView.innerHTML = getItem[0];
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
    }, 10000)
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

    projectView.innerHTML = getItem[0];
})

// ContactForm Popup
checkBtn.addEventListener('click', function() {
    popup.classList.add('display')
})
remove.addEventListener('click', function() {
    popup.classList.remove('display')
})