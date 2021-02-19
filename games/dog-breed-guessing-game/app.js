//jshint esversion:6
var trackNumber = 0;

var score = 0; // the user score
var score_span = document.getElementById('score');
var dog_img = document.getElementById('dog-img');

class Dog {
    constructor(breed, src) {
        this.breed = breed;
        this.src = src;
    }
}

// the dogs
var dogs = [];

var beagle = new Dog('Beagle', 'images/beagle.jpg');
dogs.push(beagle);

var german = new Dog('German Shepard', 'images/german.jpg');
dogs.push(german);

var golden = new Dog('Golden Retriever', 'images/golden.jpg');
dogs.push(golden);

var husky = new Dog('Husky', 'images/husky.jpg');
dogs.push(husky);

var labrador = new Dog('Labrador', 'images/labrador.jpg');
dogs.push(labrador);

var poodle = new Dog('Poodle', 'images/poodle.jpg');
dogs.push(poodle);

// when right, when wrong functions
function right() {
    trackNumber++;
    score++;
    score_span.innerText = score;

    // animation
    document.getElementsByTagName('body')[0].classList.add('right');
    setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.remove('right');
    }, 300);

    // if the tracknumber has exceeded dogs.length
    if (trackNumber >= dogs.length) {
        var restart = confirm(`You have got ${score} out of ${dogs.length} right. Game has ended. Do you want to restart?`);
        if (restart) {
            location.reload();
        } else {
            return;
        }
    }

    // move on to the next thing
    if (trackNumber < dogs.length) {
        dog_img.setAttribute('src', dogs[trackNumber].src);
    }
}

function wrong() {
    trackNumber++;
    // animation
    document.getElementsByTagName('body')[0].classList.add('wrong');
    setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.remove('wrong');
    }, 300);

    // if the tracknumber has exceeded dogs.length
    if (trackNumber >= dogs.length) {
        var restart = confirm(`You have got ${score} out of ${dogs.length} right. Game has ended. Do you want to restart?`);
        if (restart) {
            location.reload();
        } else {
            return;
        }
    }

    // move on to the next thing
    if (trackNumber < dogs.length) {
        dog_img.setAttribute('src', dogs[trackNumber].src);
    }
}

// all of the buttons
var allBtns = document.getElementsByClassName('option');

// add Event Listeners to all
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', () => {
        if (trackNumber < dogs.length) {
            if (allBtns[i].innerHTML === dogs[trackNumber].breed) {
                right();
            } else {
                wrong();
            }
        }
    });
}