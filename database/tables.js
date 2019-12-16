class Tables {
    init (connection) {
        this.connection = connection
        this.createCatalogs()
        this.createCollections()
        this.createDiscs()
    }

    createCatalogs() {
        const sql = 'CREATE TABLE IF NOT EXISTS Catalogs ( id int NOT NULL AUTO_INCREMENT, name varchar(100) NOT NULL, description varchar(255), PRIMARY KEY(id))'

        this.connection.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Catalogs table successfully created')
            }
        })
    }

    createCollections() {
        const sql = 'CREATE TABLE IF NOT EXISTS Collections ( id int NOT NULL AUTO_INCREMENT, idCatalog int NOT NULL, name varchar(100) NOT NULL, description varchar(255), PRIMARY KEY(id), FOREIGN KEY(idCatalog) REFERENCES Catalogs (id))'
        this.connection.query(sql, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Collections table successfully created')
            }
        })
    }

    createDiscs() {
        const sql = 'CREATE TABLE IF NOT EXISTS Discs ( id int NOT NULL AUTO_INCREMENT, idCollection int, title varchar(100) NOT NULL, singer varchar(255) NOT NULL, PRIMARY KEY(id),FOREIGN KEY(idCollection) REFERENCES Collections (id))'
    
        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            } else {
                console.log('Discs table successfully created')
            }
        })
    }
}

module.exports = new Tables