// if (document.getElementById('Ball') == null) {
//      var Ballxveloc = 0;
//      var Ballyveloc = 0;
//      var mousex = 0;
//      var mousey = 0;
//      var bally = 0;
//      var score = 0;
//      var ballx = 0;
//      var waittime = 0;
//      var changescore = 0;
//      var ballwidth = 50;
//      var ballheight = 50;
//      var toldscore = 0;
//      var mousexveloc = 0;
//      var mouseyveloc = 0;
//      var lmousex = 0;
//      var lmousey = 0;
//   var count = 0;
//   var srcs = ["https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794408921/home/Circle1.png","https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794411369/home/Circle2.png","https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794414309/home/Circle3.png","https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794417056/home/Circle4.png","https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794420589/home/Circle5.png","https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794423543/home/Circle6.png","https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794426331/home/Circle7.png"];
//      var Ball = document.createElement('img');
//      Ball.style.zIndex = 999;
//      Ball.src = "https://sites.google.com/site/ballbookmarklet/_/rsrc/1567794408921/home/Circle1.png";
//      Ball.id = 'Ball';
    
//      Ball.style.position = 'fixed';
//      Ball.width = ballwidth;
//      Ball.select = 'none';
//      Ball.height = ballheight;
//      Ball.style.marginLeft = 500 + "px";
//      ballx = 500;
//      Ball.style.top = 0 + "px";
//      document.body.insertBefore(Ball, document.body[0]);

//      function BallChangeX(Amount) {
//          ballx = Number(document.getElementById('Ball').style.marginLeft.slice(0, -2)) + Amount;
//          document.getElementById('Ball').style.marginLeft = ballx + "px";
//      }

//      function BallChangeY(Amount) {
//          bally = Number(document.getElementById('Ball').style.top.slice(0, -2)) + Amount;
//          document.getElementById('Ball').style.top = bally + "px";
//      }
//      setInterval(update, 1);

//      setInterval(mouseveloc, 30);

//      function mouseveloc() {
//          lmousex = mousex;
//          lmousey = mousey;
//      }

//      function update() {
//          mousexveloc = (lmousex - mousex) / 10;
//          mouseyveloc = (lmousey - mousey) / 10;         
         
//          Ballyveloc += .02;
//          if (Ballxveloc > 1) {
//              Ballxveloc -= .01;
//          } else if (Ballxveloc < -1) {
//              Ballxveloc += .01;
//          }
//          if (Ballxveloc > 4) {
//              Ballxveloc -= 2;
//          } else if (Ballxveloc < -4) {
//              Ballxveloc += 2;
//          }
//          BallChangeY(Ballyveloc);
//          BallChangeX(Ballxveloc);
//          if (bally > 900) {
//              if (toldscore == 0) {
//                  alert("You got " + score + " points!");
//                  toldscore = 1;
//              }
//          }
//          if (ballx < 0 || ballx > screen.width) {
//              Ballxveloc *= -1;
//          }
//          if (bally + ballheight - 5 < mousey && mousey - ballheight - 5 < bally) {
//              if (ballx < mousex + 10 && mousex < ballx + ballwidth + 10) {
//                  Ballyveloc *= -.8;
//                  Ballyveloc += mouseyveloc;
//                  if (changescore == 0) {
//                      score += 1;
//                      changescore = 1;
//                    count++;
//                    if (count+1>srcs.length){
//                      count=0;
//                    }
//                    document.getElementById("Ball").src = srcs[count]
//                  }
//                  Ballxveloc = (ballx + (ballwidth / 2) - mousex) / 7;
//                  if (Ballxveloc > 0) {
//                      Ballxveloc += mousexveloc;
//                  } else {
//                      Ballxveloc -= mousexveloc;
//                  }
//              }
//          } else {
//              changescore = 0;
//          }
//      }
//      document.onmousemove = function() {
//          mousex = event.clientX;
//          mousey = event.clientY;
//      };
//  } else {
//      document.getElementById('Ball').style.top = "1px";
//      document.getElementById('Ball').style.marginLeft = "500px";
//      toldscore = 0;
//      score = 0;
//      Ballxveloc = 0;
//      Ballyveloc = 0;
//  }
