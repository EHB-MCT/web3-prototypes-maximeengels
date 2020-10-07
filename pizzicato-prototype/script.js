
var convolver = new Pizzicato.Effects.Convolver({
  impulse: 'audio/sound.mp3',
  mix: 0.5
}, function (error) {
  sound.addEffect(convolver);
  sound.play();
});