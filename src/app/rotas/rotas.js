const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');


module.exports = (app) =>{
    app.get('/livros', function(req, resp){

        const livroDao = new LivroDao(db);

        livroDao.listar().then(res =>{
            resp.marko(
                require('../views/livros/lista/lista.marko'),{ livros: res }
            )
        },err =>{
            console.log('err', err);
        })

        // livroDao.listar((err, res) =>{
        //     resp.marko(
        //         require('../views/livros/lista/lista.marko'),{ livros: res }
        //     )
        // })
    })
};