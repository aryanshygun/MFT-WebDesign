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
const navPages2 = document.getElementById('dropbutton2')
const ddown2 = document.getElementById('ddrop2')
navPages2.addEventListener('click', () => {
    if (ddown2.style.visibility === 'visible') {
        ddown2.style.visibility = 'hidden';
        ddown2.style.opacity = '0';
    } else {
        ddown2.style.visibility = 'visible';
        ddown2.style.opacity = '1';
    }
})

const hero = document.getElementById('hero')
const hero1 = document.getElementById('hero1')
const hero2 = document.getElementById('hero2')
const hero3 = document.getElementById('hero3')
const hero4 = document.getElementById('hero4')

function activate(x){
    hero1.classList = 'color ri-circle-line'
    hero2.classList = 'color ri-circle-line'
    hero3.classList = 'color ri-circle-line'
    hero4.classList = 'color ri-circle-line'
    x.classList = 'color ri-circle-fill ri-2x'
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

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const icon = card.querySelector('.color');

    card.addEventListener('mouseover', () => {
        icon.className = icon.className.replace('line', 'fill');
    });

    card.addEventListener('mouseout', () => {
        icon.className = icon.className.replace('fill', 'line');
    });
});


const holders = document.querySelectorAll('.holder');

holders.forEach(holder => {
    const paragraph = holder.querySelector('.pp');

    holder.addEventListener('mouseover', () => {
        paragraph.style.opacity = '1';
    });

    holder.addEventListener('mouseout', () => {
        paragraph.style.opacity = '0';
    });
});