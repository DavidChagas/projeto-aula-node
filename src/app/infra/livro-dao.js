class livroDao{

    constructor(db){
        this._db = db;
    }

    listar(){
        return new Promise((resolve, reject) => {
            this._db.all('SELECT * FROM livros', (err, res) =>{
                if(err){
                    return reject('Não foi possível listar os livros');
                }

                return resolve(res);
            });
        })
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.all(`INSERT INTO livros (titulo, preco, descricao) values (?,?,?)`, [livro.titulo, livro.preco, livro.descricao], (err) =>{
                if(err){
                    console.log(err);
                    return reject('Não foi possível adicionar o livro');
                }
                resolve();
            })
            
        })
    }

    buscaPorId(id){

    }

    atualiza(livro){

    }

    remove(id){
        
    }
}

module.exports = livroDao;