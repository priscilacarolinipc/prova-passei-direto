const connection = require('../database/connection')
class Catalog {
    add(catalog, res) {
        const sql = 'INSERT INTO Catalogs SET ?'

        connection.query(sql, catalog, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(catalog)
            }
        })
    }

    list(res) {
        const sql = 'SELECT * FROM Catalogs'

        connection.query(sql, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    findById(id, res) {
        const sql = `SELECT * FROM Catalogs WHERE id=${id}`
        
        connection.query(sql, (error , result) => {
            const catalog = result[0];
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(catalog)
            }
        })
    }

    update(id, values, res) {
        const sql = `UPDATE Catalogs SET ? WHERE id= ?`
        connection.query(sql, [values, id], (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                this.findById(id,res)
            }
        })
    }

    delete(id, res) {
        const sql = `DELETE FROM Catalogs WHERE id= ?`
        connection.query(sql, id, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports =  new Catalog
