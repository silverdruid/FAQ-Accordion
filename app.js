
const accordion = document.getElementsByClassName('content-container')

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        this.classList.toggle('active')
        accordion.style.display = "block"     
     })
}