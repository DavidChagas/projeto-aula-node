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
}

module.exports = livroDao;