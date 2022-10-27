const path = require('path'); //dependancies/packages
const fs = require('fs');

function genupDate(id, noteTakerArrary) { //function that deletes user entries 
  const delNotes = id;
  for (let i = 0; i < noteTakerArrary.length; i++) {
    if (delNotes === noteTakerArrary[i].id) {
      noteTakerArrary.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({ notes: noteTakerArrary }, null, 2), err => {
          if (err) {
            throw err;
          }
        });
    }
  }
}
function gennewNotes(body, noteTakerArrary) { // this function writes a new note
  const takeNewNote = body
  noteTakerArrary.push(takeNewNote);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: noteTakerArrary }, null, 2)
  );
  return takeNewNote;
};
module.exports = { // exports functions
  genupDate,
  gennewNotes,
}; 