        function setup() {
            var canvas = createCanvas(windowWidth/1.1, windowHeight/1.5);

            canvas.parent('sketch-holder');
            background(0);
            noStroke();
            rectMode(CENTER);
        }

        let shapePicker = 0
        mousexArr = {}
        mouseyArr = {}


        function mousePressed(){
            if(mouseX > 0 && mouseX < 101 && mouseY > 0 && mouseY < 101 ){
                shapePicker= 0
                // console.log(0)
            } else if(mouseX > 0 && mouseX < 101 && mouseY > 101 && mouseY < 201 ){
                shapePicker  = 1
                // console.log(1)
            } else if(mouseX > 0 && mouseX < 101 && mouseY > 201 && mouseY < 301 ){
                shapePicker = 2
                // console.log(2)
            }
            mousexArr.push()
            console.log(mousexArr)
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

            if(mouseIsPressed && shapePicker == 0){
                ellipse(mouseX, mouseY, 50);

            }else if(mouseIsPressed && shapePicker == 1){
                triangle(mouseX, mouseY - 50, mouseX + 50, mouseY + 50, mouseX - 50, mouseY + 50)
            }else if(mouseIsPressed && shapePicker == 2){
                rectMode(CENTER);
                rect(mouseX, mouseY, 50);
            }

        }