var fallPinKTHread = anime.timeline({
  targets: '.thread_pink',
  duration: 300,
  easing: 'easeInOutCubic',
  delay: 500,
  autoplay: true,
})

fallPinKTHread
  .add({
    targets: '.thread_pink',
    translateY: ['-150vh', 0],
  })

var fallYes = anime({
  targets: '.yes',
  duration: 350,
  easing: 'easeInOutCubic',
  delay: 600,
  autoplay: true,
  translateY: ['-150vh', 0]
})

var fallAboutMemorise = anime.timeline({
  targets: '.about_memorise',
  duration: 100,
  rotate: 54,
  easing: 'easeInOutCubic',
  autoplay: true
})

fallAboutMemorise
  .add({
    delay: 700,
    duration: 350,
    translateY: ['-150vh', 0]
  })

var fallMovingFrase = anime.timeline({
  targets: '.moving_phrase_rectangle',
  easing: 'easeInOutCubic',
  autoplay: true
})

fallMovingFrase
  .add({
    targets: '.moving_phrase_rectangle',
    delay: 700,
    duration: 350,
    translateY: ['-1500vh', 0]
  })
  .add({
    targets: '.moving_phrase_rectangle',
    duration: 350,
    rotate: 6
  })



var fallGreenSmile = anime({
  targets: '.rectangle_smile_man',
  duration: 400,
  easing: 'easeInOutCubic',
  delay: 900,
  autoplay: true,
  translateY: ['-150vh', 0]
})

var fallGreenSmile = anime({
  targets: '.rectangle_smile_smile',
  duration: 400,
  easing: 'easeInOutCubic',
  delay: 900,
  autoplay: true,
  translateY: ['-150vh', 0]
})

const fallAboutHappines = anime.timeline({
  targets: '.about_happines',
  easing: 'easeInOutCubic',
  autoplay: true
})

fallAboutHappines
  .add({
    targets: '.about_happines',
    delay: 1000,
    duration: 350,
    translateY: ['-1500vh', 0],
  })
  .add({
    targets: '.about_happines',
    duration: 350,
    rotate: -15
  })

  const fallColoring = anime.timeline({
    targets: '.coloring',
    easing: 'easeInOutCubic',
    autoplay: true
  })

  fallColoring
    .add({
      targets: '.coloring',
      delay: 1200,
      duration: 350,
      translateY: ['-1500vh', 0],
    })
    .add({
      targets: '.coloring',
      duration: 350,
      rotate: -5
    })

    var fallButton = anime({
      targets: '.button',
      duration: 350,
      easing: 'easeInOutCubic',
      delay: 1200,
      autoplay: true,
      translateY: ['-150vh', 0]
    })

    var fallSmile = anime({
      targets: '.yellow_smile',
      duration: 350,
      easing: 'easeInOutCubic',
      delay: 1300,
      autoplay: true,
      translateY: ['-150vh', 0]
    })

    var fallRedThread = anime({
      targets: '.thread_red',
      duration: 350,
      easing: 'easeInOutCubic',
      delay: 1400,
      autoplay: true,
      translateY: ['-150vh', 0]
    })

    var fallAboutChildhood = anime({
      targets: '.about_childhood',
      duration: 350,
      rotate: 128,
      easing: 'easeInOutCubic',
      delay: 1500,
      autoplay: true,
      translateY: ['-150vh', 0]
    })

    let changeColorBacground = anime.timeline({
      targets: 'body',
      direction: 'alternate',
      duration: 5000,
      autoplay: false
    })

    changeColorBacground
      .add({
        targets: 'body',
        backgroundColor: '#000033',
        duration: 500
      })
      .add({
        targets: 'body',
        backgroundColor: '#003366',
        duration: 500
      })
      .add({
        targets: 'body',
        backgroundColor: '#003399',
        duration: 500
      })
      .add({
        targets: 'body',
        backgroundColor: '#3366CC',
        duration: 500
      })
      .add({
        targets: 'body',
        backgroundColor: '#009999',
        duration: 500
      })
      .add({
        targets: 'body',
        backgroundColor: '#33CCCC',
        duration: 500
      })
      .add({
        targets: 'body',
        backgroundColor: '#33CCCC',
        duration: 500
      })

    let yellowSmile = document.getElementById("yo")
    yellowSmile.onclick = changeColorBacground.play

    let pullCandyWrapper = anime({
      targets: '.candy_wrapper',
      direction: 'alternate',
      width: '200%',
      autoplay: false
    })
    let candyWrapper = document.getElementById("candy")
    candyWrapper.onclick = pullCandyWrapper.play


    let scrollRight = anime({
      targets: '#moveMe',
      translateX: ['-60vw', '65vw'],
      direction: 'alternate',
      duration: 6000,
      easing: 'linear',
      delay: 800,
      loop: true,
      autoplay: true
    })

    let runPatch = anime({
      targets: '.patch',
      translateX: '60vw',
      direction: 'alternate',
      easing: 'steps(5)',
      autoplay: false
    })
    let patch = document.getElementById("patchik")
    patch.onclick = runPatch.play

function changeImageGreenSmile() {
  let greenSmile = document.getElementByClassName('smile_green')
}

function fixCells() {
  let cell = document.getElementByClassName('cell')
}

function scrollMovingFras() {
 document.getElementById('666').scrollLeft = anime.random(0, 400)
 setInterval(randomScroll, 1000);
}

let btnImg = document.querySelector('.coloring')
btnImg.onclick = function(e) {
 btnImg.style.display = 'none'
 let imgSec = document.querySelector('.coloring_after')
  imgSec.style.display = 'block'
}

let changeYes = document.querySelector('.yes')
changeYes.onclick = function() {
 changeYes.style.display = 'none'
 let no = document.querySelector('.no')
  no.style.display = 'block'
}

let changeNo = document.querySelector('.no')
changeNo.onclick = function() {
 changeNo.style.display = 'none'
 let yes = document.querySelector('.yes')
  yes.style.display = 'block'
}


let smileRectangleSmile = anime({
  targets: '.rectangle_smile_smile',
  translateY: [0, 0],
  rotate: 185,
  autoplay: false,
  duration: 1000
})

let greenRectangle = document.querySelector('.rectangle_smile_man')
greenRectangle.onclick = smileRectangleSmile.play

let changeSmileTriangle = document.querySelector('.smile_green')
changeSmileTriangle.oneclick = function() {
  changeSmileTriangle.style.display = 'none'
  let changeSun = document.querySelector('.sun')
  changeSun.style.display = 'block'
}

let changeBlueTriangle = document.querySelector('.smile_triangle')
changeBlueTriangle.onclick = function(e) {
 changeBlueTriangle.style.display = 'none'
 let imgSecond = document.querySelector('.angry')
  imgSecond.style.display = 'block'
}


/*let moveAngry = anime({
  targets: '.angry',
  translateX: ['-20vw', '5vw'],
  rotate: [0, 180],
  duration: 1000,
  loop: true,
  direction: 'alternate'
})
*/



/*let fallFraseAboutHappiness = anime({
  targets: '.about_happines_phrase_odd',
  rotate: [-15, 45],
  translateY: [0, '70vh'],
  direction: 'alternate',
  duration: 3000,
  autoplay: false
})

let blockAboutHappiness = document.querySelector('.about_happines_phrase_odd')
blockAboutHappiness.oneclick = fallFraseAboutHappiness.play*/


/*let stopMovingFrase = anime({
  targets: '#moveMe',
  translateX: [0, 0],
  loop: true,
  autoplay: false
})

let blockOfMovingFrase = document.querySelector('.moving_phrase_rectangle')
blockOfMovingFrase.oneclick = stopMovingFrase.play */
