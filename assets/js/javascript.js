let loader = document.getElementById("loader");

window.addEventListener("load", function(event) {
    loader.classList.remove("loading");
    loader.classList.add("loaded");
    document.body.classList.add("imgloaded");
})