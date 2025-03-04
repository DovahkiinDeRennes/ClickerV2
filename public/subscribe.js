document.addEventListener('DOMContentLoaded', function() {
    const pseudo = document.getElementById('pseudo');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const confirmButton = document.getElementById('confirmButton');
    const response = document.getElementById('response');

    const USERS_KEY = 'utilisateurs_inscrits';
    const PSEUDO_KEY = 'nom_utilisateur';
    const STORAGE_KEYS = {
        COINS: '_nombreDeCoin',
        BUFF1: '_buff1Applied',
        BUFF2: '_buff2Applied',
        BUFF3: '_buff3Applied',
        BUFF4: '_buff4Applied',
        BUFF_SECRET: '_buffSecretApplied'
    };

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

        // Initialiser les données utilisateur (coins, buffs)
        localStorage.setItem(`${pseudoValue}${STORAGE_KEYS.COINS}`, 0);
        localStorage.setItem(`${pseudoValue}${STORAGE_KEYS.BUFF1}`, false);
        localStorage.setItem(`${pseudoValue}${STORAGE_KEYS.BUFF2}`, false);
        localStorage.setItem(`${pseudoValue}${STORAGE_KEYS.BUFF3}`, false);
        localStorage.setItem(`${pseudoValue}${STORAGE_KEYS.BUFF4}`, false);
        localStorage.setItem(`${pseudoValue}${STORAGE_KEYS.BUFF_SECRET}`, false);

        response.textContent = "Inscription réussie !";
        window.location.href = "../../../index.html";
        pseudo.value = '';
        password.value = '';
        confirmPassword.value = '';
    });
});