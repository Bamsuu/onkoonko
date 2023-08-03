const valyks = document.getElementById('c1');
const valkaks = document.getElementById('c2');
const valkolm = document.getElementById('c3');
const valnelj = document.getElementById('c4');
const valviis = document.getElementById('c5');
const valkuus = document.getElementById('c6');
const nap = document.getElementById('nappi');
const nap2 = document.getElementById('nappi2');
let tulos = 0;
let done = false;


function hiukset1() {
  if (valyks.checked) {
  tulos = tulos - 1;
} else {
  tulos = tulos + 1;
}
return tulos;
}

function hiukset2 () {
 if (valkaks.checked) {
  tulos = tulos + 1;
 } else {
  tulos = tulos - 1;
 }

 return tulos;
}

function kulli() {
 if (valkolm.checked) {
  tulos = tulos + 1;
 } else {
  tulos = tulos - 1 
 }
return tulos;
}

function pillu() {
  if (valnelj.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
return tulos;
}

function onkomies() {
  if (valviis.checked) {
    tulos = tulos + 1;  
  } else {
    tulos = tulos - 1;
  }
  return tulos;
}

function onkonainen() {
  if (valkuus.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
   }
   return tulos;
}

var fun1 = (function () {
  return function () {
      if (tulos < 0 && !done) {
          done = true;
         // tulos = 0;
          alert("SE ON NAINEN!");
          location.reload();
          
      
      } else if(tulos === 0){
        alert("SE ON BATMAN! Valitse vielä yksi")
        location.reload();
      }
      
      else { 
        alert("SE ON MIES!");
        location.reload(); 
        //tulos = 0;
    }
  };
})();






valyks.addEventListener('click', hiukset1,);
valkaks.addEventListener('click', hiukset2);
valkolm.addEventListener('click', kulli);
valnelj.addEventListener('click', pillu);
valviis.addEventListener('click', onkomies);
valkuus.addEventListener('click', onkonainen);
nap.addEventListener('click', fun1);

