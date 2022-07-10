const express = require('express');
const Model = require('../model/model');
const listTopic = require('../listTopic.json')
const computersWord = require('../computerWord.json')

const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        word: req.body.word,
        mean: req.body.mean,
        imageExample: req.body.imageExample,
        example: req.body.example,
        path: req.body.path,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get topic 
router.get('/getTopic', async (req, res) => {
    try {
        res.json(listTopic)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get topic Computers
router.get('/getTopic/computers', async (req, res) => {
    try {
        res.json(computersWord)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;