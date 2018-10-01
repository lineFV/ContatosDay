const menuFlutuante = document.querySelector('nav');
const botaoMenu = document.querySelectorAll('.menu');

function abrirMenu() {
  if (menuFlutuante.style.display ==="flex") {
    menuFlutuante.style.display = "";
  } else {
    menu.style.display = "flex";
  }
}
botaoMenu.onclick = abrirMenu;

menu.style.display = "flex";