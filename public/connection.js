document.addEventListener('DOMContentLoaded', function() {
    const pseudoInput = document.getElementById('pseudo');
    const passwordInput = document.getElementById('password');
    const connexionButton = document.getElementById('connexionButton');
    const messageParagraphe = document.getElementById('message');

    connexionButton.addEventListener('click', function() {
        const pseudo = pseudoInput.value.trim();
        const password = passwordInput.value.trim();

        console.log("Tentative de connexion avec :", pseudo, password); // 🔍 Debug

        if (!pseudo || !password) {
            messageParagraphe.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        const storedPassword = localStorage.getItem(pseudo);
        console.log("Mot de passe stocké :", storedPassword); // 🔍 Debug

        if (storedPassword === password) {
            localStorage.setItem('pseudoConnecte', pseudo);
            messageParagraphe.textContent = "Connexion réussie !";
            console.log("Connexion réussie pour :", pseudo); // 🔍 Debug
            window.location.href = "templates/clicker.html";
        } else {
            messageParagraphe.textContent = "Pseudo ou mot de passe incorrect.";
            console.log("Erreur de connexion pour :", pseudo); // 🔍 Debug
        }
    });
});
