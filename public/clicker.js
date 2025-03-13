
let intervalMaison = null;

let intervalBatiment = null;

let plusUn = 100;



let box_branche_two = document.getElementById("box-branche-two")


let local_armature = localStorage.getItem('armature') ? parseInt(localStorage.getItem('armature')) : 0;
let local_gravier = localStorage.getItem('gravier') ? parseInt(localStorage.getItem('gravier')) : 0;
let local_eau = localStorage.getItem('eau') ? parseInt(localStorage.getItem('eau')) : 0;
let local_sable = localStorage.getItem('sable') ? parseInt(localStorage.getItem('sable')) : 0;
let local_ciment = localStorage.getItem('ciment') ? parseInt(localStorage.getItem('ciment')) : 0;
let local_batiment = localStorage.getItem('batiment') ? parseInt(localStorage.getItem('batiment')) : 0;



let armature = document.getElementById('get_Armature');
let gravier = document.getElementById('get_Gravier');
let eau = document.getElementById('get_Eau');
let sable = document.getElementById('get_Sable');
let ciment = document.getElementById('get_Ciment');
let batiment = document.getElementById('get_Batiment');


let aff_armature = document.getElementById('affichage_Armature');
let aff_gravier = document.getElementById('affichage_Gravier');
let aff_eau = document.getElementById('affichage_Eau');
let aff_sable = document.getElementById('affichage_Sable');
let aff_ciment = document.getElementById('affichage_Ciment');
let aff_batiment = document.getElementById('affichage_Batiment');


function Achat_Armature() {
    if (local_argent >= 20) {
        local_argent -= 20;
        local_armature += 5;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('armature', local_armature);
        Affichage_Argent();
        Affichage_Armature();
    } else {
        alert("Pas assez d'argent pour acheter !");
    }
}


function Achat_Gravier() {
    if (local_argent >= 20) {
        local_argent -= 20;
        local_gravier += 5;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('gravier', local_gravier);
        Affichage_Argent();
        Affichage_Gravier();
    } else {
        alert("Pas assez d'argent pour acheter !");
    }
}


function Achat_Eau() {
    if (local_argent >= 20) {
        local_argent -= 20;
        local_eau += 5;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('eau', local_eau);
        Affichage_Argent();
        Affichage_Eau();
    } else {
        alert("Pas assez d'argent pour acheter !");
    }
}



function Achat_Sable() {
    if (local_argent >= 20) {
        local_argent -= 20;
        local_sable += 5;
        localStorage.setItem('argent', local_argent);
        localStorage.setItem('sable', local_sable);
        Affichage_Argent();
        Affichage_Sable();
    } else {
        alert("Pas assez d'argent pour acheter !");
    }
}




function Fabriquer_Ciment() {
    if (local_gravier >= 20) {
        if (local_eau >= 20) {
            if (local_sable >= 20) {


                local_gravier -= 20;
                local_eau -= 20;
                local_sable -= 20;
                local_ciment += 20;

                localStorage.setItem('argent', local_gravier);
                localStorage.setItem('armature', local_eau);
                localStorage.setItem('sable', local_sable);
                localStorage.setItem('ciment', local_ciment);
                localStorage.setItem('argent', local_argent);
                

                Affichage_Gravier();
                Affichage_Eau();
                Affichage_Sable();
                Affichage_Ciment();

            }else{
                alert("Pas assez de sable !");
                return;
            }
        }else{
            alert("Pas assez d'eau !");
            return;
        }
    
        
       
    } else {
        alert("Pas assez de gravier !");
        return
    }
}
function Batiment_Business() {
    if (local_batiment < 1) {
        console.log('Pas de maison');
        return;
    }

    if (!intervalBatiment) {
        intervalBatiment = setInterval(() => {
            let gain = 5000 * local_batiment;
            local_argent += gain;
            localStorage.setItem('argent', local_argent);
            Affichage_Argent();
            console.log(`+${gain} (Batiment : Total: ${local_argent})`);
        }, 5000);
    }
}


function Stop_Batiment_Business() {
    if (intervalBatiment) {
        clearInterval(intervalBatiment);
        intervalBatiment = null;
        console.log('Génération d\'argent arrêtée');
    }
}

function Achat_Batiment() {
    if (local_armature >= 20) {
      if (local_eau >= 20) {
        if (local_sable >= 20) {
          if (local_ciment >= 20) {
            if (local_gravier >= 20) {
              if (local_buche >= 20) {
                if (local_laine >= 20) {
                  if (local_pierre >= 20) {
                    if (local_argent >= 100) {
                
                      local_armature -= 20;
                      local_eau -= 20;
                      local_sable -= 20;
                      local_ciment -= 20;
                      local_gravier -= 20;
                      local_buche -= 20;
                      local_laine -= 20;
                      local_pierre -= 20;
                      local_argent -= 100;

                      local_batiment += 1;


                      localStorage.setItem('gravier', local_gravier);
                      localStorage.setItem('eau', local_eau);
                      localStorage.setItem('sable', local_sable);
                      localStorage.setItem('ciment', local_ciment);
                      localStorage.setItem('armature', local_armature);
                      localStorage.setItem('argent', local_argent);
                      localStorage.setItem('buche', local_buche);
                      localStorage.setItem('laine', local_laine);
                      localStorage.setItem('pierre', local_pierre);

                      localStorage.setItem('batiment', local_batiment);

                      Affichage_Gravier();
                      Affichage_Eau();
                      Affichage_Sable();
                      Affichage_Ciment();
                      Affichage_Armature();
                      Affichage_Argent();
                      Affichage_Laine();
                      Affichage_Pierre();
                      Affichage_Buche();

                      Affichage_Batiment();

                     

                    } else {
                      alert("Pas assez d'argent !"); 
                      return;
                    }
                  } else {
                    alert("Pas assez de pierre !");
                    return;
                  }
                } else {
                  alert("Pas assez de laine !");
                  return;
                }
              } else {
                alert("Pas assez de bois !");
                return;
              }
            } else {
              alert("Pas assez de gravier !");
              return;
            }
          } else {
            alert("Pas assez de ciment !");
            return;
          }
        } else {
          alert("Pas assez de sable !");
          return;
        }
      } else {
        alert("Pas assez d'eau !");
        return;
      }
    } else {
      alert("Pas assez d'armature !");
      return;
    }
  }


  function Affichage_Batiment() {
    aff_batiment.textContent = 'quantités de batiment : ' + local_batiment;
}

function Affichage_Armature() {
    aff_armature.textContent = 'quantités d\'armature : ' + local_armature;
}


function Affichage_Gravier() {
    aff_gravier.textContent = 'quantités de gravier : ' + local_gravier;
}


function Affichage_Eau() {
    aff_eau.textContent = 'quantités d\'eau : ' + local_eau;
}



function Affichage_Sable() {
    aff_sable.textContent = 'quantités de sable : ' + local_sable;
}

function Affichage_Ciment() {
    aff_ciment.textContent = 'quantités de ciment : ' + local_ciment;
}



armature.addEventListener("click", Achat_Armature);

gravier.addEventListener("click", Achat_Gravier);

eau.addEventListener("click", Achat_Eau);

sable.addEventListener("click", Achat_Sable);

ciment.addEventListener("click", Fabriquer_Ciment);

batiment.addEventListener("click", Achat_Batiment);




function Box_branche_two(){
   
    if (local_maison >= 3){
        box_branche_two.style.visibility = 'visible';
    }else{
        box_branche_two.style.visibility = 'hidden';
        console.log("Pas assez pour débloquer la suite")
    }


}


/*---------------------------Branche_One-------------------------*/
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

    local_armature = 0;
    local_eau = 0;
    local_sable = 0;
    local_ciment = 0;
    local_gravier = 0;
    local_buche = 0;
    local_laine = 0;
    local_pierre = 0;
    local_argent = 0;

    local_batiment = 0;
    local_maison = 0;

    
    localStorage.setItem('argent', local_argent);
    localStorage.setItem('buche', local_buche);
    localStorage.setItem('laine', local_laine);
    localStorage.setItem('pierre', local_pierre);
    localStorage.setItem('maison', local_maison);
    localStorage.setItem('gravier', local_gravier);
    localStorage.setItem('eau', local_eau);
    localStorage.setItem('sable', local_sable);
    localStorage.setItem('ciment', local_ciment);
    localStorage.setItem('armature', local_armature);
    localStorage.setItem('batiment', local_batiment);

    Affichage_Argent();
    Affichage_Buche();
    Affichage_Pierre();
    Affichage_Laine();
    Affichage_Maison();

    Affichage_Gravier();
    Affichage_Eau();
    Affichage_Sable();
    Affichage_Ciment();
    Affichage_Armature();
    
    Affichage_Batiment();

    Stop_Maison_Business();
    Stop_Batiment_Business()
    
    Box_branche_two()
}

function Ventes_Buches() {
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
            console.log(`+${gain} (Maison : Total: ${local_argent})`);
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
                    Box_branche_two()

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
    aff_buche.textContent = 'quantités de bûches : ' + local_buche;
}


function Affichage_Pierre() {
    aff_pierre.textContent = 'quantités de pierre : ' + local_pierre;
}


function Affichage_Laine() {
    aff_laine.textContent = 'quantités de laine : ' + local_laine;
}


function Affichage_Maison() {
    aff_maison.textContent = 'quantités de maison : ' + local_maison;
}


function Incrementer_Buche() {
    local_buche += plusUn;
    localStorage.setItem('buche', local_buche);
    Affichage_Buche();
}

reset.addEventListener("click", Reset);

buche.addEventListener("click", Incrementer_Buche);
sold_buche.addEventListener("click", Ventes_Buches);
laine.addEventListener("click", Achat_Laine);
pierre.addEventListener("click", Achat_Pierre);
maison.addEventListener("click", Achat_Maison);

Box_branche_two()

Affichage_Argent();
Affichage_Buche();
Affichage_Pierre();
Affichage_Laine();
Affichage_Maison();

Affichage_Gravier();
Affichage_Eau();
Affichage_Sable();
Affichage_Ciment();
Affichage_Armature();

Affichage_Batiment();

Maison_Business();

Batiment_Business();
//----------------------------------------------------------------------------------
