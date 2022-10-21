const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { notes } = require("../../db/db.json");
const { gennewNotes, genupDate } = require("../noteTaker");

router.get("/notes", (req, res) => {
  let results = notes;
  res.json(results);
});
router.post("/notes", (req, res) => {
  req.body.id = uuidv4();
  const newNote = gennewNotes(req.body, notes);
  res.json(newNote);
});
router.delete("/notes/:id", (req, res) => {
  const params = req.params.id
  genupDate(params, notes);
  res.redirect('');
});

module.exports = router;