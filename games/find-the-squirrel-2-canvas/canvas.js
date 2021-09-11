// jshint esversion: 6

window.onload = function () {
    var canvas = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    var ctx = canvas.getContext("2d");

    // images
    var squirrel_img = document.getElementById("squirrel-img");
    var trees_img = document.getElementById("tree-img");

    var scoreboard_div = document.getElementById("scoreboard"); // scoreboard
    var score = 0; // score

    // styles
    canvas.width = window.innerWidth * 0.75;
    canvas.height = window.innerHeight;
    canvas.style.border = "15px ridge red";
    canvas.style.borderRadius = "5px";

    ctx.drawImage(trees_img, 0, 0, canvas.width, canvas.height); // background image

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear everything
        ctx.drawImage(trees_img, 0, 0, canvas.width, canvas.height); // background image
    }

    var currentSquirrel = 0;

    // all squirrels [x, y, width, height, alpha]
    var squirrel1 = [10, 10, 50, 50, 1];
    var squirrel2 = [canvas.width * 0.85, canvas.height * 0.75, 50, 50, 0.7];
    var squirrel3 = [canvas.width * 0.5, canvas.height * 0.70, 50, 50, 0.6];
    var squirrel4 = [canvas.width * 0.5, canvas.height * 0.15, 50, 50, 0.5];
    var squirrel5 = [canvas.width * 0.82, canvas.height * 0.40, 50, 50, 0.4];

    var allSquirrels = [squirrel1, squirrel2, squirrel3, squirrel4, squirrel5];
    var squirrel = allSquirrels[currentSquirrel];
    ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]);

    // what happens on mouse click
    function mouseClick(squirrels) {
        console.log("Mouse has clicked!");

        // co-ordinates of the mouse click
        var click_x = event.pageX;
        var click_y = event.pageY;
        console.log(click_x, click_y);
        // co-ordinates of the canvas
        var canvascoor = canvas.getBoundingClientRect();
        var canvasX = canvascoor.x + scrollX;
        var canvasY = canvascoor.y + scrollY;
        console.log(canvasX, canvasY);

        // co-ordinates of the squirrel
        var squirrel_x = canvasX + squirrel[0];
        var squirrel_y = canvasY + squirrel[1];
        var squirrel_width = squirrel[2];
        var squirrel_height = squirrel[3];
        // check if the click was within the squirrel's boundary
        if ((click_x >= squirrel_x && click_x <= squirrel_x + squirrel_width) && (click_y >= squirrel_y && click_y <= (squirrel_y + squirrel_height))) {
            score++;
            scoreboard_div.innerText = `Score: ${score}/5`;
            clearCanvas();

            document.getElementsByTagName("body")[0].classList.add("green");
            setTimeout(function () {
                document.getElementsByTagName("body")[0].classList.remove("green");
            }, 300);

            if(currentSquirrel <= 3) {
                currentSquirrel++;
                squirrel = allSquirrels[currentSquirrel];
                ctx.globalAlpha = squirrel[4];
                ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]);
                ctx.globalAlpha = 1;
            } else if(currentSquirrel >= 4) {
                alert(`You have completed the game! You got ${score}/5`);
                document.getElementsByTagName("body")[0].removeEventListener("click", mouseClickRun);
            } 
        } else {
            scoreboard_div.innerText = `Score: ${score}/5`;
            clearCanvas();
            document.getElementsByTagName("body")[0].classList.add("red");
            setTimeout(function () {
                document.getElementsByTagName("body")[0].classList.remove("red");
            }, 300);

            if(currentSquirrel <= 3) {
                currentSquirrel++;
                squirrel = allSquirrels[currentSquirrel];
                ctx.globalAlpha = squirrel[4];
                ctx.drawImage(squirrel_img, squirrel[0], squirrel[1], squirrel[2], squirrel[3]);
                ctx.globalAlpha = 1;
            } else if(currentSquirrel >= 4) {
                alert(`You have completed the game! You got ${score}/5`);
                document.getElementsByTagName("body")[0].removeEventListener("click", mouseClickRun);
            } 
        }
    }

    function mouseClickRun() {
        mouseClick(allSquirrels);
    }
    // body click
    document.getElementsByTagName("body")[0].addEventListener("click", mouseClickRun);
};