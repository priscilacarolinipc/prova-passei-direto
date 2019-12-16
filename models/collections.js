const connection = require('../database/connection')

class Collection {
    add(catalog, res) {
        const sql = 'INSERT INTO Collections SET ?'

        connection.query(sql, catalog, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(catalog)
            }
        })
    }

    list(res) {
        const sql = 'SELECT * FROM Collections'

        connection.query(sql, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    findById(id, res) {
        const sql = `SELECT * FROM Collections WHERE id=${id}`
        
        connection.query(sql, (error , result) => {
            const catalog = result[0];
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(catalog)
            }
        })
    }

    findByIdWithDiscs(id, res) {
        const sql = `SELECT c.id as idCollection, c.idCatalog, c.name, c.description, d.id as idDisc, d.title, d.singer FROM Collections as c left join Discs as d on c.id = d.idCollection WHERE c.id=${id} group by idCollection,idDisc`
        
        connection.query(sql, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }


    update(id, values, res) {
        const sql = `UPDATE Collections SET ? WHERE id= ?`
        connection.query(sql, [values, id], (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                this.findById(id,res)
            }
        })
    }

    delete(id, res) {
        const sql = `DELETE FROM Collections WHERE id= ?`
        connection.query(sql, id, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports =  new Collection
