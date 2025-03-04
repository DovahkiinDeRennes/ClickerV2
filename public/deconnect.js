document.addEventListener('DOMContentLoaded', function() {
    const deconnexionButton = document.getElementById('deconnexionButton');

    if (deconnexionButton) {
        deconnexionButton.addEventListener('click', function() {
            const pseudo = localStorage.getItem('pseudoConnecte'); 

            if (pseudo) {
                localStorage.removeItem(pseudo);
                localStorage.removeItem('pseudoConnecte');
            }

          
            window.location.href = "../index.html";
        });
    }
});