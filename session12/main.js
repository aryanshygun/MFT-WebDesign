const navPages = document.getElementById('dropbutton')
const ddown = document.getElementById('ddrop')

navPages.addEventListener('click', () => {
    if (ddown.style.visibility === 'visible') {
        ddown.style.visibility = 'hidden';
        ddown.style.opacity = '0';
    } else {
        ddown.style.visibility = 'visible';
        ddown.style.opacity = '1';
    }
})

const hero = document.getElementById('hero')
const hero1 = document.getElementById('hero1')
const hero2 = document.getElementById('hero2')
const hero3 = document.getElementById('hero3')
const hero4 = document.getElementById('hero4')


function unselectAll(){
    hero1.classList = 'ri-circle-line'
    hero2.classList = 'ri-circle-line'
    hero3.classList = 'ri-circle-line'
    hero4.classList = 'ri-circle-line'
}

function fill(x){
    x.classList = 'ri-circle-fill'
}

function activate(x){
    unselectAll()
    fill(x)
    hero.style.backgroundImage = `url('images/${x.id}.jpg')`
}

hero1.addEventListener('click', () => {
    activate(hero1)
})

hero2.addEventListener('click', () => {
    activate(hero2)
})

hero3.addEventListener('click', () => {
    activate(hero3)
})

hero4.addEventListener('click', () => {
    activate(hero4)
})

const arrowRight = document.getElementById('arrow-right')
const arrowLeft = document.getElementById('arrow-left')

