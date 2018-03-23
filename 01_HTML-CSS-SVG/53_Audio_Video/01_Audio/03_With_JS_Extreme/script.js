var song = document.querySelector('audio')
var readout = document.querySelector('h1')
var play = document.querySelector('#play')
var pause = document.querySelector('#pause')
var volup = document.querySelector('#vup')
var voldown = document.querySelector('#vdown')

readout.textContent = song.volume

play.addEventListener ('click', function(){
  song.play()
})

pause.addEventListener ('click', function(){
  song.pause()
})

vup.addEventListener('click', function(){
    if (song.volume < 1) {
        song.volume += 0.1;
        readout.textContent = song.volume.toFixed(1);
    }
});

vdown.addEventListener('click', function(){
    if (song.volume >= 0.1) {
        song.volume-=0.1;
        readout.textContent = song.volume.toFixed(1);
    }
});
