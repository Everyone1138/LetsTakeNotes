const router = require('express').Router(); // dependencie 
const { v4: uuidv4 } = require('uuid'); // api 
const { notes } = require("../../db/db.json");  // links the db.json file 
const { gennewNotes, genupDate } = require("../noteTaker"); // allows this file to use the module exports from file 'noteTaker'

router.get("/notes", (req, res) => { // GET request for reviews
  let results = notes;
  res.json(results);
});
router.post("/notes", (req, res) => { // POST request to add a review
  req.body.id = uuidv4();
  const genNote = gennewNotes(req.body, notes);
  res.json(genNote);
});
router.delete("/notes/:id", (req, res) => { // DELETE request 
  const params = req.params.id
  genupDate(params, notes);
  res.redirect('');
});

module.exports = router; // exports router