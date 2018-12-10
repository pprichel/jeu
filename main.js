/*
let i=0;
function resultat(){
    
    if(document.formPays.pays1.value =="congo"){
        alert("vrai");
        document.getElementById("par1").innerHTML ="Bravo";
    } 
}
*/
//let i =0 ;
let nat1 =0;
let nat2 =0;
let nat3 =0;
//let nat4 =0;
let nat5 =0;
let nat6 =0;
let nat7 =0;
let nat8 =0;
let nat9 =0;
let nat10 =0;
 function myFunction1() {
    if(document.formPays.pays1.value =="congo"){
       document.getElementById("res1").style.backgroundColor="green";
       document.getElementById("res1").innerHTML="VRAI";
      nat1=10;
    }else{
        document.getElementById("res1").style.backgroundColor="red";
        document.getElementById("res1").innerHTML="FAUX";
        nat1=0;
    }
     //console.log(nat1);
    
}

function myFunction2() {
    if(document.formPays.pays2.value =="tunisie"){
        document.getElementById("res2").style.backgroundColor="green";
        document.getElementById("res2").innerHTML="VRAI";
        nat2 = 10;
    }else{
        document.getElementById("res2").style.backgroundColor="red";
        document.getElementById("res2").innerHTML="FAUX";
        nat2 = 0;
    }
    
}

function myFunction3() {
    if(document.formPays.pays3.value =="ghana"){
        document.getElementById("res3").style.backgroundColor="green";
       document.getElementById("res3").innerHTML="VRAI";
        nat3 =10;
    }else{
        document.getElementById("res3").style.backgroundColor="red";
        document.getElementById("res3").innerHTML="FAUX";
       nat3 = 0;
    }
    
}
function myFunction4() {
    if(document.formPays.pays4.value =="maroc"){
        document.getElementById("res4").style.backgroundColor="green";
       document.getElementById("res4").innerHTML="VRAI";
        nat5 =10;
    }else{
        document.getElementById("res4").style.backgroundColor="red";
        document.getElementById("res4").innerHTML="FAUX";
        nat5 =0;
    }
    
}function myFunction5() {
    if(document.formPays.pays5.value =="republique democratique du congo" || document.formPays.pays5.value =="rdc"){
        document.getElementById("res5").style.backgroundColor="green";
       document.getElementById("res5").innerHTML="VRAI";
        nat6 = 10;
    }else{
        document.getElementById("res5").style.backgroundColor="red";
        document.getElementById("res5").innerHTML="FAUX";
        nat6 = 0;
    }
    
}function myFunction6() {
    if(document.formPays.pays6.value =="cameroun"){
        document.getElementById("res6").style.backgroundColor="green";
       document.getElementById("res6").innerHTML="VRAI";
        nat7 = 10 ;
    }else{
        document.getElementById("res6").style.backgroundColor="red";
        document.getElementById("res6").innerHTML="FAUX";
        nat7 = 0
    }
    
}function myFunction7() {
    if(document.formPays.pays7.value =="algerie"){
        document.getElementById("res7").style.backgroundColor="green";
       document.getElementById("res7").innerHTML="VRAI";
        nat8 = 10;
    }else{
        document.getElementById("res7").style.backgroundColor="red";
        document.getElementById("res7").innerHTML="FAUX";
        nat8 = 0;
    }
    
}function myFunction8() {
    if(document.formPays.pays8.value =="gabon"){
        document.getElementById("res8").style.backgroundColor="green";
        document.getElementById("res8").innerHTML="VRAI";
       nat9 = 10;
    }else{
        document.getElementById("res8").style.backgroundColor="red";
        document.getElementById("res8").innerHTML="FAUX";
       nat9 = 0;
    }
    
}function myFunction9() {
    if(document.formPays.pays9.value =="afrique du sud"){
        document.getElementById("res9").style.backgroundColor="green";
        document.getElementById("res9").innerHTML="VRAI";
        nat10 = 10;
    }else{
        document.getElementById("res9").style.backgroundColor="red";
        document.getElementById("res9").innerHTML="FAUX";
       nat10 = 0;
    }
    
}
//console.log(myFunction1());

//calcul du resultat finil

function myResultat(){
    let resultat = nat1 + nat2 + nat3  + nat5 + nat6 + nat7 + nat8 + nat9 + nat10;
    document.getElementById("resultat").innerHTML=resultat;
    if(resultat == 90){
        document.getElementById("victoire").setAttribute('src','http://www.camer-sport.be/UserFile/image/afrique/Can2015Trophee300.jpg');
    }
}

//replay
function myReplay(){
    //document.getElementById("replay").window.location.reload;
   window.location.reload();    
}
