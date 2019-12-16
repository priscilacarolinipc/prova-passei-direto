const Collection = require('../models/collections')
module.exports = app => {
    app.get('/collections', (req, res) => {
        Collection.list(res)
    })

    app.get('/collections/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Collection.findById(id,res)
    })

    app.get('/collections/:id/discs', (req, res) => {
        const id = parseInt(req.params.id)
        Collection.findByIdWithDiscs(id,res)
    })

    app.post('/collections', (req, res) => {
        const catalog = req.body
        Collection.add(catalog, res)
    })

    app.put('/collections/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Collection.update(id,values,res)
    })

    app.delete('/catalogs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Collection.delete(id,res)
    })
}