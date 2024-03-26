
    /* modified coding tutorial below for cursor!

    ----- Coding Tutorial by Patt Vira ----- 
    Name: Mouse-Grid Interaction
    Video Tutorial: https://youtu.be/hSDvqTMmOhA?si=4G9w9qORbUf4ZjhD
    
    Connect with Patt: @pattvira
    https://www.pattvira.com/
    ----------------------------------------
    */
    
    let rectangles = [];
    let cr = 10;
    let cols; let rows;
    let size = 15;
    
    function setup() {
      createCanvas(windowWidth -20, windowHeight - 20);
      cols = width/size;
      rows = height/size;
      for (let i=0; i<cols; i++){
        rectangles[i] = [];
        for (let j=0; j<rows; j++){
          rectangles[i][j] = new Rectangle(i*size, j*size, size, size);
        }
      }
    }
    
    function draw() {
        background(255, 255, 255, 0);
            noStroke();
      for (let i=0; i<cols; i++){
        for (let j=0; j<rows; j++){
          rectangles[i][j].collided(mouseX, mouseY, 20);
          rectangles[i][j].drawRect();
        }
      }
      fill(232, 255, 85);
      ellipse(mouseX, mouseY, cr*2, cr*2);
    }