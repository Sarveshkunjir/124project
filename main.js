noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background("red");
    document.getElementById("square_sides").innerHTML="width and height="+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}