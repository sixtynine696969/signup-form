const password = document.getElementById('pwd');
const passwordConfirmation = document.getElementById('pwdc');
const passwordFields = document.querySelectorAll('input[type="password"]')
const passwordSpan = document.querySelector('#pwd + span')

const form = document.querySelector('form')

form.addEventListener('submit', e => {
    if (password.value !== passwordConfirmation.value) {
        e.preventDefault();
    }
})

passwordFields.forEach(passwordFiled => {
    passwordFiled.addEventListener('input', e => {
        if (password.value !== passwordConfirmation.value) {
            passwordFields.forEach(i => i.classList.add('error'))
            passwordSpan.textContent = '* Passwords do not match';
            
        }
        else {passwordFields.forEach(i => i.classList.remove('error'))
            passwordSpan.textContent = '';
            console.log('nigger')
        }
    })
})