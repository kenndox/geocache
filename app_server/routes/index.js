var express = require('express');
var router = express.Router();
var ctrlOstalo = require('../controllers/ostalo');
var ctrlLokacije= require('../controllers/lokacije')

router.get('/', ctrlLokacije.seznam);
router.get('/lokacija', ctrlLokacije.podrobnostiLokacije);
router.get('/lokacija/komentar/nov', ctrlLokacije.dodajKomentar);
router.get('/informacije', ctrlOstalo.informacije);

module.exports = router;
