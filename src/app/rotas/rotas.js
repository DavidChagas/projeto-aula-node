const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');


module.exports = (app) =>{
    app.get('/', function(req, resp){

        const livroDao = new LivroDao(db);

        livroDao.listar().then(res =>{
            resp.marko( require('../views/livros/lista/lista.marko'),{ livros: res } );
        },err =>{
            console.log('err', err);
        });
    });

    app.get('/livros/form', function(req, resp){
        resp.marko( require('../views/livros/form/form.marko') );
    });

    app.post('/livros', function(req, resp){
        console.log(req.body);
        const livroDao = new LivroDao(db);

        livroDao.adiciona(req.body).then(
            resp.redirect('/')
        ).catch(
            erro => console.log(erro)
        );
    });
};