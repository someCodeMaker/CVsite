// menu button function
const menuButtonOpen = document.querySelector(".menu-button-open");
const menuButtonClose = document.querySelector(".modal-menu__button--close");
const modalMenu = document.querySelector(".modal-menu");
const menuLinks = document.querySelectorAll(".modal-menu__nav-list-item");

menuButtonOpen.addEventListener("click", () => {
  modalMenu.classList.remove("menu-closing");
  modalMenu.classList.add("menu-open");
});

menuButtonClose.addEventListener("click", () => {
  closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function closeMenu() {
  modalMenu.classList.remove("menu-open");
  modalMenu.classList.add("menu-closing");

  // Wait for the transition duration (700ms)
  setTimeout(() => {
    modalMenu.classList.remove("menu-closing");
  }, 500);
}
