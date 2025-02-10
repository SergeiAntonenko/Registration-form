const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal-close-btn");
const openModalBtn = document.querySelector(".webinar-register-btn");
const registerForm = document.querySelector(".modal-register-form");
const formSubmitBtn = registerForm.querySelector(".modal-register-btn");

openModalBtn.addEventListener("click", onModalOpen);
closeModalBtn.addEventListener("click", onCloseModal);
registerForm.addEventListener("submit", onFormSubmit);

function onModalOpen() {
  modal.classList.toggle("is-visible");
}

function onCloseModal() {
  modal.classList.toggle("is-visible");
}

function onFormSubmit(e) {
  e.preventDefault();

  modal.classList.toggle("is-visible");

  registerForm.reset();
}
