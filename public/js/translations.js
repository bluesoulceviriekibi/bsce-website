// coded by omerakgoz34 :)

const typeGame = document.getElementById('type-game')
const typeVideo = document.getElementById('type-video')
const game = document.getElementsByClassName('game')
const video = document.getElementsByClassName('video')

let timeline

typeVideo.onclick = function () {
  // eslint-disable-next-line no-undef
  timeline = anime.timeline({
    easing: 'cubicBezier(0.165, 0.840, 0.440, 1.000)',
    duration: 1000
  })

  timeline.add({
    begin: function () {
      document.body.style.overflowX = 'hidden'
      typeVideo.style.pointerEvents = 'none'
    },
    targets: '.game',
    rotateZ: ['0deg', '-360deg'],
    scale: [1, 0],
    duration: 500,
    complete: function () {
      for (var i = 0; i < video.length; i++) {
        video[i].style.display = 'initial'
        typeVideo.style.color = 'yellow'
      }
    }
  })
  timeline.add({
    begin: function () {
      for (var i = 0; i < game.length; i++) {
        game[i].style.display = 'none'
        typeGame.style.color = 'white'
      }
    },
    targets: '.video',
    rotateZ: ['-360deg', '0deg'],
    scale: [0, 1],
    duration: 500,
    complete: function () {
      document.body.style.overflowX = 'initial'
      typeGame.style.pointerEvents = 'initial'
    }
  })
}

typeGame.onclick = function () {
  // eslint-disable-next-line no-undef
  timeline = anime.timeline({
    easing: 'cubicBezier(0.165, 0.840, 0.440, 1.000)',
    duration: 1000
  })

  timeline.add({
    begin: function () {
      document.body.style.overflowX = 'hidden'
      typeGame.style.pointerEvents = 'none'
    },
    targets: '.video',
    rotateZ: ['0deg', '-360deg'],
    scale: [1, 0],
    duration: 500,
    complete: function () {
      for (var i = 0; i < game.length; i++) {
        game[i].style.display = 'initial'
        typeGame.style.color = 'yellow'
      }
    }
  })
  timeline.add({
    begin: function () {
      for (var i = 0; i < video.length; i++) {
        video[i].style.display = 'none'
        typeVideo.style.color = 'white'
      }
    },
    targets: '.game',
    rotateZ: ['-360deg', '0deg'],
    scale: [0, 1],
    duration: 500,
    complete: function () {
      document.body.style.overflowX = 'initial'
      typeVideo.style.pointerEvents = 'initial'
    }
  })
}

// eslint-disable-next-line no-unused-vars
function openInNewTab (url, delay) {
  setTimeout(() => {
    window.open(url, '_blank').focus()
  }, delay)
}
