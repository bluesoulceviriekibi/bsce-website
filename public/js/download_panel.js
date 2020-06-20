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

function openInNewTab (url) {
  window.open(url, '_blank').focus()
}

// eslint-disable-next-line no-unused-vars
function startDownload (section, delay) {
  switch (section) {
    case 'deltarune-windows':
      setTimeout(() => {
        openInNewTab('https://github.com/bluesoulceviriekibi/cdn/releases/download/deltarune_v2.6/Deltarune-TR_v2.6_Yukleyici_BlueSoul_Ceviri_Ekibi.exe', '250')
      }, delay)
      break

    case 'deltarune-windows-alt':
      setTimeout(() => {
        openInNewTab('https://github.com/bluesoulceviriekibi/cdn/releases/download/deltarune_v2.6/Deltarune-TR_v2.6_BlueSoul_Ceviri_Ekibi.zip', '250')
      }, delay)
      break

    case 'escaped-chasm-windows':
      setTimeout(() => {
        openInNewTab('https://github.com/bluesoulceviriekibi/cdn/releases/download/escaped_chasm_v2/Escaped_Chasm_Turkce_v2_Yukleyici_BlueSoul_Ceviri_Ekibi.exe', '250')
      }, delay)
      break

    case 'the-aftermath-windows':
      setTimeout(() => {
        openInNewTab('https://github.com/bluesoulceviriekibi/cdn/releases/download/the_aftermath/The_Aftermath_Turkce_Oto-Yukleyici_BlueSoul_Ceviri_Ekibi.exe', '250')
      }, delay)
      break
  }
}
