// if right-clicked
window.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    var contextElement = document.getElementById("context-menu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});

// if not right-clicked
window.addEventListener("click", function() {
    document.getElementById("context-menu").classList.remove("active");
});

// cache the DOM
var reload_element = document.getElementById("reload");

reload_element.onclick = function() {
    location.reload();
};