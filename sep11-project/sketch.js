        let shapePicker = 0
        let capcity;
        mousexArr = []
        mouseyArr = []

        function setup() {
            var canvas = createCanvas(windowWidth/1.1, windowHeight/1.5);

            canvas.parent('sketch-holder');
            background(0);
            noStroke();
            rectMode(CENTER);
            capcity = 1
        }


        function mousePressed(){
            capcity++
            // console.log(mouseX, mouseY)
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

            if(mouseX > 101 && mouseY > 0 && mouseY < 301){
                mousexArr.push(mouseX)
                mouseyArr.push(mouseY)
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

            for(let i = 1; i < capcity; i++){

                if(shapePicker == 0 && mouseX > 101){
                    ellipse(mousexArr[i], mouseyArr[i], 50);
                    // console.log(mouseX)
                }
                else if(shapePicker == 1 && mouseX > 101 && mouseY > 0 && mouseY < 301){
                    triangle(mousexArr[i],  mouseyArr[i] - 50, mousexArr[i] + 50, mouseyArr[i] + 50, mousexArr[i] - 50,  mouseyArr[i] + 50)

                }else if(shapePicker == 2 && mouseX > 101 && mouseY > 0 && mouseY < 301){
                    rectMode(CENTER);
                    rect(mousexArr[i],  mouseyArr[i], 50);
                }
            }

        }