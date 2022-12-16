rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 380);
    video.position(50 , 135);
    canvas = createCanvas(600, 380);
    canvas.position(600, 135);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    background("#969A97");
    fill("#ebbd78");
    stroke("#fa970c");
    textSize(difference);
    text("Yashika", 50, 300);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX); 
        console.log("right wrist = "+rightWristX + "left wrist = "+leftWristX + "differnce = "+difference);
    }
}