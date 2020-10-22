function playAudio(audio) {
    audio.play();
}

function stopAndPlayAudio(element, sound) {
    var sounds = document.getElementsByTagName("audio");
    for(var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].parentElement.classList.remove("keyPressed");
    }
    playAudio(sound);
    element.classList.add("keyPressed");
}

// the sounds
var a = document.getElementById("a");
var a_sound = document.getElementById("a-sound");

var b = document.getElementById("b");
var b_sound = document.getElementById("b-sound");

var c = document.getElementById("c");
var c_sound = document.getElementById("c-sound");

var d = document.getElementById("d");
var d_sound = document.getElementById("d-sound");

var e = document.getElementById("e");
var e_sound = document.getElementById("e-sound");

var f = document.getElementById("f");
var f_sound = document.getElementById("f-sound");

var g = document.getElementById("g");
var g_sound = document.getElementById("g-sound");

// on click of these elements, play their repective sounds
a.addEventListener("click", () => stopAndPlayAudio(a, a_sound));
b.addEventListener("click", () => stopAndPlayAudio(b, b_sound));
c.addEventListener("click", () => stopAndPlayAudio(c, c_sound));
d.addEventListener("click", () => stopAndPlayAudio(d, d_sound));
e.addEventListener("click", () => stopAndPlayAudio(e, e_sound));
f.addEventListener("click", () => stopAndPlayAudio(f, f_sound));
g.addEventListener("click", () => stopAndPlayAudio(g, g_sound));

/**
 * TODO: Write some code that when a sound is being played, automatically stop all other sounds playing.
 * TODO: Also play sounds when their respective keys are clicked on (keyboard).
 */

// check which key it is, and play the sound
function keyPressSound(key) {
    if(key.keyCode == "65") { // if the key is a
        stopAndPlayAudio(a, a_sound);
    }
    else if(key.keyCode == "66") { // if the key is b
        stopAndPlayAudio(b, b_sound);
    }
    else if(key.keyCode == "67") { // if the key is c
        stopAndPlayAudio(c, c_sound);
    }
    else if(key.keyCode == "68") { // if the key is d
        stopAndPlayAudio(d, d_sound);
    }
    else if(key.keyCode == "69") { // if the key is e
        stopAndPlayAudio(e, e_sound);
    }
    else if(key.keyCode == "70") { // if the key is f
        stopAndPlayAudio(f, f_sound);
    }
    else if(key.keyCode == "71") { // if the key is g
        stopAndPlayAudio(g, g_sound);
    }
}

// For their respective keys!
window.addEventListener("keydown", keyPressSound, false);