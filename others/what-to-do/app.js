var priority1_input = document.getElementById("prio1");
var priority2_input = document.getElementById("prio2");
var toDo_span = document.getElementById("to-do");
var submit_btn = document.getElementById("submit-btn");

submit_btn.style.width = "75px";

submit_btn.addEventListener("click", () => {
    var random = Math.floor(Math.random() * 2);
    var options = [priority1_input.value, priority2_input.value]
    toDo_span.innerText = options[random];
});