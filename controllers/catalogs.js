const Catalog = require('../models/catalogs')
module.exports = app => {
    app.get('/catalogs', (req, res) => {
        Catalog.list(res)
    })

    app.get('/catalogs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Catalog.findById(id,res)
    })

    app.post('/catalogs', (req, res) => {
        const catalog = req.body
        Catalog.add(catalog, res)
    })

    app.put('/catalogs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Catalog.update(id,values,res)
    })

    app.delete('/catalogs/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Catalog.delete(id,res)
    })
}