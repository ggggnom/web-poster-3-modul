

//*let fallAtTheBegining = anime({
  targets: '.fallingAtTheBegining',
  translateY: [-1500, 0],
  rotate: '6deg',
  delay: anime.stagger(150, {start: 800})
});
 *//
  document.getElementById('666').scrollLeft = anime.random(0, 400)
}

setInterval(randomScroll, 1000);
