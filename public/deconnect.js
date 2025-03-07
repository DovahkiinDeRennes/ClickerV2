document.addEventListener('DOMContentLoaded', function() {
    const deconnexionButton = document.getElementById('deconnexionButton');

    if (deconnexionButton) {
        deconnexionButton.addEventListener('click', function() {
            // Supprimer le pseudo connecté
            localStorage.removeItem('pseudoConnecte');

            // Redirection après la déconnexion
            window.location.href = "../index.html";
        });
    }
});