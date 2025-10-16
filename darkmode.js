const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
const form = document.querySelector("form");
const confirmation = document.getElementById("form-confirmation");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });
  if(response.ok) {
    confirmation.style.display = "block";
    form.reset();
    setTimeout(() => {
        confirmation.style.display = "none";
    }, 3000) 
  } else {
    alert("Something went wrong. Please try again later.")
  }
});