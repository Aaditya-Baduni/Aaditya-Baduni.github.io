Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.animation.duration = 3000;
Chart.defaults.global.defaultFontFamily = 'Roboto';

// Do you like dogs?
var likeX = ["Yes", "No"];
var likeY = [7, 3, 0];
var barColours = ["green", "red"];

new Chart("myChart", {
    type: "bar",
    data: {
        labels: likeX,
        datasets: [{
            backgroundColor: barColours,
            data: likeY
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Do you like dogs?",
            fontSize: 25
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 20
                }
            }]
        },
        plugins: {
            deferred: {
                yOffset: '50%'
            }
        }
    }
});

// Which do you prefer - Cats or Dogs?
var preferX = ["Dogs", "Cats", "None"];
var preferY = [9, 0, 1];
var moreColours = ["rgb(255, 215, 0)", "red", "purple"];

new Chart("preferChart", {
    type: "bar",
    data: {
        labels: preferX,
        datasets: [{
            backgroundColor: moreColours,
            data: preferY
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Which do you prefer - cats or dogs?",
            fontSize: 25
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 20
                }
            }]
        },
        plugins: {
            deferred: {
                yOffset: '50%'
            }
        }
    }
});

// What is your favourite dog breed?
var breedX = ["Golden Retriever", "Labrador", "German Shephard", "Shih Tzu", "Beagle", "None"]
var breedY = [3, 3, 1, 1, 1, 1]
var breedColours = ["rgb(255, 215, 0)", "rgb(242,236,217)", "#9C7045", "rgb(200, 200, 200)", "#C4A484", "red"]

new Chart("breedChart", {
    type: "pie",
    data: {
        labels: breedX,
        datasets: [{
            backgroundColor: breedColours,
            data: breedY
        }]
    },
    options: {
        legend: {display: true, labels: {fontSize: 20}},
        title: {
            display: true,
            text: "What is your favourite dog breed?",
            fontSize: 25
        },
        plugins: {
            deferred: {
                yOffset: '50%'
            }
        }
    }
});