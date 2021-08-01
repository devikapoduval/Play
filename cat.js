catnoseX=0;
catnoseY=0;

function preload() {
    whiskerImg = loadImage('https://i.postimg.cc/g2GZZmFp/cat-Whiskers.png') ;
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
        catnoseX = results[0].pose.nose.x - 50;
        catnoseY = results[0].pose.nose.y - 15;
    
    }
}
  
  function take_snapshot() {
      save("myfiltercat.png")
  }



  function draw() {
    image(video, 0, 0, 360, 300);
    image(whiskerImg, catnoseX, catnoseY, 100,70) 
 }


