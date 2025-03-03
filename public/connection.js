
document.addEventListener('DOMContentLoaded', function() {
    const pseudoInput = document.getElementById('pseudo');
    const passwordInput = document.getElementById('password');
    const connexionButton = document.getElementById('connexionButton');
    const messageParagraphe = document.getElementById('message');

    connexionButton.addEventListener('click', function() {
        const pseudo = pseudoInput.value;
        const password = passwordInput.value;

        if (!pseudo || !password) {
            messageParagraphe.textContent = "Veuillez remplir tous les champs.";
            return;
        }

        const storedPassword = localStorage.getItem(pseudo);

        if (storedPassword === password) {
            messageParagraphe.textContent = "Connexion réussie !";
            // Rediriger vers la page principale ou effectuer d'autres actions
            // Exemple de redirection (à adapter) :
            // window.location.href = "pagePrincipale.html";
        } else {
            messageParagraphe.textContent = "Pseudo ou mot de passe incorrect.";
        }
    });
});