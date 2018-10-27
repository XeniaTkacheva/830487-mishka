var cart = document.querySelectorAll(".cards__order");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-cart");

for (var i = 0; i < cart.length; i++){
    cart[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-cart--show");
      overlay.classList.add("modal-overlay--show");
    });
  };

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (popup.classList.contains("modal-cart--show"),
    overlay.classList.contains("modal-overlay--show")) {
    evt.preventDefault();
    popup.classList.remove("modal-cart--show");
    overlay.classList.remove("modal-overlay--show");
    }
  }
});
