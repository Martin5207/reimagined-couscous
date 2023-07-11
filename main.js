leftx=0;
rightx=0;
notsame=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,500);
    canvas.position(700,120)
    posenet=ml5.poseNet(video,molo)
    posenet.on("pose",rezzult);
}
function molo(){
    console.log("this is ready");
}
function draw(){
background("red")
fill("yellow")
stroke("black")
textSize(notsame);
text("microwave",100,300)
document.getElementById("square_side").innerHTML="size of the font is="+notsame+"px";
}
function rezzult(results){
    if(results.length>0){console.log(results)
        leftx=results[0].pose.leftWrist.x;
        rightx=results[0].pose.rightWrist.x
        notsame=floor(leftx-rightx);
        console.log("leftx="+leftx+"rightx="+rightx+"notsame="+notsame);
        
        }
}