const scrollBy = () => {
  const scrollServerBlock = () => {
    const button = document.querySelector("main > a");
    const serviceBlock = document.getElementById("service-block");

    const scrollTo = (element) => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    button.addEventListener("click", (e) => {
      e.preventDefault();
      scrollTo(serviceBlock);
    });
  };

  const scrollMenuBy = () => {
    const menu = document.querySelector("menu");
    const links = menu.querySelectorAll("ul>li>a");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        let href = link.getAttribute("href").substring(1);
        const scrollTarget = document.getElementById(href);
        scrollTo(scrollTarget);
      });
    });
  };

  const scrollTo = (element) => {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const init = () => {
    scrollServerBlock();
    scrollMenuBy();
  };

  init();
};

export default scrollBy;
