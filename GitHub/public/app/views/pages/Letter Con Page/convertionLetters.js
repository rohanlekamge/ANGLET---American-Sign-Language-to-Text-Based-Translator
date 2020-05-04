  /* This is the variable that we are usign to store the classified items */
  let signPhraseClassifier;
 /* Here's the location of the locally downloaded ts.js file. If the application is a hosted one
    link of the colud of the ts.js model should be imported here  */
  let jsonModelLpcation = 'SDGP/Implementation/ANGLET/angletJS/final/public/app/views/pages/models/'; 
  /* This variable is defined to capture the live view of the user, using the web cam comp. */
  let webcamView ;
  /* Here the video input that we captured from the webcam acts as an mirror, So before using it we have to flip the
  view of the recived video input */
  let rescaledVideo ;
  /* The banner element is creted to store the value of the confident varible that coming as a associative array
  This can be seen in log statments in the browser*/
  let label = "";

  function setup() {
    createCanvas(320, 260);

    webcamView = createCapture(VIDEO);
    webcamView.size(320, 240);
    webcamView.hide();
 /* Here the video input that we captured from the webcam acts as an mirror, So before using it we have to flip the
  view of the recived video input */
    rescaledVideo = ml5.flipImage(webcamView);

    classifyWebcamCapture();
  }

  function draw() {
    background(0);

    image(rescaledVideo, 0, 0);

/* All the banner functionalities are available here */
    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }

    /* Preload method will load the saved model and after that classification process will start */
    function preload() {
      /* imageClassifier is an inbuilt function belongs to classifiactions process in ml5.js library.
       ml5.js is built on top of ts.js and because of that anykind of functions belong to ml5 can be used in
       ts.js model classifications*/
      signPhraseClassifier = ml5.imageClassifier(jsonModelLpcation + 'model.json');
      let isModelLoaded = true ;
      if (isModelLoaded) {
        console.log('Locally installed ts.js model is loaded to the application');
      }
      else{
        console.log('Web application cannot identify the locally downloaded model');
        console.log('Check whether you have placed all the .weights in the correct path and try again');
      }
    }

/* Here, the classiffication process is happening and all the defined functions and their responses are used in here*/
  function classifyWebcamCapture() {
    rescaledVideo = ml5.flipImage(webcamView)
    signPhraseClassifier.classify(rescaledVideo, predictedPhrase);
    rescaledVideo.remove();
  }
/* Final outcome of the predicted output is deleivered here */
  function predictedPhrase(error, result) {
    /* If there is an technical error it'll be promted here */
    /* If there is an error in the data tarining process this method will propmt a log in the console */
    if (error) {
      console.error(error);
      return;
    }

    label = result[0].label;
    //console.log(result);
    /* Here we have called the previous method again to do the classification continuesly. It will capture all the key frames
    belong to the flipped, live captured video*/
    classifyWebcamCapture();
  }