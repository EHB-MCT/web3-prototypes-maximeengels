
var sound = new Pizzicato.Sound('assets/audio/sound.mp3', function() {
  // Sound loaded!
  // sound.play();
});

var convolver = new Pizzicato.Effects.Convolver({
  impulse: 'assets/audio/sound.mp3',
  volume: 0.5,
  mix: 0.5
}, function (error) {
  sound.addEffect(convolver);
  // sound.play();
});