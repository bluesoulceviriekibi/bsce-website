// coded by omerakgoz34 :)

// WebSite modules
const createError = require('http-errors')
const express = require('express')
// const subdomain = require('express-subdomain')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const http = require('http')

const pagesRouter = require('./routes/pages')
const assetsRouter = require('./routes/assets')

const exp = express()

// view engine setup
exp.set('views', 'views')
exp.set('view engine', 'pug')

exp.use(logger('dev'))
exp.use(express.json())
exp.use(express.urlencoded({ extended: false }))
exp.use(cookieParser())
exp.use(express.static('public'))

exp.use('/', pagesRouter)
exp.use('/', assetsRouter)

// Catch 404
exp.use(function (req, res, next) {
  next(createError(404))
})

// Error handler
exp.use(function (err, req, res, next) {
  res.status(err.status || 500)
  switch (err.status) {
    case 400: err.message = 'Geçersiz İstek'; break
    case 401: err.message = 'Doğrulama Gerekli'; break
    case 403: err.message = 'Yasaklanmış'; break
    case 404: err.message = 'Sayfa Bulunamadı'; break
    case 500: err.message = 'Sunucu Hatası'; break
    case 503: err.message = 'Servis Dışı'; break
  }
  res.render('error', { title: `HATA: ${err.status} (${err.message}) | `, iconType: 'png', icon: 'heart.png', themeColor: 'rgb(255, 0, 0)', bodyAttr: '', errorCode: err.status, errorMsg: err.message })
})

const port = normalizePort(process.env.PORT || process.env.port || 8080 || 3000)
exp.set('port', port)
const server = http.createServer(exp)

server.listen(port)
server.on('error', onError)

function normalizePort (val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

console.log('WebSite started.')
console.log(`${port} numaralı port üzerinde aktif :3`)

let rebootTimer = 360
setInterval(async () => {
  if (rebootTimer <= 0) {
    process.exit(0)
  } else rebootTimer = rebootTimer - 1
}, 60000)
