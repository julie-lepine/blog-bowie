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

/* dark and light mode */
const btnDark = document.getElementById('lightOn')
const btnLight = document.getElementById('lightOff')
const main = document.querySelector('main')
const header = document.querySelector('header')
const aside = document.querySelector('.content')

// DARK THEME
function changeBackground(color) {
  main.classList.add("dark")
  header.classList.add("dark1")
  aside.classList.add("dark1")
}

btnDark.addEventListener("click", changeBackground)

// LIGHT THEME 
function changeBackground2(color) {
  main.classList.remove("dark")
  header.classList.remove("dark1")
  aside.classList.remove("dark1")
}

btnLight.addEventListener("click", changeBackground2)
