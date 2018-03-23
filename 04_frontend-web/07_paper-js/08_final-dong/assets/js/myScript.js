var circles = [];

var keyData = {

  q: {
  sound: new Howl({
    src: ['assets/audio/bubbles.mp3']
  }),
  color: '#1abc9c'
  },
  w: {
  sound: new Howl({
    src: ['assets/audio/clay.mp3']
  }),
  color: '#2ecc71'
  },
  e: {
  sound: new Howl({
    src: ['assets/audio/confetti.mp3']
  }),
  color: '#3498db'
  },
  r: {
  sound: new Howl({
    src: ['assets/audio/corona.mp3']
  }),
  color: '#9b59b6'
  },
  t: {
  sound: new Howl({
    src: ['assets/audio/dotted-spiral.mp3']
  }),
  color: '#34495e'
  },
  y: {
  sound: new Howl({
    src: ['assets/audio/flash-1.mp3']
  }),
  color: '#16a085'
  },
  u: {
  sound: new Howl({
    src: ['assets/audio/flash-2.mp3']
  }),
  color: '#27ae60'
  },
  i: {
  sound: new Howl({
    src: ['assets/audio/flash-3.mp3']
  }),
  color: '#2980b9'
  },
  o: {
  sound: new Howl({
  src: ['assets/audio/glimmer.mp3']
  }),
  color: '#8e44ad'
  },
  p: {
  sound: new Howl({
    src: ['assets/audio/moon.mp3']
  }),
  color: '#2c3e50'
  },
  a: {
  sound: new Howl({
    src: ['assets/audio/pinwheel.mp3']
  }),
  color: '#f1c40f'
  },
  s: {
  sound: new Howl({
    src: ['assets/audio/piston-1.mp3']
  }),
  color: '#e67e22'
  },
  d: {
  sound: new Howl({
    src: ['assets/audio/piston-2.mp3']
  }),
  color: '#e74c3c'
  },
  f: {
  sound: new Howl({
    src: ['assets/audio/prism-1.mp3']
  }),
  color: '#95a5a6'
  },
  g: {
  sound: new Howl({
    src: ['assets/audio/prism-2.mp3']
  }),
  color: '#f39c12'
  },
  h: {
  sound: new Howl({
    src: ['assets/audio/prism-3.mp3']
  }),
  color: '#d35400'
  },
  j: {
  sound: new Howl({
    src: ['assets/audio/splits.mp3']
  }),
  color: '#1abc9c'
  },
  k: {
  sound: new Howl({
    src: ['assets/audio/squiggle.mp3']
  }),
  color: '#2ecc71'
  },
  l: {
  sound: new Howl({
    src: ['assets/audio/strike.mp3']
  }),
  color: '#3498db'
  },
  z: {
  sound: new Howl({
    src: ['assets/audio/suspension.mp3']
  }),
  color: '#9b59b6'
  },
  x: {
  sound: new Howl({
    src: ['assets/audio/timer.mp3']
  }),
  color: '#34495e'
  },
  c: {
  sound: new Howl({
    src: ['assets/audio/ufo.mp3']
  }),
  color: '#16a085'
  },
  v: {
  sound: new Howl({
    src: ['assets/audio/veil.mp3']
  }),
  color: '#27ae60'
  },
  b: {
  sound: new Howl({
    src: ['assets/audio/wipe.mp3']
  }),
  color: '#2980b9'
  },
  n: {
  sound: new Howl({
  src: ['assets/audio/zig-zag.mp3']
  }),
  color: '#8e44ad'
  },
  m: {
  sound: new Howl({
    src: ['assets/audio/moon.mp3']
  }),
  color: '#2c3e50'
  }
}

function onKeyDown(event) {
  if (keyData[event.key]){
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomView = Point.random() * maxPoint;
    var circle = new Path.Circle(randomView, 500);
    circle.fillColor = keyData[event.key].color;
    circle.strokeColor = "white";
    keyData[event.key].sound.play();
    circles.push(circle);
  }
}

function onFrame(event){
  for (var i = 0; i < circles.length; i++) {
    circles[i].scale(.92);
    circles[i].fillColor.hue += 5;
    circles[i].strokeColor.hue += 15;
  }
}
