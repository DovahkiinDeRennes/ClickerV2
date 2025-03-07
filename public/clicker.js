
    // reset.addEventListener('click', function(){
     
    //         nombreDeCoin = 0;
    //         unParUn = 1;
    //         buff1Applied = false;
    //         buff2Applied = false;
    //         buff3Applied = false;
    //         buff4Applied = false;
    //         buffSecretApplied = false;
    
    //         // Réinitialiser les buffs dans le localStorage
    //         localStorage.removeItem('nombreDeCoin');
    //         localStorage.removeItem('buff1Applied');
    //         localStorage.removeItem('buff2Applied');
    //         localStorage.removeItem('buff3Applied');
    //         localStorage.removeItem('buff4Applied');
    //         localStorage.removeItem('buffSecretApplied');
    
    //         let interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    //         for (let i = 1; i < interval_id; i++) {
    //             window.clearInterval(i);
    //         };
    //         AffichageDesCoins();
    // })


let intervalMaison = null;
let plusUn = 100;

let local_argent = localStorage.getItem('argent') ? parseInt(localStorage.getItem('argent')) : 0;
let local_buche = localStorage.getItem('buche') ? parseInt(localStorage.getItem('buche')) : 0;
let local_pierre = localStorage.getItem('pierre') ? parseInt(localStorage.getItem('pierre')) : 0;
let local_laine = localStorage.getItem('laine') ? parseInt(localStorage.getItem('laine')) : 0;
let local_maison = localStorage.getItem('maison') ? parseInt(localStorage.getItem('maison')) : 0;



let sold_buche = document.getElementById('sold_Buche');

let buche = document.getElementById('get_Buche');
let pierre = document.getElementById('get_Pierre');
let laine = document.getElementById('get_Laine');
let maison = document.getElementById('get_Maison');

let aff_argent = document.getElementById('affichage_Argent');
let aff_buche = document.getElementById('affichage_Buche');
let aff_pierre = document.getElementById('affichage_Pierre');
let aff_laine = document.getElementById('affichage_Laine');
let aff_maison = document.getElementById('affichage_Maison');

let reset = document.getElementById('reset')







function Reset(){

    local_argent = 0;
    local_buche = 0;
    local_laine = 0;
    local_pierre = 0;
    local_maison = 0;

    localStorage.setItem('argent', local_argent);
    localStorage.setItem('buche', local_buche);
    localStorage.setItem('laine', local_laine);
    localStorage.setItem('pierre', local_pierre);
    localStorage.setItem('maison', local_maison);

    Affichage_Argent();
    Affichage_Buche();
    Affichage_Pierre();
    Affichage_Laine();
    Affichage_Maison();

    Stop_Maison_Business();
    
   
}

function Ventes_Bûches() {
    if (local_buche >= 10) {
        local_buche -= 10;
        local_argent += 1000;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('buche', local_buche);
        Affichage_Argent();
        Affichage_Buche();
    } else {
        alert("Pas assez de bûches pour vendre !");
    }
}




function Achat_Pierre() {
    if (local_argent >= 20) {
        local_argent -= 20;
        local_pierre += 5;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('laine', local_pierre);
        Affichage_Argent();
        Affichage_Pierre();
    } else {
        alert("Pas assez d'argent pour acheter !");
    }
}



function Achat_Laine() {
    if (local_argent >= 20) {
        local_argent -= 20;
        local_laine += 5;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('laine', local_laine);
        Affichage_Argent();
        Affichage_Laine();
    } else {
        alert("Pas assez d'argent pour acheter !");
    }
}






function Maison_Business() {
    if (local_maison < 1) {
        console.log('Pas de maison');
        return;
    }

    if (!intervalMaison) {
        intervalMaison = setInterval(() => {
            let gain = 1000 * local_maison;
            local_argent += gain;
            localStorage.setItem('argent', local_argent);
            Affichage_Argent();
            console.log(`+${gain} (Total: ${local_argent})`);
        }, 5000);
    }
}


function Stop_Maison_Business() {
    if (intervalMaison) {
        clearInterval(intervalMaison);
        intervalMaison = null;
        console.log('Génération d\'argent arrêtée');
    }
}

function Achat_Maison() {
    if (local_argent >= 20) {
        if (local_buche >= 20){
            if (local_laine >= 20){
                if (local_pierre >= 20){

                    local_maison += 1
                    local_argent -= 20;
                    local_buche -= 20;
                    local_laine -= 20;
                    local_pierre -= 20;
                    localStorage.setItem('argent', local_argent);
                    localStorage.setItem('buche', local_buche);
                    localStorage.setItem('laine', local_laine);
                    localStorage.setItem('pierre', local_pierre);
                    localStorage.setItem('maison', local_maison);
                    Affichage_Argent();
                    Affichage_Laine();
                    Affichage_Buche();
                    Affichage_Pierre();
                    Affichage_Maison();

                }else{
                    alert("Pas assez de pierre!");
                    return;
                }
            }else{
                alert("Pas assez de laine!");
                return;
            }
        }else{
            alert("Pas assez de bûche!");
            return;
        }
      
    } else {
        alert("Pas assez d'argent pour acheter !");
        return;
    }
}



function Affichage_Argent() {
    aff_argent.textContent = 'Argent : ' + local_argent +" €";
    Maison_Business();
}


function Affichage_Buche() {
    aff_buche.textContent = 'Nombre de bûches : ' + local_buche;
}


function Affichage_Pierre() {
    aff_pierre.textContent = 'Nombre de pierre : ' + local_pierre;
}


function Affichage_Laine() {
    aff_laine.textContent = 'Nombre de laine : ' + local_laine;
}


function Affichage_Maison() {
    aff_maison.textContent = 'Nombre de maison : ' + local_maison;
}


function Incrementer_Buche() {
    local_buche += plusUn;
    localStorage.setItem('buche', local_buche);
    Affichage_Buche();
}

reset.addEventListener("click", Reset);

buche.addEventListener("click", Incrementer_Buche);
sold_buche.addEventListener("click", Ventes_Bûches);
laine.addEventListener("click", Achat_Laine);
pierre.addEventListener("click", Achat_Pierre);
maison.addEventListener("click", Achat_Maison);


Affichage_Argent();
Affichage_Buche();
Affichage_Pierre();
Affichage_Laine();
Affichage_Maison();

Maison_Business();

//----------------------------------------------------------------------------------
