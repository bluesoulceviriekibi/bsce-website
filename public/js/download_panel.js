// coded by omerakgoz34 :)

const downloadPanel = document.getElementById('download-panel')
const downloadPanelWindow = document.getElementById('download-panel-window')

// eslint-disable-next-line no-unused-vars
function openDownloadPanel () {
  // eslint-disable-next-line no-undef
  anime({
    begin: function () {
      downloadPanel.style.display = 'initial'
      document.body.style.overflow = 'hidden'
    },
    targets: downloadPanel,
    duration: 400,
    easing: 'easeInOutCubic',
    background: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
  })

  // eslint-disable-next-line no-undef
  anime({
    targets: downloadPanelWindow,
    duration: 400,
    easing: 'linear',
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotateZ: ['-360deg', '0deg'],
    scale: ['0', '1'],
    opacity: ['0', '1']
  })
}

function closeDownloadPanel () {
  // eslint-disable-next-line no-undef
  anime({
    targets: downloadPanel,
    duration: 400,
    easing: 'easeInOutCubic',
    background: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)'],
    complete: function () {
      downloadPanel.style.display = 'none'
      document.body.style.overflow = 'initial'
    }
  })

  // eslint-disable-next-line no-undef
  anime({
    targets: downloadPanelWindow,
    duration: 400,
    easing: 'linear',
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    rotateZ: ['0deg', '-360deg'],
    scale: ['1', '0'],
    opacity: ['1', '0']
  })
}

// eslint-disable-next-line no-unused-vars
function ControlKey (event) {
  if (event.keyCode === 27) {
    if (downloadPanel.style.display !== 'none') {
      closeDownloadPanel()
    }
  }
}

function openInNewTab (url, delay) {
  setTimeout(() => {
    window.open(url, '_blank').focus()
  }, delay)
}

// eslint-disable-next-line no-unused-vars
function startDownload (section, delay) {
  switch (section) {
    case 'deltarune-windows':
      setTimeout(() => {
        openInNewTab('https://drive.google.com/file/d/1oFmptmGKv6svYlSgZO2kWkvlPNvVaRYq/view?usp=sharing', '250')
      }, delay)
      break

    case 'deltarune-windows-alt':
      setTimeout(() => {
        openInNewTab('https://drive.google.com/file/d/1clbNFw3bSUlMjyTIzTEaoKbUdX2VgZLa/view?usp=sharing', '250')
      }, delay)
      break

    case 'escaped-chasm-windows':
      setTimeout(() => {
        openInNewTab('https://drive.google.com/file/d/12VG7uJ5_2i2P636oB1VdlU8TBj9oeFUL/view?usp=sharing', '250')
      }, delay)
      break

    case 'escaped-chasm-windows-alt':
      setTimeout(() => {
        openInNewTab('https://drive.google.com/file/d/1RTdcN5vVtLdDPdl8Ad56hQoEBavfNYry/view?usp=sharing', '250')
      }, delay)
      break
    case 'the-aftermath-windows':
      setTimeout(() => {
        openInNewTab('https://drive.google.com/file/d/1HEaWCrQBeayVfNybCFpqL2CY8Hr3XZZW/view?usp=sharing', '250')
      }, delay)
      break
  }
}
