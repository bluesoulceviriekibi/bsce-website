// coded by omerakgoz34 :)

const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', { title: '', iconType: 'jpeg', icon: 'bsce.jpg', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)'", img: 'bsce.jpg', imgType: 'jpg', imgWidth: '288', imgHeight: '288', pageURL: '', desc: 'Her şeyi çeviren ekip!' })
})

router.get('/ceviriler', function (req, res, next) {
  res.render('translations', { title: 'Çeviriler | ', iconType: 'jpeg', icon: 'bsce.jpg', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)'", img: 'bsce.jpg', imgType: 'jpg', imgWidth: '288', imgHeight: '288', pageURL: '/ceviriler', desc: 'Çevirilerimiz!' })
})

router.get('/hakkimizda', function (req, res, next) {
  res.render('about_us', { title: 'Hakkımızda | ', iconType: 'jpeg', icon: 'bsce.jpg', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)'", img: 'bsce.jpg', imgType: 'jpg', imgWidth: '288', imgHeight: '288', pageURL: '/hakkimizda', desc: 'Hakkımızda :3' })
})

router.get('/ceviri/deltarune', function (req, res, next) {
  res.render('translations/deltarune', { title: 'Deltarune Türkçe | ', iconType: 'png', icon: 'deltarune_icon.png', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)' onkeydown='ControlKey(event)'", img: 'deltarune.gif', imgType: 'gif', imgWidth: '1280', imgHeight: '1040', pageURL: '/ceviri/deltarune', desc: 'Deltarune Türkçe - v2.6 - 02.04.2019' })
})

router.get('/ceviri/escaped_chasm', function (req, res, next) {
  res.render('translations/escaped_chasm', { title: 'Escaped Chasm Türkçe | ', iconType: 'png', icon: 'escaped_chasm_icon.png', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)'", img: 'escaped_chasm.png', imgType: 'png', imgWidth: '633', imgHeight: '484', pageURL: '/ceviri/escaped_chasm', desc: 'Deltarune Türkçe - v1 - 03.06.2019' })
})

router.get('/ceviri/noragami_aragoto_op', function (req, res, next) {
  res.render('video', { title: 'Noragami Aragoto OP Türkçe | ', iconType: 'jpeg', icon: 'bsce.jpg', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)'", video: 'https://drive.google.com/file/d/1pUYyCRroSbXFe05ISCikazA0fFj3NW4c/preview', videoTitle: 'Noragami Aragoto OP Türkçe', img: 'noragami_aragoto_op.jpg', imgType: 'jpg', imgWidth: '739', imgHeight: '415', pageURL: '/ceviri/noragami_aragoto_op', desc: 'Noragami Aragoto OP Türkçe İzle' })
})

router.get('/ceviri/steins_gate_0_last_game', function (req, res, next) {
  res.render('video', { title: 'Steins;Gate 0 Last Game Türkçe | ', iconType: 'jpeg', icon: 'bsce.jpg', themeColor: '#0F3280', bodyAttr: " onload='startStars(1000)'", video: 'https://drive.google.com/file/d/1x5VpAYN7PWfhzM8BD-uG6mouDkzvnBuh/preview', videoTitle: 'Steins;Gate 0 Last Game Türkçe', img: '', imgType: 'jpg', imgWidth: '739', imgHeight: '415', pageURL: '/ceviri/steins_gate_0_last_game', desc: 'Steins;Gate 0 Last Game Türkçe İzle' })
})

router.get('/poke_preview', function (req, res, next) {
  res.render('poke_preview')
})

module.exports = router
