/* Vrni začetno stran s seznamom lokacij */
module.exports.seznam = function(req, res) {
  res.render('index', { title: 'Seznam lokacij' });
}

/* Vrni začetno stran s seznamom lokacij */
module.exports.podrobnostiLokacije = function(req, res) {
  res.render('index', { title: 'Podrobnosti lokacije' });
}

/* Vrni stran za dodajanje komentarjev */
module.exports.dodajKomentar = function(req, res) {
  res.render('index', { title: 'Dodaj komentar' });
}
