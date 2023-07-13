import './less/index.less'

// Your code goes here!



//highlights borders of paragraphs upon mouseover and mouseout
const sections = document.querySelectorAll('section')
sections.forEach ( sectionn => {
    sectionn.addEventListener('mouseover', (event) => {
        sectionn.style.border = '2px solid black'
    })
    sectionn.addEventListener('mouseout', (event) => {
        sectionn.style.border = 'none'
    })
})

//welcomes upon loading of page
window.onload = () => {
    alert('welcome!')
}


//changes nav links to red upon click
const navlink = document.querySelectorAll('.nav-link')
navlink.forEach (link => {
    link.addEventListener('click', () => link.style.color = 'red')
})



//resizing pops an alert
window.addEventListener('resize', () => {
    alert('do not mess around')
})


//alerts upon copying
window.addEventListener('copy', () => {
    alert('Plagiarism is illegal!')
})


//when clicked, mirror flip the images on the page
const imagess = document.querySelectorAll('img')
imagess.forEach( image => {
    image.addEventListener('click', (event) => {
        event.target.classList.toggle('mirror')
    })
})


//double click makes paragraphs disappear
const p = document.querySelectorAll('body div p')
p.forEach( par => {
    par.addEventListener('dblclick', (event) => {
        event.target.outerHTML = ''
    })
})

//changes color of text upon keudown
window.addEventListener ( 'keydown', event => {
    if (event.key === 'r') {
        document.body.style.color = 'red'
    }
    else if (event.key === 'g') {
        document.body.style.color = 'green'
    }
})

//blurs page when scrolling
window.addEventListener('scroll' , (event) => {
    if (window.scrollY > 0 && window.scrollY < 1000) {
        document.body.classList.add('blur-body')
    }
    else {
        document.body.classList.remove('blur-body')
    }
})


