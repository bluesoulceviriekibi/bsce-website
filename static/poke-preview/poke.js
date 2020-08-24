function yazdir () { // eslint-disable-line no-unused-vars
  let input = window.prompt('Metni giriniz:')
  input = input.replace(/\\n/gi, '<br>').replace(/\\r/gi, '<br><br><br>').replace(/\\l/gi, '⤵<br>')
  console.log(input)
  document.getElementById('textbox').innerHTML = input
}
function tasmaAcik () { // eslint-disable-line no-unused-vars
  document.getElementById('textbox').style.width = '100vw'
  document.getElementById('textbox').style.border = '0px'
}
function tasmaKapali () { // eslint-disable-line no-unused-vars
  document.getElementById('textbox').style.width = '875px'
  document.getElementById('textbox').style.border = '1px dotted rgb(131, 131, 131)'
}
