import axios from "axios";

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

async function onFormSubmit(e) {
  e.preventDefault();

  const name = document.querySelector("#user-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone-number").value.trim();
  const formInputs = document.querySelectorAll(".modal-register-form-input");

  if (!name || !email || !phone) {
    formInputs.forEach((input) => {
      if (input.value === "") {
        input.classList.add("allert");
      } else if (input.value !== "") {
        input.classList.remove("allert");
      }
    });
    alert("Будь ласка, заповніть всі поля!");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Будь ласка, введіть коректний E-mail!");
    return;
  }

  const phoneRegex = /^\+?[0-9]+$/;
  if (!phoneRegex.test(phone)) {
    alert("Будь ласка, введіть коректний номер телефону!");
    return;
  }

  const formData = { name, email, phone };

  try {
    const response = await axios.post("https://example.com/register", formData);
    console.log(response.status);

    if (window.innerWidth < 768) {
      modal.classList.remove("is-visible");
    }
    registerForm.reset();
  } catch (error) {
    if (window.innerWidth < 768) {
      modal.classList.remove("is-visible");
    }

    console.error(error);
    registerForm.reset();
  }
}
