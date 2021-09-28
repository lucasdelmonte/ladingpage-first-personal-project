const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#fundamental");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:${form.get("email")}?subject=Nombre: ${form.get("nombre")} - 
    Asunto: ${form.get("asunto")}&body=${form.get("mensaje")}`
  );
  $buttonMailto.click();
  document.getElementById("form").reset();
}

// Menu desplegable
var $btnMenu = document.querySelector('img[alt="Menu"]'),
  desplegado = true;

$btnMenu.addEventListener("click", menuDesplegable);

function menuDesplegable() {
  if (desplegado) {
    $enlace = document.querySelectorAll(".enlace");

    for (var i = 0; i < $enlace.length; i++) {
      $enlace[i].classList.remove("oculto");
      $enlace[i].classList.add("mostrado");
    }
    desplegado = false;
  } else {
    for (var i = 0; i < $enlace.length; i++) {
      $enlace[i].classList.remove("mostrado");
      $enlace[i].classList.add("oculto");
    }
    desplegado = true;
  }
}
