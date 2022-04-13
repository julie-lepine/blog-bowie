var form = document.querySelector('form')
var pseudo = document.getElementById('name')
var password = document.getElementById('password')
var email = document.getElementById('email')
var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/
var emailConfirm = document.getElementById('email-confirm')
var nationality = document.getElementById('nationality')
var newsletter = document.getElementsByName('newsletter')
var yesNews = document.getElementsByClassName('oui')

// pseudo + 6 caractères
pseudo.addEventListener('input', () => {
    if (pseudo.value.length < 6) {
        errorID.innerText = `Le pseudo choisi est trop court, 6 caractères minimum`
    }
})

// mdp + 8 caractères
password.addEventListener('input', () => {
    if (password.value.length < 8) {
        errorPassword.innerText = `Le mot de passe est trop court, 8 caractères minimum`
    } else {
        errorPassword.innerText = ''
    }
})

// email format ok 
email.addEventListener('input', (event) => {
    if (!regexEmail.test(event.target.value)) {
        errorEmail.innerText = `Le format de l'email n'est pas bon`
    } else {
        errorEmail.innerText = ''
    }
})

// email identiques
emailConfirm.addEventListener('input', () => {
    if (email.value !== emailConfirm.value) {
        errorEmails.innerText = `Les emails ne sont pas identiques`
    } else {
        errorEmails.innerText = ''
    }
})

// input nationality après choix
nationality.addEventListener('change', (event) => {
    inputNationality.innerText = `Tu as choisi la nationalité ${event.target.value}`
})