
noseX=0;
noseY=0;

function preload() {
    lipImg = loadImage('https://i.postimg.cc/0NKTvgWg/lip.png') ;
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
        noseX = results[0].pose.nose.x -25;
        noseY = results[0].pose.nose.y + 25;
        console.log(noseX) ;
        console.log(noseY) ;
    }
}


  
  function take_snapshot() {
      save("mylipstick.png")
  }


  function draw() {
    image(video, 0, 0, 360, 300);
    image(lipImg, noseX, noseY, 50,20) ;
}