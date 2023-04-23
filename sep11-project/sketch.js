        function setup() {
            var canvas = createCanvas(windowWidth/1.1, windowHeight/1.5);

            canvas.parent('sketch-holder');
            background(0);
            noStroke();
            rectMode(CENTER);
        }

        function mousePressed(){
            console.log(mouseX, mouseY)
        }
        function draw() {
            background(35, 97, 69);
            //box circle, square, and trianle
            fill(0)
            rect(0, 0, 100, 100);
            rect(0, 100, 100, 100);
            rect(0, 200, 100, 100);

            fill(255);
            ellipse(50, 50, 25);
            triangle(50, 150, 25, 175, 75, 175);
            rect(0, 210, 75, 75);

        }