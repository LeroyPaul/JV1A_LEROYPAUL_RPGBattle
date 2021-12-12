var pvbernard = document.getElementById("pvbernardlhermite");
var pvrobot = document.getElementById("pvrobotvert");
var pvballon = document.getElementById("pvballonjoyeux");
var pvboulebleue = document.getElementById("pvboulebleue");

var manabernard = document.getElementById("manabernardlhermite");
var manarobot = document.getElementById("manarobot");
var manaballon = document.getElementById("manaballon");
var manaboule = document.getElementById("manaboule");

var attaquebernard = document.getElementById("attaquebernard");
var attaquerobot = document.getElementById("attaquerobot")
var attaqueballon = document.getElementById("attaqueballon");
var attaqueboule = document.getElementById("attaqueboule");

var defensebernard = document.getElementById("defensebernard");
var defenserobot = document.getElementById("defenserobot");
var defenseballon = document.getElementById("defenseballon")
var defenseboule = document.getElementById("defenseboule")

var specialbernard = document.getElementById("specialbernard");
var specialrobot = document.getElementById("specialrobot");
var specialballon = document.getElementById("specialballon");
var specialboule = document.getElementById("specialboule");

var pvhiboux = document.getElementById("pvhibouxrose");
var pvfantome = document.getElementById("pvfantome");
var pvcoccinelle = document.getElementById("pvcoccinelle");

var dialogueexplicatif = document.getElementById("dialogueexplicatif");

var boutondemarrer = document.getElementById("bouton");

var imagebernard = document.getElementById("bernard");
var imagerobot = document.getElementById("robot vert");
var imageballon = document.getElementById("ballon");
var imageboulebleue = document.getElementById("boule bleue");
var imagehiboux = document.getElementById("monstre1");
var imagefantome = document.getElementById("monstre2");
var imagecoccinelle = document.getElementById("monstre3");


pvhiboux.innerHTML = 100;
pvfantome.innerHTML = 100;
pvcoccinelle.innerHTML = 100;
pvbernard.innerHTML = 50;
pvrobot.innerHTML = 50;
pvballon.innerHTML = 50;
pvboulebleue.innerHTML = 50;

defbernard=false;
defrobotvert=false;
defballon=false;
defboulebleue=false;

bernardvivant = true;
robotvivant = true;
ballonvivant = true;
boulebleuevivant = true;
hibouxvivant = true;
fantomevivant = true;
coccinellevivant = true;

manabernard.innerHTML=100;
manarobot.innerHTML=100;
manaballon.innerHTML=100;
manaboule.innerHTML=100;


// partie principale du code

boutondemarrer.onclick= function() {                            // pour démarrer le programme
    document.getElementById('bouton').style.display='none';
    actionbernard();
}

// Actions des héros
function actionbernard(){

    if (bernardvivant == true) {
        dialogueexplicatif.innerHTML = "C'est au tour de Bernard l'hermite de jouer. Choisis une action.";
       
        attaquebernard.onclick= function (){bernardattaque()};
        defensebernard.onclick= function (){bernarddefense()};
        specialbernard.onclick= function (){bernardspecial()};

        function bernarddefense(){
            if (bernardvivant == true) {
            defbernard=true;
            imagebernard.animate([
                // keyframes
                { transform: 'translateX(-50px)' }
              ], {
                // timing options
                duration: 600,
              });
            dialogueexplicatif.innerHTML = "Bernard l'hermite se défend.";
            setTimeout(actionrobot,1000);
        }}

        function bernardspecial(){
            if (bernardvivant == true) {
            if (manabernard.innerHTML >= 50){
                imagebernard.animate([
                    // keyframes
                    { transform: 'translateX(100px)' }
                  ], {
                    // timing options
                    duration: 300,
                    iterations: 3,
                  });
                dialogueexplicatif.innerHTML = "Bernard fait une tornade de sable !";
                pvhiboux.innerHTML -= 20;
                pvfantome.innerHTML -= 20;
                pvcoccinelle.innerHTML -= 20;
                manabernard.innerHTML -= 50;
                setTimeout(actionrobot,1000);
            }
        }}

        function bernardattaque(){
            if (bernardvivant == true) {
            imagebernard.animate([
                // keyframes
                { transform: 'translateX(100px)' }
              ], {
                // timing options
                duration: 1000,
                endDelay: 10000,
              });
            
                var attaquerandom = Math.floor(Math.random() * 3);    
                    if (attaquerandom == 0){
                        if (hibouxvivant == true){
                            pvhiboux.innerHTML -= 10;
                            dialogueexplicatif.innerHTML = "Bernard l'hermite attaque Hiboux Rose avec pince de crabe.";}}           
                    if (attaquerandom == 1){
                        if (fantomevivant == true){
                            pvfantome.innerHTML -= 10;
                            dialogueexplicatif.innerHTML = "Bernard l'hermite attaque Fantôme avec pince de crabe.";}}
                    if (attaquerandom == 2){
                        if (coccinellevivant == true){
                            pvcoccinelle.innerHTML -= 10;
                            dialogueexplicatif.innerHTML = "Bernard l'hermite attaque Coccinelle avec pince de crabe.";}}
            
            setTimeout(actionrobot,1000);
                    }}
    }
    if (bernardvivant == false){
        actionrobot()
    }
}
function actionrobot(){
    if (robotvivant == true) {
        dialogueexplicatif.innerHTML = "C'est au tour de Robot vert de jouer. Choisis une action.";
        attaquerobot.onclick= function (){robotattaque()};
        defenserobot.onclick= function (){robotdefense()};
        specialrobot.onclick= function (){robotspecial()};

        function robotattaque(){
            if (robotvivant == true) {
            imagerobot.animate([
                // keyframes
                { transform: 'translateX(100px)' }
              ], {
                // timing options
                duration: 1000,
                endDelay: 10000,
              });
                    
            var attaquerandom = Math.floor(Math.random() * 3);    
                if (attaquerandom == 0){
                    if (hibouxvivant == true){
                        pvhiboux.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Robot vert attaque Hiboux Rose avec bras mécanique.";}}        
                if (attaquerandom == 1){
                    if (fantomevivant == true){
                        pvfantome.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Robot vert attaque Fantôme avec bras mécanique.";}}
                if (attaquerandom == 2){
                    if (coccinellevivant == true){
                        pvcoccinelle.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Robot vert attaque Coccinelle avec bras mécaniquee.";}}
        
        setTimeout(actionballon,1000);
                }}

        function robotdefense(){
            if (robotvivant == true) {
            defrobotvert=true;
            imagerobot.animate([
                // keyframes
                { transform: 'translateX(-50px)' }
              ], {
                // timing options
                duration: 600,
              });
            dialogueexplicatif.innerHTML = "Robot vert se défend.";
            setTimeout(actionballon,1000);
        }}

        function robotspecial(){
            if (robotvivant == true) {
            imagerobot.animate([
                // keyframes
                { transform: 'translateX(100px)' }
              ], {
                // timing options
                duration: 300,
                iterations: 3,
              });
            
            if (manarobot.innerHTML >= 50){
                dialogueexplicatif.innerHTML = "Robot vert lance son disque dur !";
                pvhiboux.innerHTML -= 20;
                pvfantome.innerHTML -= 20;
                pvcoccinelle.innerHTML -= 20;
                manarobot.innerHTML -= 50;
                setTimeout(actionballon,1000);
            }
        }}
    }
    if (robotvivant == false){
        actionballon()
    }
}
function actionballon(){
    if (ballonvivant == true) {
        dialogueexplicatif.innerHTML = "C'est au tour de Ballon joyeux de jouer. Choisis une action.";
        attaqueballon.onclick= function (){ballonattaque()};
        defenseballon.onclick= function (){ballondefense()};
        specialballon.onclick= function (){ballonspecial()};

        function ballonattaque(){
            if (ballonvivant == true) {
            imageballon.animate([
                // keyframes
                { transform: 'translateX(100px)' }
              ], {
                // timing options
                duration: 1000,
                endDelay: 10000,
              });
            var attaquerandom = Math.floor(Math.random() * 3);    
                if (attaquerandom == 0){
                    if (hibouxvivant == true){
                        pvhiboux.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Ballon joyeux attaque Hiboux Rose avec compliments.";}}        
                if (attaquerandom == 1){
                    if (fantomevivant == true){
                        pvfantome.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Ballon joyeux attaque Fantôme avec compliments.";}}
                if (attaquerandom == 2){
                    if (coccinellevivant == true){
                        pvcoccinelle.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Ballon joyeux attaque Coccinelle avec compliments.";}}
        
        setTimeout(actionboule,1000);
                }}

        function ballondefense(){
            if (ballonvivant == true) {
            defballon=true;
            imageballon.animate([
                // keyframes
                { transform: 'translateX(-50px)' }
              ], {
                // timing options
                duration: 600,
              });
            dialogueexplicatif.innerHTML = "Ballon joyeux se défend.";
            setTimeout(actionboule,1000);
            
        }}

        function ballonspecial(){
            if (ballonvivant == true) {
            imageballon.animate([
                // keyframes
                { transform: 'translateX(100px)' }
              ], {
                // timing options
                duration: 300,
                iterations: 3,
              });
            
            if (manaballon.innerHTML >= 50){
                dialogueexplicatif.innerHTML = "Ballon joyeux fait des bisous magiques eux ennemis !";
                pvfantome.innerHTML -= 20;
                pvcoccinelle.innerHTML -= 20;
                manaballon.innerHTML -= 50;
                setTimeout(actionboule,1000);
                /* je comprend pas pourquoi ça ne marche pas 
                pvbernard.innerHTML += 20;
                */
            }
        }}
    }
    if (ballonvivant == false){
        actionboule()
    }

}
function actionboule(){
    if (boulebleuevivant == true) {
        dialogueexplicatif.innerHTML = "C'est au tour de Boule bleue de jouer. Choisis une action.";
        attaqueboule.onclick= function (){bouleattaque()};
        defenseboule.onclick= function (){bouledefense()};
        specialboule.onclick= function (){boulespecial()};

        function bouleattaque(){
            if (boulebleuevivant == true) {
            imageboulebleue.animate([
                // keyframes
                { transform: 'translateX(100px)' }
              ], {
                // timing options
                duration: 1000,
                endDelay: 10000,
              });
            var attaquerandom = Math.floor(Math.random() * 3);    
                if (attaquerandom == 0){
                    if (hibouxvivant == true){
                        pvhiboux.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Boule bleue attaque Hiboux Rose avec rebondir.";}}           
                if (attaquerandom == 1){
                    if (fantomevivant == true){
                        pvfantome.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Boule bleue attaque Fantôme avec rebondir.";}}
                if (attaquerandom == 2){
                    if (coccinellevivant == true){
                        pvcoccinelle.innerHTML -= 10;
                        dialogueexplicatif.innerHTML = "Boule bleue attaque Coccinelle avec rebondir.";}}
        
        setTimeout(verification1,1000);
                }}

        function bouledefense(){
            if (boulebleuevivant == true) {
            defboulebleue=true;
            imageboulebleue.animate([
                // keyframes
                { transform: 'translateX(-50px)' }
              ], {
                // timing options
                duration: 600,
              });
            dialogueexplicatif.innerHTML = "Ballon joyeux se défend.";
            setTimeout(verification1,1000);
        }}

        function boulespecial(){
            if (boulebleuevivant == true) {
            imageboulebleue.animate([
                // keyframes
                { transform: 'translateX(200px)' }
              ], {
                // timing options
                duration: 300,

              });
            var attaquerandom = Math.floor(Math.random() * 3);    
            if (manaboule.innerHTML >= 50){
                if (attaquerandom == 0){
                    if (hibouxvivant == true){
                    dialogueexplicatif.innerHTML = "Boule bleue brise la nuque de Hiboux rose!";
                    pvhiboux.innerHTML -= 50;}}
                if (attaquerandom == 1){
                    if (fantomevivant == true){
                    dialogueexplicatif.innerHTML = "Boule bleue brise la nuque de Fantôme!";
                    pvfantome.innerHTML -= 50;}}
                if (attaquerandom == 2){
                    if (coccinellevivant == true){
                pvcoccinelle.innerHTML -= 20;
                dialogueexplicatif.innerHTML = "Boule bleue brise la nuque de Coccinelle!";
                manaboule.innerHTML -= 50;}}
            setTimeout(verification1,1000);
                }
            }
        }
    if (boulebleuevivant == false){
        verification1()
    }
}}

// Je vérifie si certains ennemis sont mort & si la partie n'a pas été gagné

function verification1(){
    if (pvhiboux.innerHTML <= 0){
        pvhiboux.innerHTML=0
        hibouxvivant = false;
        imagehiboux.style.visibility = "hidden";
    }
    if (pvfantome.innerHTML <= 0){
        pvfantome.innerHTML=0
        fantomevivant = false;
        imagefantome.style.visibility = "hidden";
    }
    if (pvcoccinelle.innerHTML <= 0){
        pvcoccinelle.innerHTML=0
        coccinellevivant = false;
        imagecoccinelle.style.visibility = "hidden";
    }
    if (pvhiboux.innerHTML == 0 & pvfantome.innerHTML == 0 & pvcoccinelle.innerHTML == 0){
        dialogueexplicatif.innerHTML = "BRAVO ! Vous avez vaincu les monstres !";
    }
    else{
        setTimeout( actionhibouxrose,1000)}
}

// Actions des monstres

    
function actionhibouxrose(){
    if (hibouxvivant == true){
        imagehiboux.animate([
            // keyframes
            { transform: 'translateX(-100px)' }
          ], {
            // timing options
            duration: 500,
            
          });
        var attaquerandom = Math.floor(Math.random() * 4); 
        console.log(attaquerandom);
            if (attaquerandom == 0){
                if (bernardvivant==true){
                    if (defbernard==false){
                        pvbernard.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Hiboux Rose attaque Bernard l'Hermite.";}
                    setTimeout(actionfantome,1500);}
            if (attaquerandom == 1){
                if (robotvivant==true){
                    if (defrobotvert==false){
                        pvrobot.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Hiboux Rose attaque Robot vert.";}
                    setTimeout(actionfantome,1500);}     
            if (attaquerandom == 2){
                if (ballonvivant==true){
                    if (defballon==false){
                        pvballon.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Hiboux Rose attaque Ballon Joyeux.";}
                    setTimeout(actionfantome,1500); }     
            if (attaquerandom == 3){
                if (boulebleuevivant==true){
                    if (defboulebleue==false){
                        pvboulebleue.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Hiboux Rose attaque Boule bleue.";}
                    setTimeout(actionfantome,1500); }
            }
    if (hibouxvivant == false){
        actionfantome();
    }
}

function actionfantome(){
    if (fantomevivant == true){
        imagefantome.animate([
            // keyframes
            { transform: 'translateX(-100px)' }
          ], {
            // timing options
            duration: 500,
          });
        var attaquerandom = Math.floor(Math.random() * 4); 
        console.log(attaquerandom);
            if (attaquerandom == 0){
                if (bernardvivant==true){
                    if (defbernard==false){
                        pvbernard.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Fantôme attaque Bernard l'Hermite.";}
                    setTimeout(actioncoccinelle,1500);}               
            if (attaquerandom == 1){
                if (robotvivant==true){
                    if (defrobotvert==false){
                        pvrobot.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Fantôme attaque Robot vert.";}
                    setTimeout(actioncoccinelle,1500); }     
            if (attaquerandom == 2){
                if (ballonvivant==true){
                    if (defballon==false){
                        pvballon.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Fantôme attaque Ballon Joyeux.";}
                    setTimeout(actioncoccinelle,1500); }     
            if (attaquerandom == 3){
                if (boulebleuevivant==true){
                    if (defboulebleue==false){
                        pvboulebleue.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Fantôme attaque Boule bleue.";}
                    setTimeout(actioncoccinelle,1500); }
        }
        if (fantomevivant == false){
            actioncoccinelle();}
    }

function actioncoccinelle(){
    if (coccinellevivant == true){
        imagecoccinelle.animate([
            // keyframes
            { transform: 'translateX(-100px)' }
          ], {
            // timing options
            duration: 500,
            endDelay: 10000,
          });
        var attaquerandom = Math.floor(Math.random() * 4); 
        console.log(attaquerandom);
            if (attaquerandom == 0){
                if (bernardvivant==true){
                    if (defbernard==false){
                        pvbernard.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Coccinelle attaque Bernard l'Hermite.";}
                    setTimeout(verification2,1500); } 
            if (attaquerandom == 1){
                if (robotvivant==true){
                    if (defrobotvert==false){
                        pvrobot.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Coccinelle attaque Robot vert.";}
                    setTimeout(verification2,1500); }     
            if (attaquerandom == 2){
                if (ballonvivant==true){
                    if (defballon==false){
                        pvballon.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Coccinelle attaque Ballon Joyeux.";}
                    setTimeout(verification2,1500); }     
            if (attaquerandom == 3){
                if (boulebleuevivant==true){
                    if (defboulebleue==false){
                        pvboulebleue.innerHTML -= 10;}
                        dialogueexplicatif.innerHTML = "Coccinelle attaque Boule bleue.";}
                    setTimeout(verification2,1500); }
            
        }
    if (coccinellevivant == false){
        verification2();}
}

// Je vérifie si les héros ne sont pas morts et si la partie n'a pas été perdue

function verification2(){
    defbernard=false;
    defrobotvert=false;
    defballon=false;
    defboulebleue=false;
    
    if (pvbernard.innerHTML <= 0){
        pvbernard.innerHTML=0
        bernardvivant = false;
        imagebernard.style.visibility = "hidden";
    }
    if (pvrobot.innerHTML <= 0){
        pvrobot.innerHTML=0
        robotvivant = false;
        imagerobot.style.visibility = "hidden";
    }
    if (pvballon.innerHTML <= 0){
        pvballon.innerHTML=0
        ballonvivant = false;
        imageballon.style.visibility = "hidden";
    }
    if (pvboulebleue.innerHTML <= 0){
        pvboulebleue.innerHTML=0
        boulebleuevivant = false;
        imageboulebleue.style.visibility = "hidden";
    }

    if (bernardvivant == false & robotvivant == false & ballonvivant == false & boulebleuevivant == false){
        dialogueexplicatif.innerHTML = "Vous avez perdu. Tous vos héros sont morts."
    }
    else{
        setTimeout(actionbernard,1000);}

}

// Là le programme repart pour une boucle