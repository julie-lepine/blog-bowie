// DROPDOWN MENU
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
window.onclick = function(event) {
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
const header = document.getElementById('start')
const aside = document.querySelector('aside')
const cardBod = document.getElementById('indexCard')
const cardBod2 = document.getElementById('indexCard2')
const title = document.getElementById('asideTitle')
const title2 = document.getElementById('asideTitle2')
const articles = document.querySelectorAll('section')

// DARK THEME
function changeBackground(color) {
  main.classList.add("dark")
  title.classList.add("dark2")
  title2.classList.add("dark1")
  header.classList.add("dark1")
  aside.classList.add("dark1")
  cardBod.classList.add("dark1")
  cardBod2.classList.add("dark1")
  articles.classList.add("dark1")
}

btnDark.addEventListener("click", changeBackground)

// LIGHT THEME 
function changeBackground2(color) {
  main.classList.remove("dark")
  title.classList.remove("dark2")
  title2.classList.remove("dark1")
  header.classList.remove("dark1")
  aside.classList.remove("dark1")
  cardBod.classList.remove("dark1")
  cardBod2.classList.remove("dark1")
  articles.classList.remove("dark1")
}

btnLight.addEventListener("click", changeBackground2)
