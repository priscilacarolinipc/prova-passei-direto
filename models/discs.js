const connection = require('../database/connection')
class Disc {
    add(disc, res) {
        const discIsValid = disc.length >= 1
        const validations = [
            {
                name: 'disc',
                valid: discIsValid,
                msg: 'Deve ter ao menos um parâmetro para ser inserido'
            }
        ]
        const error = validations.filter(rule => !rule.valid)
        const hasError = error.length
        if(hasError) {
            res.status(400).json(error)
        } else {
            const sql = 'INSERT INTO Discs SET ?'
            connection.query(sql, disc, (error , result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(201).json(disc)
                }
            })
        }
    }

    list(res) {
        const sql = 'SELECT * FROM Discs'
        connection.query(sql, (error , result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    findById(id, res) {
        const idIsValid = id > 0
        const validations = [
            {
                name: 'id',
                valid: idIsValid,
                msg: 'Id deve ser maior que 0'
            }
        ]
        const error = validations.filter(rule => !rule.valid)
        const hasError = error.length
        if(hasError) {
            res.status(400).json(error)
        } else {
            const sql = `SELECT * FROM Discs WHERE id=${id}`
            connection.query(sql, (error , result) => {
                const disc = result[0];
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(200).json(disc)
                }
            })
        }
    }

    findByName(title, res) {
        const titleIsValid = title.length >= 3
        const validations = [
            {
                name: 'title',
                valid: titleIsValid,
                msg: 'Título deve ter ao menos 3 caracteres'
            }
        ]
        const error = validations.filter(rule => !rule.valid)
        const hasError = error.length
        if(hasError) {
            res.status(400).json(error)
        } else {
            const sql = `SELECT * FROM Discs WHERE title like '%${title}%'`
            connection.query(sql, (error , result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(200).json(result)
                }
            })
        }
    }

    update(id, values, res) {
        const idIsValid = id > 0
        const valuesIsValid = values.length >= 1
        const validations = [
            {
                name: 'id',
                valid: idIsValid,
                msg: 'Id deve ser maior que 0'
            },
            {
                name: 'values',
                valid: valuesIsValid,
                msg: 'Deve ter ao menos um parâmetro para ser atualizado'
            }
        ]
        const error = validations.filter(rule => !rule.valid)
        const hasError = error.length
        if(hasError) {
            res.status(400).json(error)
        } else {
            const sql = `UPDATE Discs SET ? WHERE id= ?`
            connection.query(sql, [values, id], (error , result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    this.findById(id,res)
                }
            })
        }
    }

    removeCollection(id, res) {
        const idIsValid = id > 0
        const validations = [
            {
                name: 'id',
                valid: idIsValid,
                msg: 'Id deve ser maior que 0'
            }
        ]
        const error = validations.filter(rule => !rule.valid)
        const hasError = error.length
        if(hasError) {
            res.status(400).json(error)
        } else {
            const sql = `UPDATE Discs SET idCollection = null WHERE id= ?`
            connection.query(sql, id, (error , result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    this.findById(id,res)
                }
            })
        }
    }

    delete(id, res) {
        const idIsValid = id > 0
        const validations = [
            {
                name: 'id',
                valid: idIsValid,
                msg: 'Id deve ser maior que 0'
            }
        ]
        const error = validations.filter(rule => !rule.valid)
        const hasError = error.length
        if(hasError) {
            res.status(400).json(error)
        } else {
            const sql = `DELETE FROM Discs WHERE id= ?`
            connection.query(sql, id, (error , result) => {
                if (error) {
                    res.status(400).json(error)
                } else {
                    res.status(200).json({id})
                }
            })
        }
    }
}

module.exports =  new Disc
