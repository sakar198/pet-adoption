const orderBtn = document.getElementById("orderBtn");

orderBtn.addEventListener("click", function () {
  modalWrapper.classList.remove("hidden");
  modalBox.innerHTML = successModalHTML(
    "Check you email.",
    "Your ordered placed successfully !!",
    "Continue Shopping",
    "/index.html#shop"
  );
});
