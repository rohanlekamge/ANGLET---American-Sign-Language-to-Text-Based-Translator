
  let signPhraseClassifier;

  let jsonModelLpcation = 'https://teachablemachine.withgoogle.com/models/R9E9CbzbR/';

  

  let webcamView ;

  let rescaledVideo ;

  let label = "";


  function preload() {
    signPhraseClassifier = ml5.imageClassifier(jsonModelLpcation + 'model.json');
  }

  function setup() {
    createCanvas(320, 260);

    webcamView = createCapture(VIDEO);
    webcamView.size(320, 240);
    webcamView.hide();

    rescaledVideo = ml5.flipImage(webcamView);

    classifyWebcamCapture();
  }

  function draw() {
    background(0);

    image(rescaledVideo, 0, 0);


    fill(255);
    textSize(16);
    textAlign(CENTER);
    text(label, width / 2, height - 4);
  }


  function classifyWebcamCapture() {
    rescaledVideo = ml5.flipImage(webcamView)
    signPhraseClassifier.classify(rescaledVideo, predictedPhrase);
    rescaledVideo.remove();

  }

  function predictedPhrase(error, result) {
    
    if (error) {
      console.error(error);
      return;
    }

    label = result[0].label;
    //console.log(result);
    // Classifiy again!
    classifyWebcamCapture();
  }