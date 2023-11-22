'use strict'

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (const element of navElemArr) {

    element.addEventListener("click", function() {

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

/**
 * header sticky functionality
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function() {

    window.scroll >= 20 ? header.classList.add("active") : header.classList.remove("active");
}) 