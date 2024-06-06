var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books')
    .then(dados => {
      res.render('index', { books: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro });
    });
});


router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:17000/books/' + req.params.id)
    .then(dados => {
      res.render('livro', { livro: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro });
    });
}
);



module.exports = router;
