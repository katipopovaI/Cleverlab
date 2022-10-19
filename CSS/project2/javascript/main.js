(function () {
  const menu = document.querySelector(".menu");
  Window.onscroll = () => {
    if (window.pageYOffset > 59) {
      menu.classList.add("menu_active");
    } else {
      menu.classList.remove("menu_active");
    }
  };
})();

//burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const menuCloseItem = document.querySelector(".menu_menu-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("menu_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("menu_active");
  });
})();
