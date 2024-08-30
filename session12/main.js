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