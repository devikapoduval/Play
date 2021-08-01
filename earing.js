
rightEarX=0;
rightEarY=0;
leftEarX=0;
leftEarY=0;

function preload() {
    earImg = loadImage('https://i.postimg.cc/B6RhStz4/right-Earring.png') ;
}


function setup()
{
    canvas = createCanvas(360,300) ;
    canvas.position(600, 200) ;
    video = createCapture(VIDEO) ;
    video.size(360,300) ;
    video.hide() ;

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on('pose' , gotResult) ;
}

function modelLoaded()
{
    console.log("Model is loaded..") ;
}

function gotResult(results)
{
    if(results.length > 0) {
        console.log(results) ;
        rightEarX = results[0].pose.rightEar.x - 10;
        rightEarY = results[0].pose.rightEar.y + 16;
        leftEarX = results[0].pose.leftEar.x - 10;
        leftEarY = results[0].pose.leftEar.y;
    }
}
  
  function take_snapshot() {
      save("myearing.png")
  }

  function draw() {
    image(video, 0, 0, 360, 300);
    image(earImg, rightEarX, rightEarY, 20,50) ;
    image(earImg, leftEarX, leftEarY, 20,50) ;
}