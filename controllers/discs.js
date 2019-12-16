const Disc = require('../models/discs')
module.exports = app => {
    app.get('/discs', (req, res) => {
        Disc.list(res)
    })

    app.get('/discs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Disc.findById(id,res)
    })

    app.post('/discs', (req, res) => {
        const catalog = req.body
        Disc.add(catalog, res)
    })

    app.put('/discs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Disc.update(id,values,res)
    })

    app.put('/discs/remove-collection/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Disc.removeCollection(id,res)
    })

    app.delete('/discs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Disc.delete(id,res)
    })
}