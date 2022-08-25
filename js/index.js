var img = document.querySelector(".js-img");
var imgElamenti = document.querySelector(".js-image");
var bodyElementi = document.querySelector("body");
var firsname = prompt("Ismingizni kiriting");
var surname = prompt("Familangizni kiriting");
var age = prompt("Yoshingizni kiriting");

alert(`Malumotlar tastiqlandi. Saytimizga hush kelibsiz.`)

img.addEventListener("click", function() {
    bodyElementi.classList.add("active")
});

imgElamenti.addEventListener("click", function() {
    bodyElementi.classList.remove("active")
})