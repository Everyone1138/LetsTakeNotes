const router = require('express').Router(); //dependancies 
const path = require("path");

router.get("/notes", (req, res) => { // takes user to the notes page
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

router.get('/', (req, res) => { // makes 'note taker' at the top right of the screen  bring you back to the main page
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get("*", (req, res) => { // takes the user back to the main page 
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
