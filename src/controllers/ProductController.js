const mongoose = require('mongoose')
const Product = require('../models/Product')
const { findById, update } = require('../models/Product')

module.exports = {
    async index(req, res) {
        const {page = 1} = req.query
        const products = await Product.paginate({}, {page, limit: 10})

        return res.json(products)
    },
    
    async store(req, res) {
        const {title, description, url} = req.body

        const product = await Product.create({
            title,
            description,
            url
        })

        return res.json(product)
    },

    async show(req, res) {
        
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product)
    },

    async destroy(req,res) {
        const product = await Product.findByIdAndDelete(req.params.id)

        return res.send('Deletado com sucesso')
    }
}