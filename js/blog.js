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

// DROPDOWN LISTE ARTICLES BLOG
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* dark and light mode */
const btnDark = document.getElementById('lightOn')
const btnLight = document.getElementById('lightOff')
const main = document.querySelector('main')
const drop2 = document.querySelector('.dropdown2')
const header = document.getElementById('start')
const chap1 = document.getElementById('chap1')
const chap2 = document.getElementById('chap2')
const chap3 = document.getElementById('chap3')
const chap4 = document.getElementById('chap4')
const chap5 = document.getElementById('chap5')

// DARK THEME
function changeBackground() {
    main.classList.add("dark")
    drop2.classList.add("dark")
    header.classList.add("dark1")
    chap1.classList.add("dark4")
    chap2.classList.add("dark4")
    chap3.classList.add("dark4")
    chap4.classList.add("dark4")
    chap5.classList.add("dark4")
}

btnDark.addEventListener("click", changeBackground)

// LIGHT THEME 
function changeBackground2() {
    main.classList.remove("dark")
    drop2.classList.remove("dark")
    header.classList.remove("dark1")
    chap1.classList.remove("dark4")
    chap2.classList.remove("dark4")
    chap3.classList.remove("dark4")
    chap4.classList.remove("dark4")
    chap5.classList.remove("dark4")
}

btnLight.addEventListener("click", changeBackground2)

if (main.style.background == "dark") {
    chap1.classList.add('chap1')
}

// transition au scroll

const ratio = 0.1

// objet qui définit l'ensemble des options de notre intersection observer
var options = {
    // élément qui servira de zone d'affichage et qui permettra de détecter si l'élément est visible ou non
    root: null,
    // marges sur les côtés de la zone d'affichage
    rootMargin : '0px',
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
document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r)
})