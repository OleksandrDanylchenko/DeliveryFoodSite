document.querySelector("#cart-button").addEventListener("click", toggleModal);
document.querySelectorAll(".modal-close, .button-close").forEach((item) => {
  item.addEventListener("click", toggleModal);
});

let basketModal = document.querySelector(".modal");
function toggleModal() {
  basketModal.classList.toggle("is-open");
}

new WOW().init();