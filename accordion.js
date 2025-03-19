let accordion = document.querySelectorAll(".accordion-container");

accordion.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
