const btn = document.getElementById("toggleButton");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.value === "dark") {
    btn.innerText = "Toggle Light Mode";
    h1.innerText = "Light Mode Toggle";
  } else {
    btn.innerText = "Toggle Dark Mode";
    h1.innerText = "Dark Mode Toggle";
  }
});
