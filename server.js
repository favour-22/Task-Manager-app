const { app, port } = require('./config/config')


async function startApp() {
  app.listen(port, () => {
    console.log(`server started on localhost:${port}`)
  })

}
startApp()