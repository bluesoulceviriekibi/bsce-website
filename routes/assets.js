// coded by omerakgoz34 :)

const express = require('express')
const router = express.Router()
const assets = 'https://storage.cloud.google.com/omerakgoz34.appspot.com/assets'

router.get('/assets/asd.txt', function (req, res, next) {
  res.download(`${assets}/asd.txt`, function (err) { if (err) console.error(err) })
})

router.get('/assets/deltarune/Deltarune_Turkce_v2.6_Yukleyici_BlueSoul_Ceviri_Ekibi.exe', function (req, res, next) {
  res.download(`${assets}/deltarune/Deltarune_Turkce_v2.6_Yukleyici_BlueSoul_Ceviri_Ekibi.exe`, function (err) { if (err) console.error(err) })
})

router.get('/assets/deltarune/Deltarune_Turkce_v2.6_BlueSoul_Ceviri_Ekibi.zip', function (req, res, next) {
  res.download(`${assets}/deltarune/Deltarune_Turkce_v2.6_BlueSoul_Ceviri_Ekibi.zip`, function (err) { if (err) console.error(err) })
})

router.get('/assets/escaped_chasm/Escaped_Chasm_Turkce_v1.0_Yukleyici_BlueSoul_Ceviri_Ekibi.exe', function (req, res, next) {
  res.download(`${assets}/escaped_chasm/Escaped_Chasm_Turkce_v1.0_Yukleyici_BlueSoul_Ceviri_Ekibi.exe`, function (err) { if (err) console.error(err) })
})

router.get('/assets/escaped_chasm/Escaped_Chasm_Turkce_v1.0_7Zip_BlueSoul_Ceviri_Ekibi.exe', function (req, res, next) {
  res.download(`${assets}/escaped_chasm/Escaped_Chasm_Turkce_v1.0_7Zip_BlueSoul_Ceviri_Ekibi.exe`, function (err) { if (err) console.error(err) })
})

router.get('/assets/video/noragami_aragoto_op_turkce.mp4', function (req, res, next) {
  res.sendFile(`${assets}/video/noragami_aragoto_op_turkce.mp4`, function (err) { if (err) console.error(err) })
})

router.get('/assets/video/steins_gate_0_last_game_turkce.mp4', function (req, res, next) {
  res.download(`${assets}/video/steins_gate_0_last_game_turkce.mp4`, function (err) { if (err) console.error(err) })
})

module.exports = router
