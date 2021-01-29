function setup(){
 canvas = createCanvas(500, 400);
 canvas.position(280, 200);
 video = createCapture(VIDEO);
 video.hide();
}
function draw(){
 image(video, 50, 50, 400, 300);
 fill(40, 80, 120);
 stroke(40, 80, 120);
 circle(40, 40, 40);
 circle(460, 40, 40);
 circle(40, 360, 40);
 circle(460, 360, 40);
 fill(80, 120, 40);
 stroke(80, 120, 40);
 rect(60, 20, 380, 40);
 rect(440, 60, 40, 280);
 rect(60, 340, 380, 40);
 rect(20, 60, 40, 280);
}
function take_selfie(){
 save("selfie.png");
}