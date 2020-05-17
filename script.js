// Made with Zdog
const PI = 3.1415926536;

Zfont.init(Zdog);

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
  resize: 'fullscreen',
  // stop spinning when drag starts
  onDragStart: function() {
    // isSpinning = false;
  },
});


// square
new Zdog.Rect({
  addTo: illo,
  width: 0,
  height: 28,
  translate: { z: -10 },
  stroke: 40,
  rotate: {x: PI/4},
  color: '#fa7075',
  fill: true,
});

new Zdog.Rect({
  addTo: illo, 
  width: 0,
  height: 28,
  translate: { z: 10 },
  stroke: 40,
  rotate: {x: -PI/4},
  color: '#fa7075',
  fill: true,
});


// Create a Font object
// You can use pretty much any .ttf or .otf font!
// https://github.com/jaames/zfont#zdogfont
var font = new Zdog.Font({
  src: 'https://cdn.jsdelivr.net/gh/jaames/zfont/demo/fredokaone.ttf'
});

// Create a Text object
// Text objects behave like any other Zdog shape!
// https://github.com/jaames/zfont#zdogtext
var text = new Zdog.Text({
  addTo: illo,
  font: font,
  value: "520!",
  fontSize: 50,
  translate: {y:50},
  rotate: {y: PI/2},
  textAlign: 'center',
  textBaseline: 'middle',
  color: '#543864',
  fill: true,
  stroke: 4,
});




function animate() {
  illo.rotate.y += isSpinning ? -0.03 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}

animate();




var isPlaying = true;
var audioMp3 = new Audio();
audioMp3.src = 'https://dazhizhong.github.io/inlove.mp3';
audioMp3.addEventListener('loadeddata', () => {
  let duration = audioMp3.duration;
  console.log(duration);
  // The duration variable now holds the duration (in seconds) of the audio clip 
})

document.addEventListener('DOMContentLoaded', function() {
  // alert('click for audio ~');
   audioMp3.play();
   isPlaying = false;
}, false);

function playpause(){
  if (isPlaying){
    audioMp3.pause();
  } else {
    audioMp3.play();
  }
  isPlaying = !isPlaying;
}