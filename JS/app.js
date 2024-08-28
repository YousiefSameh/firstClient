const containerFields = document.querySelector(".checkin");
const form = document.querySelector("form");
const checkYes = document.querySelector("#yes");
const checkNo = document.querySelector("#no");

checkYes.addEventListener("change", function() {
  if (checkYes.checked === true) {
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "file");
    containerFields.appendChild(inputField);
  } else {
    const inputField = document.querySelector(`input[type='file']`);
    if (inputField) {
      containerFields.removeChild(inputField);
    }
  }
});

checkNo.addEventListener("change", function() {
  if (checkNo.checked === true) {
    const inputField = document.querySelector(`input[type='file']`);
    if (inputField) {
      containerFields.removeChild(inputField);
    }
  }
});