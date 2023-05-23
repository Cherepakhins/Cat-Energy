const burger = () => {
  const header = document.querySelector(".header");
  const btnBurgerOpen = document.querySelector("#openBtnBurger");
  const mobileMenu = document.querySelector("#mobileMenu");

  btnBurgerOpen.addEventListener("click", () => {
    btnBurgerOpen.classList.toggle("burger-open");
    btnBurgerOpen.classList.toggle("burger-close");
    mobileMenu.classList.toggle("none");
    header.classList.toggle("fixed");
  });
};
burger();


