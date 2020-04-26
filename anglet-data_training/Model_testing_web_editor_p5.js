// Add some header info
// For TM template code

// Video
  let classifier;
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/ByH4aico/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "waiting....";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

function setup() {
  createCanvas(350, 400);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo(){
  classifier.classify(video, gotResults) ;
}


function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height - 16);
}


function gotResults(error, results){
  label = results[0].label ;
  classifyVideo();
  //nsole.log(results[0].label);
}

