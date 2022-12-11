import slider from "./modules/slider.js";
import table from "./modules/table.js";

window.addEventListener("DOMContentLoaded", () => {

    slider(".prodact__slider", ".prodact__slider__wrapper", ".prodact__slider__inner", ".prodact__slider__item", ".fa-chevron-left",
        ".fa-chevron-right");

    table();
});