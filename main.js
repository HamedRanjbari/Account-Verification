const $ = document;
const numberGroup = $.querySelector(".number-group");
const numbers = $.querySelectorAll(".number");

numbers[0].focus();

numbers.forEach((number, idx) => {
  number.addEventListener("keydown", (e) => {
    if (e.key <= 9 && e.key >= 0) {
      numbers[idx].value = "";
      number.style.border = "2px solid rgb(0, 231, 111)";
      setTimeout(() => {
        if (idx >= 0 && idx < 5) {
          numbers[idx + 1].focus();
        } else {
          numbers[idx].blur();
        }
      }, 50);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        if (idx > 0 && idx < 6) {
          numbers[idx - 1].focus();
        }
        number.style.border = "2px solid #960037";
      }, 50);
    }
  });
});