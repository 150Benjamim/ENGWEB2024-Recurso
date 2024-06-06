var express = require('express');
var router = express.Router();
var livros = require('../controllers/livros');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.query.charater) {
        livros.findByCharacter(req.query.charater)
            .then(livros => res.json(livros))
            .catch(err => res.status(500).json({ error: err.message }));
    } else if (req.query.genre) {
        livros.findByGenre(req.query.genre)
            .then(livros => res.json(livros))
            .catch(err => res.status(500).json({ error: err.message }));
    } else {
        livros.listarTudo()
            .then(livros => res.json(livros))
            .catch(err => res.status(500).json({ error: err.message }));
    }
});

router.get('/genres', function(req, res, next) {
    livros.listarGenres()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.get('/characters', function(req, res, next) {
    livros.listarCharacters()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.get('/:id', function(req, res, next) {
    livros.findById(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res, next) {
    livros.addLivro(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
    livros.apagaLivro(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res) {
    livros.updateLivro(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
});


module.exports = router;