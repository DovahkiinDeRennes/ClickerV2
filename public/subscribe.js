document.addEventListener('DOMContentLoaded', function() {
    const pseudo = document.getElementById('pseudo');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmButton = document.getElementById('confirmButton');
    const response = document.getElementById('response');

    const USERS_KEY = 'utilisateurs_inscrits';
    const PSEUDO_KEY = 'nom_utilisateur';

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

        let registeredUsers = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
        if (registeredUsers.includes(pseudoValue)) {
            response.textContent = "Ce pseudo est déjà utilisé.";
            return;
        }

        // Ajouter le pseudo à la liste des utilisateurs inscrits
        registeredUsers.push(pseudoValue);
        localStorage.setItem(USERS_KEY, JSON.stringify(registeredUsers));

        // Stocker le mot de passe (pour la connexion)
        localStorage.setItem(pseudoValue, passwordValue);

        // Stocker le pseudo pour la connexion
        localStorage.setItem(PSEUDO_KEY, pseudoValue);

   

        response.textContent = "Inscription réussie !";
        window.location.href = "../../../index.html";
        pseudo.value = '';
        password.value = '';
        confirmPassword.value = '';
    });
});