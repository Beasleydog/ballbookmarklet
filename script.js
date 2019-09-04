 if (document.getElementById('Ball') == null) {
     var Ballxveloc = 0;
     var Ballyveloc = 0;
     var mousex = 0;
     var mousey = 0;
  
  
  
  
  
     var bally = 0;
     var score = 0;
     var ballx = 0;
     var waittime = 0;
     var changescore = 0;
     var ballwidth = 50;
     var ballheight = 50;
     var toldscore = 0;
     var mousexveloc = 0;
     var mouseyveloc = 0;
     var lmousex = 0;
     var lmousey = 0;
     var Ball = document.createElement('img');
     Ball.style.zIndex = 999;
     Ball.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png";
     Ball.id = 'Ball';
    
     Ball.style.position = 'fixed';
     Ball.width = ballwidth;
     Ball.select = 'none';
     Ball.height = ballheight;
     Ball.style.marginLeft = 500 + "px";
     ballx = 500;
     Ball.style.top = 0 + "px";
     document.body.insertBefore(Ball, document.body[0]);

     function BallChangeX(Amount) {
         ballx = Number(document.getElementById('Ball').style.marginLeft.slice(0, -2)) + Amount;
         document.getElementById('Ball').style.marginLeft = ballx + "px";
     }

     function BallChangeY(Amount) {
         bally = Number(document.getElementById('Ball').style.top.slice(0, -2)) + Amount;
         document.getElementById('Ball').style.top = bally + "px";
     }
     setInterval(update, 1);

     setInterval(mouseveloc, 30);

     function mouseveloc() {
         lmousex = mousex;
         lmousey = mousey;
     }

     function update() {
         mousexveloc = (lmousex - mousex) / 10;
         mouseyveloc = (lmousey - mousey) / 10;         
         
         Ballyveloc += .02;
         if (Ballxveloc > 1) {
             Ballxveloc -= .01;
         } else if (Ballxveloc < -1) {
             Ballxveloc += .01;
         }
         if (Ballxveloc > 4) {
             Ballxveloc -= 2;
         } else if (Ballxveloc < -4) {
             Ballxveloc += 2;
         }
         BallChangeY(Ballyveloc);
         BallChangeX(Ballxveloc);
         if (bally > 900) {
             if (toldscore == 0) {
                 alert("You got " + score + " points!");
                 toldscore = 1;
             }
         }
         if (ballx < 0 || ballx > 1450) {
             Ballxveloc *= -.8;
         }
         if (bally + ballheight - 5 < mousey && mousey - ballheight - 5 < bally) {
             if (ballx < mousex + 10 && mousex < ballx + ballwidth + 10) {
                 Ballyveloc *= -.8;
                 Ballyveloc += mouseyveloc;
                 if (changescore == 0) {
                     score += 1;
                     changescore = 1;
                 }
                 Ballxveloc = (ballx + (ballwidth / 2) - mousex) / 7;
                 if (Ballxveloc > 0) {
                     Ballxveloc += mousexveloc;
                 } else {
                     Ballxveloc -= mousexveloc;
                 }
             }
         } else {
             changescore = 0;
         }
     }
     document.onmousemove = function() {
         mousex = event.clientX;
         mousey = event.clientY;
     };
 } else {
     document.getElementById('Ball').style.top = "1px";
     document.getElementById('Ball').style.marginLeft = "500px";
     toldscore = 0;
     score = 0;
     Ballxveloc = 0;
     Ballyveloc = 0;
 }
