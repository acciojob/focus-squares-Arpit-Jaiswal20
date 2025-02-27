//your JS code here. If required.

const sq1 = document.getElementById("square1");
const sq2 = document.getElementById("square2");
const sq3 = document.getElementById("square3");

function changeColors(selected, other1, other2) {
    selected.style.backgroundColor = "#E6E6FA"; // Keep selected square lavender
    other1.style.backgroundColor = "#6F4E37"; // Change other squares to coffee
    other2.style.backgroundColor = "#6F4E37";
}

sq1.addEventListener("click", () => changeColors(sq1, sq2, sq3));
sq2.addEventListener("click", () => changeColors(sq2, sq1, sq3));
sq3.addEventListener("click", () => changeColors(sq3, sq1, sq2));
