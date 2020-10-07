var volumeValue = document.querySelector("#volume");
var mixValue = document.querySelector("#convolver-mix");
var volumeText = document.querySelector(".volText");
var mixText = document.querySelector(".mixText");


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
  mix: mixValue.value
}, function (error) {
});
sound.addEffect(convolver);

volumeValue.oninput = function(){
  console.log(this.value);
  sound.volume = this.value;
  volumeText.innerHTML = this.value;
}

mixValue.oninput = function(){
  mixText.innerHTML = this.value;
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