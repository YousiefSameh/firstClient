const addButtons = document.querySelectorAll("#Add");
const forms = document.querySelectorAll("form");

const showForm = () => {
  // Loop through all forms and show them
  forms.forEach((form) => {
    form.classList.toggle("show");
  });
};

// Add event listener to each Add button
addButtons.forEach((button) => {
  button.addEventListener("click", showForm);
});