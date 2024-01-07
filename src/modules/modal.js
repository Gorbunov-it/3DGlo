const modal = () => {
  const modal = document.querySelector(".popup");
  const popupButton = document.querySelectorAll(".popup-btn");
  const popupClose = modal.querySelector(".popup-close");
  let outerWidth = window.outerWidth;

  const openModal = (speed) => {
    outerWidth = window.outerWidth;
    if (outerWidth >= 768) {
      const step = 1 / speed;
      let interval = setInterval(() => {
        modal.style.display = "block";
        if (modal.style.opacity >= 1) {
          clearInterval(interval);
          modal.style.opacity = 1;
        } else {
          modal.style.opacity = +modal.style.opacity + step;
        }
      }, speed / 1000);
    } else {
      modal.style.display = "block";
      modal.style.opacity = 1;
    }
  };

  const closeModal = (speed) => {
    outerWidth = window.outerWidth;
    if (outerWidth >= 768) {
      const step = 1 / speed;
      let interval = setInterval(() => {
        if (modal.style.opacity < 0) {
          clearInterval(interval);
          modal.style.display = "none";
          modal.style.opacity = 0;
        } else {
          modal.style.opacity = +modal.style.opacity - step;
        }
      }, speed / 1000);
    } else {
      modal.style.display = "none";
      modal.style.opacity = 0;
    }
  };

  popupButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(200);
    });
  });

  popupClose.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal(200);
  });
};

export default modal;
