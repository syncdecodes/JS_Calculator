console.log("Calculator")


// Empty string where user input will be stored
let input = "";


// Accessing/Targeting all the required HTML elements 
const operators = document.querySelectorAll(".operator");
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".tab");
const items = document.querySelectorAll(".item")
let into = document.getElementsByClassName("into")[0]


// => Button click logic
Array.from(buttons).forEach((key) => {
    key.addEventListener("click", () => {
        const value = key.textContent
        if (value === "AC") {
            input = "";
            display.innerHTML = 0
            // Array.from(buttons) => buttons are now Array
        }

        else if (value === "C") {
            input = input.slice(0, -1)
            display.innerHTML = input || 0
            // something || fallback - Agar something falsy hai (jaise: "", null, undefined, 0, etc.), to fallback use hota hai.
        }
        else if (value === "Enter") {
            try {
                input = String(eval(input))
                display.innerHTML = input;
            } catch {
                display.innerHTML = "Error"
                input = 0;
            }

        }




        else if (value === ".") {
            const parts = input.split(/[\+\-\*\/]/);
            const lastNumber = parts[parts.length - 1];
            if (!lastNumber.includes(".")) {
                input += value;
                display.innerHTML = input;
            }
        } // understand this part - pending.....




        else {
            input += value;
            display.innerHTML = input;
        }

    })
})


