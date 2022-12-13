const PORT = process.env.PORT || 3000;
const app = require('./app');
const {db} = require('./db')

db.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`

        Listening on PORT ${PORT}

        http://localhost:${PORT}/

    `))
  })

// might work better
// const {db} = require('./db')
// const PORT = 3000
// const app = require('./app')

// const init = async () => {
//   try {
//     await db.sync();
//     app.listen(PORT, () => console.log(`

//           Listening on port ${PORT}

//           http://localhost:${PORT}/

//       `));
//   } catch (err) {
//     console.log(`There was an error starting up!`, err);
//   }
// }

//  init();