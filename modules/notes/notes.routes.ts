const notesController = require('./notes.controller');

// @ts-ignore
const resource = '/notes';

module.exports = function (app:any, version:string) {
  app.get(
    `${version}${resource}`,
    notesController.notes,
  );
}
