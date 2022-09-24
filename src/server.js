<<<<<<< HEAD
require('dotenv').config()

const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/postgres/NotesService')
=======
const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory.js/notesServies');
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18
const NotesValidator = require('./validator/notes');

const init = async () => {
  const notesService = new NotesService()

  const server = Hapi.server({
<<<<<<< HEAD
    port: process.env.PORT,
    host: process.env.HOST,
=======
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
>>>>>>> e9986cf1d65fa07c4492099a90202e7ee29daf18
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    }
  })


  await server.start();
  console.log(`Server berjalan pada ${ server.info.uri }`);
};

init();
