const express = require('express');
const menu = require('./menu-model');
const restrict = require('../middleware/restrict.js')
const { validateMenuId } = require("../middleware/validate")

const router = express.Router()

router.get('/', restrict(), (req, res, next) => {
    menu.getMenu()
    .then(menu => {
        res.json(menu)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    menu.getMenuId(req.params.id)
    .then(menu => {
        if(menu){
            res.json(menu)
        } else {
            res.status(401).json({
                message: "No Such Menu"
            })
        }
    })
    .catch(err => {
        next(err)
    })
})

router.post('/', (req, res, next) => {
    menu.addMenu({ ...req.body, user_id: req.token.userId })
    .then(menu => {
        res.status(201).json(menu)
    })
    .catch(err => {
        next(err)
    })
})

router.put('/:id', validateMenuId(), (req, res, next) => {
    menu.removeMenu(req.params.id, req.body)
    .then((menu) => {
        res.status(200).json(menu)
    })
    .catch(err => {
        next(err)
    }) 
})

module.exports = router