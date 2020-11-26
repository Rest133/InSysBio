"use strict"


window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".content_button");

    buttons.forEach(btn => {
        btn.addEventListener("mouseover", event => {
            const target = event.target;
            target.classList.toggle('content_button__white');
        })
        btn.addEventListener("mouseleave", event => {
            const target = event.target;
            target.classList.toggle('content_button__white');
        })
    })

    const animationBlock = document.querySelector('.content-animation-block');

    animationBlock.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('animation-title')) {
            target.nextElementSibling.classList.toggle('animation-text__hidden');
        }
    })

    const menuBurger = document.querySelector('.burger-menu');

    document.querySelector('.header-menu_burger').addEventListener(event => {
        const target = event.target;

        if (target && target.classList.contains('header-menu_burger')) {
            menuBurger.classList.toggle('hide');
        }
    })

})
