console.log("hello world");

const handleSubmit = (evt) => {
  evt.preventDefault();

  alert(`Your form has been successfully submitted!`);
};

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let imgDuck = document.querySelector("img");

imgDuck.addEventListener("mouseover", () => {
  alert("I see forever in your eyes!");
});
