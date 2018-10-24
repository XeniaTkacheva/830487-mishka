var link = document.querySelector(".week-offer__order");
var popup = document.querySelector(".modal-cart");
// var close = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
    popup.classList.add("modal-cart--show");
});

// close.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-show");
// });

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-cart--show")) {
    evt.preventDefault();
    popup.classList.remove("modal-cart--show");
    }
  }
});
