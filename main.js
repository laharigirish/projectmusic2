song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}


function setup(){
    canvas= createCanvas(600, 500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Pose net initialized");
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song1.play();
    song2.play();
    

}

function gotPoses(error, results){
if(results.length>0){
    console.log(results);
}
if(results.length >0){
    leftWristX= results[0].pose.leftWrist.x;
    leftWristY= results[0].pose.leftWrist.y;
    rightWristX= results[0].pose.rightWrist.x;
    righttWristY= results[0].pose.righttWrist.y;

}
}