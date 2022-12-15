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
