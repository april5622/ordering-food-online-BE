const express = require("express");
const users = require("./users-model")
const { validateUser, validateUserId } = require("../middleware/validate");

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        res.json(await users.find())
    } catch(err) {
        next(err)
    }
})

router.get('/:id', validateUserId(), (req, res) => {
    res.status(200).json(req.user)
})

router.post("/", validateUser(), (req, res, next) => {
    users.add(req.body)
    .then((user) => {
        res.status(201).json(user)
    })
    .catch((err) => {
        next(err)
    })
})

router.delete('/:id', validateUserId(), (req, res, next) => {
    users.remove(req.params.id)
    .then((count) => {
        res.status(200).json(count)
    })
    .catch((err) => {
        next(err)
    })
})

router.put("/:id", validateUserId(), (req, res, next) => {
    users.update(req.params.id, req.body)
    .then((user) => {
        res.status(200).json(user)
    })
    .catch((err) => {
        next(err)
    })
})


module.exports = router