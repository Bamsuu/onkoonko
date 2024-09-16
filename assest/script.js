const val1 = document.getElementById("c1");
const val2 = document.getElementById("c2");
const val3 = document.getElementById("c3");
const val4 = document.getElementById("c4");
const val5 = document.getElementById("c5");
const val6 = document.getElementById("c6");
const val7 = document.getElementById("c7");
const val8 = document.getElementById("c8");
const val9 = document.getElementById("c9");
const val10 = document.getElementById("c10");
const val11 = document.getElementById("c11");
const val12 = document.getElementById("c12");
const nap = document.getElementById("nappi");
const nap2 = document.getElementById("nappi2");
let tulos = 0;

function hiukset1() {
  if (val1.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
  return tulos;
}

function hiukset2() {
  if (val2.checked) {
    tulos = tulos + 1;
  } else {
    tulos = tulos - 1;
  }

  return tulos;
}

function viikset() {
  if (val7.checked) {
    tulos = tulos + 3;
  } else {
    tulos = tulos - 3;
  }

  return tulos;
}

function parta() {
  if (val8.checked) {
    tulos = tulos + 3;
  } else {
    tulos = tulos - 3;
  }

  return tulos;
}

function kulli() {
  if (val3.checked) {
    tulos = tulos + 1;
  } else {
    tulos = tulos - 1;
  }
  return tulos;
}

function pillu() {
  if (val4.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
  return tulos;
}

function onkomies() {
  if (val5.checked) {
    tulos = tulos + 1;
  } else {
    tulos = tulos - 1;
  }
  return tulos;
}

function onkonainen() {
  if (val6.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
  return tulos;
}

function meikkiä() {
  if (val9.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
  return tulos;
}

function hame() {
  if (val11.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
  return tulos;
}

function tissit() {
  if (val12.checked) {
    tulos = tulos - 1;
  } else {
    tulos = tulos + 1;
  }
  return tulos;
}

function fun1() {
  if (val10.checked) {
    tulos = 0;
  }

  let resulttext = "";

  if (tulos < 0) {
    resulttext = "Vastauksesi!: SE ON NAINEN!";
  } else if (tulos === 0) {
    resulttext = "Vastauksesi!: Bait? pantava? anna mennä!";
  } else {
    resulttext = "vastauksesi!: SE ON MIES!";
  }

  document.getElementById("result").textContent = resulttext;
}

function fun2() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;

    document.getElementById("result").textContent = "";
  });

  tulos = 0;
}

val1.addEventListener("click", hiukset1);
val2.addEventListener("click", hiukset2);
val3.addEventListener("click", kulli);
val4.addEventListener("click", pillu);
val5.addEventListener("click", onkomies);
val6.addEventListener("click", onkonainen);
val7.addEventListener("click", viikset);
val8.addEventListener("click", parta);
val9.addEventListener("click", meikkiä);
val11.addEventListener("click", hame);
val12.addEventListener("click", tissit);
nap.addEventListener("click", fun1);
nap2.addEventListener("click", fun2);
