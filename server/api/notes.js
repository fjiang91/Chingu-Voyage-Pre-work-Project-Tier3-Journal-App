const router = require('express').Router()
const {Note} = require('../db/models')

router.get('/', (req, res, next) => {
  try {
    res.json('All Notes Route')
  } catch (error) {
    console.log('TCL: error', error)
  }
})

module.exports = router
