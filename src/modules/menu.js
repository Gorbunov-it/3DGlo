const menu = () => {
  const menuButtom = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeButton = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handlMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuButtom.addEventListener("click", handlMenu);

  closeButton.addEventListener("click", handlMenu);

  menuItems.forEach((items) => items.addEventListener("click", handlMenu));
};

export default menu;
