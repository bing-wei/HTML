// script.js
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

/* The above code is adding an event listener to each button. When the button is clicked, it will check
if the button is the equal sign. If it is, it will try to evaluate the expression in the display. If
it is not, it will check if the button is the clear button. If it is, it will clear the display. If
it is not, it will add the button's text content to the display. */
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "=") {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = "錯誤";
            }
        } else if (button.textContent === "C") {
            display.value = "";
        } else {
            display.value += button.textContent;
        }
    });
});
