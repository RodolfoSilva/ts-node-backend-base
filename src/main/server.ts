import app from './config/app'
import env from './config/env'

const server = app.listen(8080, () => {
  console.log(`Server running at http://localhost:${env.port}`)
})

async function closeGracefully(signal: string) {
  console.log(`Received signal to terminate: ${signal}`)

  await new Promise((resolve) => server.close(resolve))
  console.log('HTTP server closed')

  process.exit()
}

process.on('SIGINT', closeGracefully)
process.on('SIGTERM', closeGracefully)
