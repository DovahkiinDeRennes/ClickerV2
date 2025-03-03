document.addEventListener('DOMContentLoaded', function(){

const pseudo = document.getElementById('pseudo');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const confirmButton= document.getElementById('confirmButton')
const response = document.getElementById('response')



confirmButton.addEventListener('click', function() {
    const pseudoValue = pseudo.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if (!pseudoValue || !passwordValue || !confirmPasswordValue) {
        response.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
        response.textContent = "Les mots de passe ne correspondent pas.";
        return;
    }

    if (localStorage.getItem(pseudoValue)) {
        response.textContent = "Ce pseudo est déjà utilisé.";
        return;
    }

    localStorage.setItem(pseudoValue, passwordValue);
    response.textContent = "Inscription réussie !";
    window.location.href = "../../../index.html";
    pseudo.value = '';
    password.value = '';
    confirmPassword.value = '';
});


});