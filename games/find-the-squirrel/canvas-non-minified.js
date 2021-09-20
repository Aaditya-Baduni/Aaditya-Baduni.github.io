// jshint esversion: 6

window.onload = function () {
    var canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");

    // images
    var squirrel_img = document.getElementById("squirrel-img");
    var trees_img = document.getElementById("tree-img");

    var scoreboard_div = document.getElementById("score"); // scoreboard
    var score = 0; // score

    // styles
    canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight;
    canvas.style.border = "15px ridge red";
    canvas.style.borderRadius = "5px";

    ctx.drawImage(trees_img, 0, 0, canvas.width, canvas.height); // background image

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear everything
        ctx.drawImage(trees_img, 0, 0, canvas.width, canvas.height); // draw background image again
    }

    var currentSquirrel = 0; // to keep track of which squirrel is to be shown

    // all squirrels [x, y, width, height, alpha]
    var squirrel1 = [10, 10, 50, 50, 1];
    var squirrel2 = [canvas.width * 0.85, canvas.height * 0.75, 50, 50, 0.7];
    var squirrel3 = [canvas.width * 0.5, canvas.height * 0.70, 50, 50, 0.6];
    var squirrel4 = [canvas.width * 0.5, canvas.height * 0.15, 50, 50, 0.5];
    var squirrel5 = [canvas.width * 0.82, canvas.height * 0.40, 50, 50, 0.4];

    // an array with all of the squirrels in it
    var allSquirrels = [squirrel1, squirrel2, squirrel3, squirrel4, squirrel5];
    var squirrel = allSquirrels[currentSquirrel]; // using the currentSquirrel variable as an index to see the properties of the current squirrel
    ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]); // index 0 is x pos, 1 is y pos, 2 is width and 3 is height

    // what happens on mouse click
    function mouseClick(squirrels) { // allSquirrels array will be passed as the 'squirrels' argument in this function
        console.log("Mouse has clicked!");

        // co-ordinates of the mouse click
        var click_x = event.pageX;
        var click_y = event.pageY;
        console.log(click_x, click_y);
        // co-ordinates of the canvas
        var canvascoor = canvas.getBoundingClientRect();
        // adding scrollX and scrollY to get the real position of the canvas, accounting for how much has been scrolled
        var canvasX = canvascoor.x + scrollX;
        var canvasY = canvascoor.y + scrollY;
        var canvasWidth = canvascoor.width;
        var canvasHeight = canvascoor.height;
        console.log(canvasX, canvasY);

        // co-ordinates of the squirrel - adding canvas coordinates to it to get the position of the squirrel relative to the screen and not just to the canvas
        var squirrel_x = canvasX + squirrel[0];
        var squirrel_y = canvasY + squirrel[1];
        var squirrel_width = squirrel[2];
        var squirrel_height = squirrel[3];
        // check if the click was within the squirrel's boundary
        if ((click_x >= squirrel_x && click_x <= squirrel_x + squirrel_width) && (click_y >= squirrel_y && click_y <= (squirrel_y + squirrel_height))) {
            score++;
            scoreboard_div.innerText = `Score: ${score}/5`;
            clearCanvas();

            // add green background and then remove it after 300 miliseconds
            document.getElementsByTagName("body")[0].classList.add("green");
            setTimeout(function () {
                document.getElementsByTagName("body")[0].classList.remove("green");
            }, 300);

            // the allSquirrels array's last index is 4 (as there are 5 items in it) so if the currentSquirrel is equal to or less than 3 (3 is the second-last squirrel), then continue the game as usual
            if (currentSquirrel <= 3) {
                currentSquirrel++; // next squirrel
                squirrel = allSquirrels[currentSquirrel];
                ctx.globalAlpha = squirrel[4];
                ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]);
                ctx.globalAlpha = 1;
            } 
            // if the currentSquirrel is the last one (4th index) or more, then stop the game
            else if (currentSquirrel >= 4) {
                currentSquirrel = 5;
                alert(`You have completed the game! You got ${score}/5.`);
                document.getElementsByTagName("body")[0].removeEventListener("click", mouseClickRun);
            }
        } 
        // if the click wasn't on the squirrel but on the canvas
        else if (event.target.id === "canvas") {
            scoreboard_div.innerText = `Score: ${score}/5`;
            clearCanvas();
            // add red background and then remove it after 300 miliseconds
            document.getElementsByTagName("body")[0].classList.add("red");
            setTimeout(function () {
                document.getElementsByTagName("body")[0].classList.remove("red");
            }, 300);

            // the allSquirrels array's last index is 4 (as there are 5 items in it) so if the currentSquirrel is equal to or less than 3 (3 is the second-last squirrel), then continue the game as usual
            if (currentSquirrel <= 3) {
                currentSquirrel++;
                squirrel = allSquirrels[currentSquirrel];
                ctx.globalAlpha = squirrel[4];
                ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]);
                ctx.globalAlpha = 1;
            } 
            // if the currentSquirrel is the last one (4th index) or more, then stop the game
            else if (currentSquirrel >= 4) {
                currentSquirrel = 5;
                console.log(currentSquirrel);
                alert(`You have completed the game! You got ${score}/5.`);
                document.getElementsByTagName("body")[0].removeEventListener("click", mouseClickRun);
            }
        }
    }

    // restart button
    var restart_btn = document.getElementById("restart-btn");
    restart_btn.addEventListener("click", () => {
        // if the squirrel is more than the last index number in the allSquirrels array, then restart the game 
        if (currentSquirrel >= 5) {
            currentSquirrel = 0;
            console.log(currentSquirrel);
            score = 0;
            scoreboard_div.innerText = `Score: ${score}/5`;
            var allSquirrels = [squirrel1, squirrel2, squirrel3, squirrel4, squirrel5];
            var squirrel = allSquirrels[currentSquirrel];
            ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]);
            document.getElementsByTagName("body")[0].addEventListener("click", mouseClickRun);
        } else {
            alert("The game is already running.");
        }
    });

    function mouseClickRun() {
        mouseClick(allSquirrels);
    }

    /* When the body is clicked, run the mouseClickRun function to:
    check if the click was on the squirrel, if not then on the canvas
    */
    document.getElementsByTagName("body")[0].addEventListener("click", mouseClickRun);
};