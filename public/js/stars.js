// coded by omerakgoz34 :)

const imgStars = 5
const stars = document.getElementById('stars')

// eslint-disable-next-line no-unused-vars
function startStars (delay) {
  setTimeout(() => {
    stars.style.display = 'initial'
    star()
    setInterval(star, 3400)
  }, delay)
}

function star () {
  // eslint-disable-next-line no-undef
  anime({
    targets: '#stars',
    opacity: 0,
    duration: 500,
    easing: 'linear',
    complete: function () {
      stars.innerHTML = ''
      randomStar()
    }
  })
  // random stars
  function randomStar () {
    var starCount = Math.floor(Math.random() * 10) + 15
    for (var i = 0; i < starCount; i++) {
      var x = Math.floor(Math.random() * 99) + 1
      var y = Math.floor(Math.random() * 99) + 1
      appendStar(x, y)
    }
    // eslint-disable-next-line no-undef
    anime({
      targets: '#stars',
      opacity: 1,
      duration: 500,
      easing: 'linear'
    })
  }

  // putting the stars
  function appendStar (x, y) {
    var star = Math.floor(Math.random() * imgStars) + 1
    var delay = Math.floor(Math.random() * 5) + 1
    var starNode = document.createElement('img')
    starNode.setAttribute('src', `/img/stars/star${star}.png`)
    starNode.setAttribute('style', `left: ${x}%; top: ${y}%; animation-delay: ${delay}s`)
    stars.insertBefore(starNode, stars.childNodes[0])
  }
}
