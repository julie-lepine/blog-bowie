// DROPDOWN MENU
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// transition au scroll
const ratio = 0.1

// objet qui définit l'ensemble des options de notre intersection observer
var options = {
    // élément qui servira de zone d'affichage et qui permettra de détecter si l'élément est visible ou non
    root: null,
    // marges sur les côtés de la zone d'affichage
    rootMargin: '0px',
    // à partir de quel moment le système d'intersection est détecté. 1 : entiereté de l'élément doit être visible
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
// observer l'élément avec la classe reveal
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})

/* baisser volume video dans aside */
var vid = document.getElementById("asideVideo");
vid.volume = 0.2;

/* dark and light mode */
const btnDark = document.getElementById('lightOn')
const btnLight = document.getElementById('lightOff')

const main = document.querySelector('main')
const header = document.getElementById('start')
const cardBod = document.getElementById('indexCard')
const cardBod2 = document.getElementById('indexCard2')
const title = document.getElementById('asideTitle')
const title2 = document.getElementById('asideTitle2')

// DARK THEME
function changeBackground(color) {
    main.classList.add("dark")
    header.classList.add("dark1")
    cardBod.classList.add("dark1")
    cardBod2.classList.add("dark1")
    title.classList.add("dark2")
    title2.classList.add("dark1")
}

btnDark.addEventListener("click", changeBackground)

// LIGHT THEME 
function changeBackground2(color) {
    main.classList.remove("dark")
    header.classList.remove("dark1")
    cardBod.classList.remove("dark1")
    cardBod2.classList.remove("dark1")
    title.classList.remove("dark2")
    title2.classList.remove("dark1")
}

btnLight.addEventListener("click", changeBackground2)