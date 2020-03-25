

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.body.style.pointerEvents = 'none'
    let modal = document.querySelector('.modal')
    modal.style.opacity = 1
    modal.style.pointerEvents = 'auto'
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    let modalClose = document.querySelector('.modal')
    modalClose.style.opacity = 0
    document.body.style.pointerEvents = 'auto'
  });
});



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
  easing: 'easeInOutCubic',
  autoplay: true
})

fallAboutMemorise
  .add({
    targets: '.about_memorise',
    duration: 100,
    rotate: 54,
  })
  .add({
    translateY: ['-200vh', 0],
    targets: '.about_memorise',
    duration: 350
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
      autoplay: false
    })

    changeColorBacground
      .add({
        targets: 'body',
        backgroundColor: '#000033',
        duration: 200
      })
      .add({
        targets: 'body',
        backgroundColor: '#003366',
        duration: 200
      })

      .add({
        targets: 'body',
        backgroundColor: '#3366CC',
        duration: 200
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
        backgroundColor: '#99FFFF',
        duration: 3000
      })

let yellowSmile = document.getElementById("yo")
yellowSmile.onclick = changeColorBacground.play



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
let patch = document.querySelector('.patch')
patch.onclick = runPatch.play

function fixCells() {
  let cell = document.getElementByClassName('cell')
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

let blinkingOne = anime.timeline ({
  targets: '#oval_one',
  autoplay: true,
  loop: true,
  duration: 2000,
  direction: 'alternate'
})

blinkingOne
  .add({
    targets: '#oval_one',
    duration: 500,
    opacity: 0,
  })
  .add({
    targets: '#oval_one',
    duration: 500,
    opacity: 1,
  })
  .add({
    targets: '#oval_one',
    duration: 500,
    opacity: 0,
  })
  .add({
    targets: '#oval_one',
    duration: 500,
    opacity: 1,
  })
  .add({
    targets: '#oval_one',
    duration: 500,
    opacity: 0,
  })

  let blinkingTwo = anime.timeline ({
    targets: '#oval_two',
    autoplay: true,
    loop: true,
    delay: 200,
    direction: 'alternate'
  })

  blinkingTwo
    .add({
      targets: '#oval_two',
      duration: 500,
      opacity: 0,
    })
    .add({
      targets: '#oval_two',
      duration: 500,
      opacity: 1,
    })
    .add({
      targets: '#oval_two',
      duration: 500,
      opacity: 0,
    })
    .add({
      targets: '#oval_two',
      duration: 500,
      opacity: 1,
    })
    .add({
      targets: '#oval_two',
      duration: 500,
      opacity: 0,
    })

    let blinkingThree = anime.timeline ({
      targets: '#oval_three',
      autoplay: true,
      loop: true,
      delay: 400,
      direction: 'alternate'
    })

    blinkingThree
      .add({
        targets: '#oval_three',
        duration: 500,
        opacity: 0,
      })
      .add({
        targets: '#oval_three',
        duration: 500,
        opacity: 1,
      })
      .add({
        targets: '#oval_three',
        duration: 500,
        opacity: 0,
      })
      .add({
        targets: '#oval_three',
        duration: 500,
        opacity: 1,
      })
      .add({
        targets: '#oval_three',
        duration: 500,
        opacity: 0,
      })




let greenRectangle = document.querySelector('.rectangle_smile_man')
greenRectangle.onclick = smileRectangleSmile.play


let changeGreenSmile = document.querySelector('.smile_green')
changeGreenSmile.onclick = function(j) {
  changeGreenSmile.style.opacity = 0
  let sun = document.querySelector('.sun')
  sun.style.display = 'block'
}

let changeBear = document.querySelector('.smile_bear')
changeBear.onclick = function(a) {
  changeBear.style.opacity = 0
  let sun = document.querySelector('.demon')
  sun.style.display = 'block'
}

let changeBlueTriangle = document.querySelector('.smile_triangle')
changeBlueTriangle.onclick = function(e) {
 changeBlueTriangle.style.opacity = 0
 let imgSecond = document.querySelector('.angry')
  imgSecond.style.display = 'block'
}

let wowAnimate = anime.timeline({
  targets: '.wow',
  direction: 'alternate',
  autoplay: true,
  loop: true
})

wowAnimate
  .add({
    targets: '.wow',
    opacity: 0,
    duration: 200
  })
  .add({
    targets: '.wow',
    opacity: 1,
    duration: 200
  })
  .add({
    targets: '.wow',
    opacity: 0,
    duration: 200
  })

  let oopsAnimate = anime.timeline({
    targets: '.oops',
    direction: 'alternate',
    autoplay: true,
    loop: true
  })

  oopsAnimate
    .add({
      targets: '.oops',
      opacity: 1,
      duration: 200
    })
    .add({
      targets: '.oops',
      opacity: 0,
      duration: 200
    })
    .add({
      targets: '.oops',
      opacity: 1,
      duration: 200
    })


let changingSizeOfEyes = anime.timeline({
  targets: '.smile_green_eye',
  autoplay: true,
  loop: true,
  direction: 'alternate'
})

changingSizeOfEyes
  .add({
    targets: '.smile_green_eye',
    backgroundSize: '6vw',
    duration: 400
  })
  .add({
    targets: '.smile_green_eye',
    backgroundSize: '8vw',
    duration: 400
  })
  .add({
    targets: '.smile_green_eye',
    backgroundSize: '4vw',
    duration: 400,
    translateY: '2vw',
    translateX: '1vw'
  })

 let changeSizeOfNumber = anime({
    targets: '#number',
    fontSize: '70vw',
    translateX: '-36vw',
    translateY: '-20vw',
    direction: 'alternate',
    duration: 400,
    autoplay: false
  })

let number = document.getElementById('numberDiv')
number.onclick = changeSizeOfNumber.play



let increaseWidthOfStreet = anime({
  targets: '#street',
  width: '60vw',
  direction: 'alternate',
  autoplay: false,
})

let street = document.getElementById('street')
street.onclick = increaseWidthOfStreet.play

let changeColorOfBody = anime.timeline({
  targets: 'body',
  direction: 'alternate',
  autoplay: false
})

changeColorOfBody
  .add({
    targets: 'body',
    backgroundColor: '#330033',
    duration: 500
  })
  .add({
    targets: 'body',
    backgroundColor: '#6600CC',
    duration: 500
  })
  .add({
    targets: 'body',
    backgroundColor: '#9933CC',
    duration: 500
  })
  .add({
    targets: 'body',
    backgroundColor: '#CC00FF',
    duration: 500
  })
  .add({
    targets: 'body',
    backgroundColor: '#FF66FF',
    duration: 1000
  })
  .add({
    targets: 'body',
    backgroundColor: '#FF99FF',
    duration: 2000
  })


let button = document.querySelector('.button')
button.onclick = changeColorOfBody.play

let increaseWidthCandyWrapper = anime({
  targets: '#candy',
  backgroundSize: '100vw',
  duration: 800,
  width: '100vw',
  height: '100vw',
  translateX: '-40vw',
  translateY: '-30vw',
  direction: 'alternate',
  autoplay: false
})

let increaseWidth = document.getElementById('candy')
increaseWidth.onclick = increaseWidthCandyWrapper.play

let moveSmallEye = anime.timeline({
  targets: '#smallEye',
  autoplay: true,
  loop: true,
  alternete: true
})

moveSmallEye
  .add({
    targets: '#smallEye',
    translateX: [0,'2vw'],
    duration: 400,
  })
  .add({
    targets: '#smallEye',
    translateX: ['2vw', '-1vw'],
    duration: 400,
  })

  let bigEye = anime.timeline({
    targets: '#bigEye',
    autoplay: true,
    loop: true,
    alternete: true
  })

  bigEye
    .add({
      targets: '#bigEye',
      translateX: [0, '-2vw'],
      duration: 400,
    })
    .add({
      targets: '#sbigEye',
      translateX: ['-2vw', '2vw'],
      duration: 400,
    })



let changeImgOfKing = document.querySelector('.smile_king')
changeImgOfKing.onclick = function() {
  changeImgOfKing.style.opacity = 0
  let sad = document.querySelector('.sad')
  sad.style.display = 'block'
}

function addHeart(amount) {
  let count = 25
  while (amount < count) {

    let newImg = document.createElement('img')
    newImg.classList.add('heart_pink')
    heartWrapper.append(newImg)
    count +=1
  }
}
