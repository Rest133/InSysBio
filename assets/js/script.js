"use strict"

window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".content_button");
    buttons.forEach(btn => {
        console.log(btn);
    })

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
})
