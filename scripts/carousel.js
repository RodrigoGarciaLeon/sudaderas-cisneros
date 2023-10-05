const overlay1 = document.getElementById("overlay-1");
const overlay2 = document.getElementById("overlay-2");
const overlay3 = document.getElementById("overlay-3");
const overlay4 = document.getElementById("overlay-4");

const sudaderaBlanca = document.getElementById("sudadera-blanca");
const sudaderaAzul = document.getElementById("sudadera-azul");
const polarNegro = document.getElementById("polar-negro");
const polarVerde = document.getElementById("polar-verde");

sudaderaBlanca.addEventListener("click", sudaderaBlanca_f);
sudaderaAzul.addEventListener("click", sudaderaAzul_f);
polarNegro.addEventListener("click", polarNegro_f);
polarVerde.addEventListener("click", polarVerde_f);

overlay1.addEventListener("click", close_overlay);
overlay2.addEventListener("click", close_overlay);
overlay3.addEventListener("click", close_overlay);
overlay4.addEventListener("click", close_overlay);

function sudaderaBlanca_f() {
  overlay1.style.display = "flex";
}
function sudaderaAzul_f() {
  overlay2.style.display = "flex";
}
function polarNegro_f() {
  overlay3.style.display = "flex";
}

function polarVerde_f() {
  overlay4.style.display = "flex";
}

function close_overlay() {
  overlay1.style.display = "none";
  overlay2.style.display = "none";
  overlay3.style.display = "none";
  overlay4.style.display = "none";
}