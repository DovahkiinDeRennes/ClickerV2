const PSEUDO_KEY = 'nom_utilisateur';
const STORAGE_KEYS = {
    COINS: '_nombreDeCoin',
    BUFF1: '_buff1Applied',
    BUFF2: '_buff2Applied',
    BUFF3: '_buff3Applied',
    BUFF4: '_buff4Applied',
    BUFF_SECRET: '_buffSecretApplied'
};

let pseudo = localStorage.getItem(PSEUDO_KEY);

if (!pseudo) {
    window.location.href = "index.html"; // Rediriger vers la page de connexion
} else {
    console.log("Utilisateur connecté :", pseudo); // Débogage

    let resetStorage = document.getElementById('reset');
    let visible1 = document.getElementById('visible1');

    let nombreDeCoin = parseInt(localStorage.getItem(`${pseudo}${STORAGE_KEYS.COINS}`)) || 0; // Utiliser parseInt et une valeur par défaut
    let unParUn = 1;

    let buff1Applied = localStorage.getItem(`${pseudo}${STORAGE_KEYS.BUFF1}`) === 'true';
    let buff2Applied = localStorage.getItem(`${pseudo}${STORAGE_KEYS.BUFF2}`) === 'true';
    let buff3Applied = localStorage.getItem(`${pseudo}${STORAGE_KEYS.BUFF3}`) === 'true';
    let buff4Applied = localStorage.getItem(`${pseudo}${STORAGE_KEYS.BUFF4}`) === 'true';
    let buffSecretApplied = localStorage.getItem(`${pseudo}${STORAGE_KEYS.BUFF_SECRET}`) === 'true';

    console.log("Coins récupérés :", nombreDeCoin);
    console.log("Buff1 récupéré :", buff1Applied);
    console.log("Buff2 récupéré :", buff2Applied);
    console.log("Buff3 récupéré :", buff3Applied);
    console.log("Buff4 récupéré :", buff4Applied);
    console.log("BuffSecret récupéré :", buffSecretApplied);

    if (buff1Applied) {
        unParUn += 10;
        AffichageDesCoins();
    }

    if (buff2Applied) {
        AffichageDesCoins();
        let intervalId2 = setInterval(function() {
            nombreDeCoin++;
            AffichageDesCoins();
            console.log('+1');
        }, 2000);
        intervals.push(intervalId2);
    }

    if (buff3Applied) {
        unParUn += 1000;
        AffichageDesCoins();
    }

    if (buff4Applied) {
        AffichageDesCoins();
        let intervalId4 = setInterval(function() {
            let mille = 100;
            nombreDeCoin += mille;
            AffichageDesCoins();
            console.log('+100');
        }, 5000);
        intervals.push(intervalId4);
    }

    if (buffSecretApplied) {
        unParUn += 1000000000;
        AffichageDesCoins();
    }

    let intervals = [];

    resetStorage.addEventListener('click', function() {
        nombreDeCoin = 0;
        unParUn = 1;
        buff1Applied = false;
        buff2Applied = false;
        buff3Applied = false;
        buff4Applied = false;
        buffSecretApplied = false;

        localStorage.setItem(`${pseudo}${STORAGE_KEYS.COINS}`, nombreDeCoin);
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF1}`, false); // Stocker false sans guillemets
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF2}`, false);
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF3}`, false);
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF4}`, false);
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF_SECRET}`, false);

        intervals.forEach(intervalId => clearInterval(intervalId));
        intervals = [];

        AffichageDesCoins();
    });

    function AffichageDesCoins() {
        let affichageCoin = document.getElementById('affichageCoin');
        affichageCoin.textContent = 'Nombre de coins: ' + nombreDeCoin;
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.COINS}`, nombreDeCoin);
    }

    function IncrementerLeCompteur() {
        let ajoutCoin = document.getElementById('ajoutCoin');

        ajoutCoin.addEventListener("click", function() {
            nombreDeCoin += unParUn;
            AffichageDesCoins();

            if (nombreDeCoin >= 10 && !buff1Applied) {
                let buff1 = document.getElementById('buff1');
                if (buff1) {
                    buff1.addEventListener("click", Buff1, { once: true });
                }
            }
            if (nombreDeCoin >= 100 && !buff2Applied) {
                let buff2 = document.getElementById('buff2');
                if (buff2) {
                    buff2.addEventListener("click", Buff2, { once: true });
                }
            }
            if (nombreDeCoin >= 1000 && !buff3Applied) {
                let buff3 = document.getElementById('buff3');
                if (buff3) {
                    buff3.addEventListener("click", Buff3, { once: true });
                }
            }
            if (nombreDeCoin >= 10000 && !buff4Applied) {
                let buff4 = document.getElementById('buff4');
                if (buff4) {
                    buff4.addEventListener("click", Buff4, { once: true });
                }
            }

            if (nombreDeCoin >= 1 && !buffSecretApplied) {
                let buffSecret = document.getElementById('buffSecret1');
                if (buffSecret) {
                    buffSecret.addEventListener("click", SecretBuff, { once: true });
                }
            }
        });
    }

    function Buff1() {
        unParUn += 10;
        nombreDeCoin -= 10;
        AffichageDesCoins();
        buff1Applied = true;
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF1}`, true); // Stocker true sans guillemets
    }

    function Buff2() {
        nombreDeCoin -= 100;
        AffichageDesCoins();
        let intervalId = setInterval(function() {
            nombreDeCoin++;
            AffichageDesCoins();
            console.log('+1');
        }, 2000);
        intervals.push(intervalId);
        buff2Applied = true;
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF2}`, true);
    }

    function Buff3() {
        unParUn += 1000;
        nombreDeCoin -= 1000;
        AffichageDesCoins();
        buff3Applied = true;
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF3}`, true);
    }

    function Buff4() {
        nombreDeCoin -= 10000;
        AffichageDesCoins();
        let intervalId = setInterval(function() {
            let mille = 100;
            nombreDeCoin += mille;
            AffichageDesCoins();
            console.log('+100');
        }, 5000);
        intervals.push(intervalId);
        buff4Applied = true;
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF4}`, true);
    }

    function SecretBuff() {
        unParUn += 1000000000;
        nombreDeCoin -= 1;
        AffichageDesCoins();
        buffSecretApplied = true;
        localStorage.setItem(`${pseudo}${STORAGE_KEYS.BUFF_SECRET}`, true);
    }

    IncrementerLeCompteur();
    AffichageDesCoins();
}