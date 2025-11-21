// Récupération du nombre de clics
let local_click = parseInt(localStorage.getItem('click')) || 0;

let bar = document.getElementById('bar');
const click = document.getElementById('get_click');

const niveaux = [100, 1000, 10000, 100000, 1000000];

function getAdvantageLevel1() {
    return parseInt(localStorage.getItem("levelAdvantage1")) || 0;
}

function getAdvantageLevel2() {
    return parseInt(localStorage.getItem("levelAdvantage2")) || 0;
}

function getAdvantageLevel3() {
    return parseInt(localStorage.getItem("levelAdvantage3")) || 0;
}

function getAdvantageLevel4() {
    return parseInt(localStorage.getItem("levelAdvantage4")) || 0;
}

function Incrementer_click() {
    let baseClick = 1;
    let bonus = 0;

    const ad1 = getAdvantageLevel1();
    const ad2 = getAdvantageLevel2();

    if (ad1 >= 1 && ad1 <= 8) {
        bonus += 0.5 * ad1;
    }

    for (let lvl = 1; lvl <= ad2; lvl++) {
        if (lvl === 1) bonus += 1;
        if (lvl === 2) bonus += 1;
        if (lvl === 3) bonus += 1;
        if (lvl === 4) bonus += 1.25;
        if (lvl === 5) bonus += 1.25;
        if (lvl === 6) bonus += 1.5;
        if (lvl === 7) bonus += 2;
        if (lvl === 8) bonus += 2;
    }

    let totalClick = baseClick + bonus;

    localStorage.setItem('ClickPerClick', totalClick);

    local_click += totalClick;
    localStorage.setItem('click', local_click);

    Progress_bar(local_click);
    advantage1();
    advantage2();
    advantage3();
    advantage4();
}




// ===============================
//        PROGRESS BAR
// ===============================

function Progress_bar(progression) {
    let minPalier = 0;
    let maxPalier = niveaux[0];

    for (let i = 0; i < niveaux.length; i++) {

        if (progression < niveaux[i]) {
            maxPalier = niveaux[i];
            minPalier = i === 0 ? 0 : niveaux[i - 1];
            break;
        }


        if (progression >= niveaux[0]) {
            localStorage.setItem('level1', "1");
        }

        if (progression >= niveaux[1]) {
            localStorage.setItem('level2', "1");
            
        }


        if (i === niveaux.length - 1 && progression >= niveaux[i]) {
            local_click = 0;
            progression = 0;
            localStorage.setItem('click', 0);
            minPalier = 0;
            maxPalier = niveaux[0];
        }
    }

    showLevel();
    let percentage = ((progression - minPalier) / (maxPalier - minPalier)) * 100;
    bar.style.width = percentage + "%";
}


// ===============================
//         LEVEL 1 : BONUS
// ===============================

const level1 = document.getElementById('level1');
const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');
const level4 = document.getElementById('level4');

function advantage1() {
    const getLevel1 = localStorage.getItem('level1');
    level1.style.visibility = getLevel1 ? "visible" : "hidden";
}
function advantage2() {
    const getLevel2 = localStorage.getItem('level2');
    level2.style.visibility = getLevel2 ? "visible" : "hidden";
}
function advantage3() {
    const getLevel3 = localStorage.getItem('level3');
    level3.style.visibility = getLevel3 ? "visible" : "hidden";
}
function advantage4() {
    const getLevel4 = localStorage.getItem('level4');
    level4.style.visibility = getLevel4 ? "visible" : "hidden";
}
// ===============================
//      ACHAT AMÉLIORATION
// ===============================
function levelAdvantage1() {
    let level1 = getAdvantageLevel1();

    const prices = [100, 100, 100, 100, 100, 100, 100, 100]; // prix niveau 1 et niveau 2


    if (level1 < prices.length && local_click >= prices[level1]) {
        local_click -= prices[level1];
        level1++;
        localStorage.setItem('levelAdvantage1', level1);
        localStorage.setItem('click', local_click);
        affigageLevel1();
    }
}

function levelAdvantage2() {
    let level2 = getAdvantageLevel2();
    const prices = [1000, 1200, 1400, 2600, 3700, 4800, 5000, 6000]
    if (level2 < prices.length && local_click >= prices[level2]) {
        local_click -= prices[level2];
        level2++;
        localStorage.setItem('levelAdvantage2', level2);
        localStorage.setItem('click', local_click);
        affigageLevel2();
    }
}

function levelAdvantage3() {

}

function levelAdvantage4() {

}

function affigageLevel1(){
    const aff_level1 = getAdvantageLevel1();
    const text_level1 = document.getElementById('text-level1');
    text_level1.textContent =  aff_level1 + ' / 8'
}
function affigageLevel2(){
    const aff_level2 = getAdvantageLevel2();
    const text_level2 = document.getElementById('text-level2');
    text_level2.textContent =  aff_level2 + ' / 8'
}
function showLevel() {
    const whoLevel = document.getElementById('whoLevel');

    for (let i = 4; i >= 1; i--) {
        const level = localStorage.getItem(`level${i}`);
        if (level !== null) {
            whoLevel.textContent = `LEVEL ${i}`;
            return; 
        }
    }
}
level1.addEventListener("click", levelAdvantage1);
level2.addEventListener("click", levelAdvantage2);
level3.addEventListener("click", levelAdvantage3);
level4.addEventListener("click", levelAdvantage4);
click.addEventListener("click", Incrementer_click);

// Mise à jour initiale
Progress_bar(local_click);
advantage1();
advantage2();
advantage3();
advantage4();
affigageLevel1();
affigageLevel2();
showLevel()