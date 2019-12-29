module.exports = (app) => {
    const login = require('../controllers/login_controller.js');

    // Create a new Note
   // app.post('/notes', notes.create);
    app.post('/signup', login.createusers);
    app.post('/signin', login.loginauth);

    // Retrieve all Notes
   // app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
   // app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
   // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
   // app.delete('/notes/:noteId', notes.delete);
}

