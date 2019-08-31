"use strict";

(function() {
  const toggleButton = document.getElementById("toggle-button");
  const mainNav = document.querySelector(".main-nav");
  const siteNavigation = document.querySelector(".site-navigation");
  const userNavigation = document.querySelector(".user-navigation");
  const overlayModal = document.querySelector(".modal-overlay");
  const catalogBlock = document.querySelector(".catalog");
  const orderButton = document.querySelector(".week-goods__button");

  if (mainNav.classList.contains("main-nav--no-js")) {
    mainNav.classList.remove("main-nav--no-js");

    if (siteNavigation && userNavigation) {
      siteNavigation.classList.add("site-navigation--closed");
      userNavigation.classList.add("user-navigation--closed");
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", function(event) {
      event.preventDefault();
      siteNavigation.classList.toggle("site-navigation--closed");
      userNavigation.classList.toggle("user-navigation--closed");
      toggleButton.classList.toggle("main-nav__toggle--off");
    });
  }

  if (overlayModal) {
    if (catalogBlock) {
      catalogBlock.addEventListener("click", openOrderForm);
    }

    if (orderButton) {
      orderButton.addEventListener("click", openOrderForm);
    }

    overlayModal.addEventListener("click", closeOrderForm);
    window.addEventListener("keydown", closeOrderForm);
  }

  function openOrderForm(event) {
    let element = event.target;

    if (
      element.classList.contains("card-product__button") ||
      element.classList.contains("week-goods__button")
    ) {
      event.preventDefault();
      overlayModal.classList.add("modal-overlay--opened");
    }
  }

  function closeOrderForm(event) {
    let element = event.target;

    if (element.classList.contains("modal-overlay") || event.keyCode === 27) {
      overlayModal.classList.remove("modal-overlay--opened");
    }
  }
})();
