const overlay1 = document.getElementById("overlay-1");
const overlay2 = document.getElementById("overlay-2");
const overlay3 = document.getElementById("overlay-3");
const overlay4 = document.getElementById("overlay-4");
// const overlay_votaciones = document.getElementById("votaciones");
const btn_envio = document.getElementById("envio");
const modal_envio = document.getElementById("modal-envio");
const btn_cerrar_envio = document.getElementById("close-envio");

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
// overlay_votaciones.addEventListener("click", close_votaciones);
btn_envio.addEventListener("click", open_envio);
btn_cerrar_envio.addEventListener("click", close_envio);

function sudaderaBlanca_f() {
  overlay1.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function sudaderaAzul_f() {
  overlay2.style.display = "flex";
  document.body.style.overflow = "hidden";
}
function polarNegro_f() {
  overlay3.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function polarVerde_f() {
  overlay4.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function open_envio() {
  modal_envio.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function close_overlay() {
  overlay1.style.display = "none";
  overlay2.style.display = "none";
  overlay3.style.display = "none";
  overlay4.style.display = "none";
  document.body.style.overflow = "auto";
}

// function close_votaciones() {
//   overlay_votaciones.style.display = "none";
//   document.body.style.overflow = "auto";
// }

function close_envio() {
  modal_envio.style.display = "none";
  document.body.style.overflow = "auto";
}
