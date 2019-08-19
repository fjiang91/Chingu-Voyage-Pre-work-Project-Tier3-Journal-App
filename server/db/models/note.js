const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    //Used to uniquely indentify each post
    unique: true
  }
})

//Sequelize hook to create unique slug beforre inserting into database
//Test Title 2 --> test_title_2
Note.beforeValidate(note => {
  if (!note.slug) {
    note.slug = note.title
      .replace(/\s/g, '_')
      .replace(/\W/g, '')
      .toLowerCase()
  }
})

module.exports = Note
