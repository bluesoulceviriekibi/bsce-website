// coded by omerakgoz34 :)

// eslint-disable-next-line no-unused-vars
function setPage (page, delay) {
  setTimeout(() => {
    switch (page) {
      case '/':
        window.location.assign('/')
        break

      case 'translations':
        window.location.assign('/ceviriler')
        break

      case 'about_us':
        window.location.assign('/hakkimizda')
        break

      case 'escaped_chasm':
        window.location.assign('/ceviri/escaped_chasm')
        break

      case 'deltarune':
        window.location.assign('/ceviri/deltarune')
        break
    }
  }, delay)
}
