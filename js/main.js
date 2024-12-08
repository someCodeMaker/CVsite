// modal menu variables
const menuButtonOpen = document.querySelector(".menu-button-open");
const menuButtonClose = document.querySelector(".modal-menu__button");
const modalMenu = document.querySelector(".modal-menu");
const menuLinks = document.querySelectorAll(".modal-menu__nav-list-item");
const body = document.querySelector("body");

// modal form variables
const modalForm = document.querySelector(".modal-form");
const formButtonOpen = document.querySelectorAll(".form-open-button");
const formButtonClose = document.querySelector(".modal-form__button--close");
const thanksButtonClose = document.querySelector(".modal-form-thanks__button");
const formSubmitButton = document.querySelector(".modal-form__submit-button");
const formThankYou = document.querySelector(".modal-form-thanks");

// menu open/close button event
buttonEvent(modalMenu, "open", "close", menuButtonOpen, menuButtonClose, menuLinks);

// modal form button close
buttonEvent(modalForm, "open", "close", undefined, formButtonClose, undefined, formButtonOpen);
//modal form submit button
formSubmitButton.addEventListener("click", () => {
  formThankYou.classList.add("form-open-thanks");
  //modal form thanks button close
  thanksButtonClose.addEventListener("click", () => {
    modalForm.classList.remove("open");
    formThankYou.classList.remove("form-open-thanks");
    body.style.overflow = "visible";
  });
});

// add event to multiply elements
function eventOpenArrElements(elements, modalWindow, openClass, closingClass) {
  elements.forEach((elem) => {
    elem.addEventListener("click", () => {
      body.style.overflow = "hidden";
      modalWindow.classList.remove(closingClass);
      modalWindow.classList.add(openClass);
    });
  });
}

function eventCloseArrElements(elem, modalWindow, openClass, closingClass) {
  elem.forEach((link) => {
    link.addEventListener("click", () => {
      body.style.overflow = "visible";
      closeModal(modalWindow, openClass, closingClass);
    });
  });
}

// closing button function
function closeModal(modalWindow, openClass, closingClass) {
  modalWindow.classList.remove(openClass);
  modalWindow.classList.add(closingClass);

  // Wait for the transition duration (700ms)
  setTimeout(() => {
    modalWindow.classList.remove(closingClass);
  }, 500);
}
function openModal(modalWindow, openClass, closingClass) {
  modalWindow.classList.remove(closingClass);
  modalWindow.classList.add(openClass);
}

function buttonEvent(
  modalWindow,
  openClass,
  closingClass,
  openBtn,
  closeBtn,
  arrElemClose,
  arrElemOpen
) {
  //open button
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      openModal(modalWindow, openClass, closingClass);
      body.style.overflow = "hidden";
    });
  }
  //closing button
  closeBtn.addEventListener("click", () => {
    body.style.overflow = "visible";
    closeModal(modalWindow, openClass, closingClass);
  });

  if (arrElemClose) eventCloseArrElements(arrElemClose, modalWindow, openClass, closingClass);
  if (arrElemOpen) eventOpenArrElements(arrElemOpen, modalWindow, openClass, closingClass);
}
