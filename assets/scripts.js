const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation(); // stop bubbling
}

divs.forEach(div =>
  div.addEventListener("click", logText, {
    capture: false,
    once: true // listens for a click once and then unbinds itself
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!");
  },
  {
    once: true
  }
);
