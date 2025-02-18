import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // Get the elements
  const firstPage = document.querySelector("main#questionnaire");
  const secondPage = document.querySelector("main#result");
  const compareButton = document.querySelector("button#compare-button");

  // Add click event listener to the compare button
  compareButton.addEventListener("click", () => {
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
  });
});
