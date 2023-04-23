        function setup() {
            var canvas = createCanvas(windowWidth/1.1, windowHeight/1.5);

            canvas.parent('sketch-holder');
            background(0);
            noStroke();
            rectMode(CENTER);
        }

        function mousePressed(){
            if(mouseX > 101 && mouseY > 301){
                console.log(mouseX, mouseY)

            }
        }
        function draw() {
            background(35, 97, 69);
            //box circle, square, and trianle
            fill(0)
            rect(0, 0, 200, 200);
            rect(0, 100, 200, 200);
            rect(0, 200, 200, 200);
            stroke(255)
            line(0, 200, 100, 200)

            fill(255);
            ellipse(50, 50, 50);
            triangle(50, 125, 25, 175, 75, 175);
            rect(50, 250, 75);


        }