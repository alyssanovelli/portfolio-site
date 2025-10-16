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
});