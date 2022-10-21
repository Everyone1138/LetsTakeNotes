const path = require('path');
const fs = require('fs');


function genupDate(id, notesArray) {
  const deletedNote = id;
  for (let i = 0; i < notesArray.length; i++) {
    if (deletedNote === notesArray[i].id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2), err => {
          if (err) {
            throw err;
          }
        });
    }
  }
}

function gennewNotes(body, notesArray) {
  const newNote = body
  notesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return newNote;
};

module.exports = {
  genupDate,
  gennewNotes,
}; 