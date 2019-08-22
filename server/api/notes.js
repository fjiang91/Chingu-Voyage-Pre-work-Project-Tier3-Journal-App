const router = require('express').Router()
const {Note} = require('../db/models')
const {User} = require('../db/models')

//Will need admin priviledge later
//admin function

//Get All Notes within the database
router.get('/', async (req, res, next) => {
  try {
    const allNote = await Note.findAll()
    res.json(allNote)
  } catch (error) {
    console.log('TCL: error', error)
  }
})

//Get a Single Note by ID
router.get('/user/:userId/:noteId', async (req, res, next) => {
  try {
    const singleNote = await Note.findByPk(req.params.noteId)
    res.status(201).json(singleNote)
  } catch (error) {
    console.log('TCL: error', error)
  }
})

//Update A Single Note By ID
router.put('/user/:userId/:noteId', async (req, res, next) => {
  try {
    const [numberOfAffectedRows, affectedRows] = await Note.update(req.body, {
      where: {id: +req.params.noteId},
      returning: true,
      plain: true
    })
    res.json(affectedRows)
  } catch (error) {
    console.log('TCL: router.put -> error', error)
  }
})

//Delete a Single Note by ID
router.delete('/user/:userId/:noteId', async (req, res, next) => {
  try {
    await Note.destroy({
      where: {id: req.params.noteId}
    })
    res.status(201).json('Note Deleted')
  } catch (error) {
    console.log('TCL: error', error)
  }
})

//Get All Notes for a Particular User
router.get('/user/:userId', async (req, res, next) => {
  try {
    const allUserNote = await Note.findAll({
      where: {userId: req.params.userId}
    })
    res.json(allUserNote)
  } catch (error) {
    console.log('TCL: error', error)
  }
})

//Create a note for a Particular User
router.post('/user/:userId', async (req, res, next) => {
  try {
    const newNote = await Note.create({
      title: req.body.title,
      content: req.body.content
    })

    const authorUser = await User.findByPk(req.params.userId)

    await newNote.setUser(authorUser)

    res.status(201).json(newNote)
  } catch (error) {
    console.log('TCL: error', error)
  }
})

module.exports = router
