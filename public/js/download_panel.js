// coded by omerakgoz34 :)

const downloadPanel = document.getElementById('download-panel')

// eslint-disable-next-line no-unused-vars
function openDownloadPanel () {
  downloadPanel.style.display = 'initial'
  document.body.style.overflow = 'hidden'
}

function closeDownloadPanel () {
  downloadPanel.style.display = 'none'
  document.body.style.overflow = 'initial'
}

// eslint-disable-next-line no-unused-vars
function ControlKey (event) {
  if (event.keyCode === 27) {
    if (downloadPanel.style.display !== 'none') {
      closeDownloadPanel()
    }
  }
}

// eslint-disable-next-line no-unused-vars
function startDownload (section, delay) {
  switch (section) {
    case 'deltarune-windows':
      setTimeout(() => {
        window.location.assign('https://drive.google.com/file/d/1oFmptmGKv6svYlSgZO2kWkvlPNvVaRYq/view?usp=sharing')
      }, delay)
      break

    case 'deltarune-windows-alt':
      setTimeout(() => {
        window.location.assign('https://drive.google.com/file/d/1clbNFw3bSUlMjyTIzTEaoKbUdX2VgZLa/view?usp=sharing')
      }, delay)
      break

    case 'escaped-chasm-windows':
      setTimeout(() => {
        window.location.assign('https://drive.google.com/file/d/12VG7uJ5_2i2P636oB1VdlU8TBj9oeFUL/view?usp=sharing')
      }, delay)
      break

    case 'escaped-chasm-windows-alt':
      setTimeout(() => {
        window.location.assign('https://drive.google.com/file/d/1RTdcN5vVtLdDPdl8Ad56hQoEBavfNYry/view?usp=sharing')
      }, delay)
      break
  }
}
