var volumeValue = document.querySelector("#volume");
var mixValue = document.querySelector("#convolver-mix");
var volumeText = document.querySelector(".volText");
var mixText = document.querySelector(".mixText");
var mix = 0.5;

var sound = new Pizzicato.Sound({
  source: 'file',
  options: { 
    path: 'assets/audio/drums.mp3',
    loop: 'true'}
}, function() {
  console.log("Song file loaded!");
});

var convolver = new Pizzicato.Effects.Convolver({
  impulse: 'assets/audio/scala-milan.wav',
  mix: 1
}, function (error) {
});
sound.addEffect(convolver);

volumeValue.oninput = function(){
  console.log(Number.parseFloat(this.value).toFixed(1));
  Pizzicato.volume = Number.parseFloat(this.value).toFixed(1);
  volumeText.innerHTML = this.value;
}

mixValue.oninput = function(){
  mixText.innerHTML = this.value;
  convolver.mix = this.value;
}

function playMusic(){
  sound.play();
}

function pauseMusic(){
  sound.pause();
}

function stopMusic(){
  sound.stop();
}