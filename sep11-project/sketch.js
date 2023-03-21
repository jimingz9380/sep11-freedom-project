function setup() {
    var canvas = createCanvas(windowWidth/2, windowHeight/2);

    canvas.parent('sketch-holder');

    background(0);

    noStroke();

      rectMode(CENTER);
  }



  let mySpeed = 3;
  let myXPos = 100;
  let myYPos = 100;

  //these will track the coords of my edges
  let myLeft, myRight, myTop, myBottom;

  //these will track my enemy coords edge
  let enemyLeft, enemyRight, enemyTop, enemyBottom;

  let enemyXPos = 300;
  let enemyYPos = 300;




  function draw() {
      background(0);

      //this is the player
      fill(255, 0, 0);
      rect(myXPos, myYPos, 50, 50);

      //this is the enemy
      fill(0, 0, 255);
      rect(enemyXPos, enemyYPos, 50, 50);

      if(keyIsDown(LEFT_ARROW)){
          myXPos -= 3;
      }

      if(keyIsDown(RIGHT_ARROW)){
          myXPos += 3;
      }

      if(keyIsDown(UP_ARROW)){
          myYPos -= 3;
      }

      if(keyIsDown(DOWN_ARROW)){
          myYPos += 3;
      }

      myLeft = myXPos - 25;
      myRIght = myXPos + 25;
      myTop = myYPos - 25;
      myBottom = myYPos + 25;

      enemyLeft = enemyXPos -25;
      enemyRight = enemyXPos + 25;
      enemyTop = enemyYPos - 25;
      enemyBottom = enemyYPos + 25;

      //detect NON-Collision
      if(
         myLeft > enemyRight ||
         myRight < enemyLeft ||
         myTop > enemyBottom ||
         myBottom < enemyTop
      ){
          //do nothing
      }

      //detect collistion
      else {
          fill(random(255), random(255), random(255))
          textSize(22);
          text("Collision!",  140, 480);
      }
  }