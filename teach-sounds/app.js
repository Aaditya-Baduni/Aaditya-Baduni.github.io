function stopAndPlayAudio(element, soundOfTheElement) {
    var sounds = document.getElementsByTagName("audio");
    for(var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
        sounds[i].parentElement.classList.remove("keyPressed");
    }
    soundOfTheElement.play();
    element.classList.add("keyPressed");
    // when the sound had ended, remove the 'keypressed' class
    soundOfTheElement.onended = function() {
        element.classList.remove("keyPressed");
    };
}

// let's get the sounds and their parent elements!!!
var dog = document.getElementById("dog");
var dog_sound = document.getElementById("dog-sound");

var cat = document.getElementById("cat");
var cat_sound = document.getElementById("cat-sound");

var goat = document.getElementById("goat");
var goat_sound = document.getElementById("goat-sound");

var pig = document.getElementById("pig");
var pig_sound = document.getElementById("pig-sound");

dog.addEventListener("click", () => stopAndPlayAudio(dog, dog_sound));
cat.addEventListener("click", () => stopAndPlayAudio(cat, cat_sound));
goat.addEventListener("click", () => stopAndPlayAudio(goat, goat_sound));
pig.addEventListener("click", () => stopAndPlayAudio(pig, pig_sound));