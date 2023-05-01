        let shapePicker = 0
        let limits = 1
        let cirxArr = []
        let ciryArr = []

        let trixArr = []
        let triyArr = []

        let rectxArr = []
        let rectyArr = []


        function setup() {
            var canvas = createCanvas(windowWidth/1.1, windowHeight/1.5);

            canvas.parent('sketch-holder');
            background(0);
            noStroke();
            rectMode(CENTER);

        }

        function mouseDragged(){
            limits++
            // console.log(mouseX, mouseY)
            if(mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100 ){
                shapePicker= 0
                // console.log(0)
            } else if(mouseX > 0 && mouseX < 100 && mouseY > 100 && mouseY < 200 ){
                shapePicker  = 1
                // console.log(1)
            } else if(mouseX > 0 && mouseX < 100 && mouseY > 200 && mouseY < 300 ){
                shapePicker = 2
                // console.log(2)
            }

            if(mouseX > 101 && shapePicker == 0){
                cirxArr.push(mouseX)
                ciryArr.push(mouseY)
                // console.log(mouseX, mouseY)
            } else if(mouseX > 101 && shapePicker == 1){
                trixArr.push(mouseX)
                triyArr.push(mouseY)
                // console.log(mouseX, mouseY)
            } else if(mouseX > 101 && shapePicker == 2){
                rectxArr.push(mouseX)
                rectyArr.push(mouseY)
                // console.log(mouseX, mouseY)
            }

        }
        function draw() {
            rectMode(CORNER)
            stroke(255)
            background(35, 97, 69);
            //box circle, square, and trianle
            fill(0);
            rect(0, 0, 100, 100);
            rect(0, 100, 100, 100);
            rect(0, 200, 100, 100);


            //color
            fill(200)
            ellipse(50, 50, 50);
            triangle(50, 125, 25, 175, 75, 175);
            rect(25, 225, 50);

            for(let i = 1; i < limits; i++){
                noStroke()
                ellipse(cirxArr[i], ciryArr[i], 25);

                triangle(trixArr[i],  triyArr[i] - 10, trixArr[i] + 10, triyArr[i] + 10, trixArr[i] - 10,  triyArr[i] + 10)

                rectMode(CENTER);
                rect(rectxArr[i],  rectyArr[i], 25);
            }

        }