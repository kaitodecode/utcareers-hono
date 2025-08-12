import { Hono } from 'hono'
import { AppRouter } from './routes'

const app = new Hono()

app.route("/api", AppRouter)

// Konfigurasi server
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

console.log(`🚀 Server running on http://${HOST}:${PORT}`)

export default {
  port: PORT,
  hostname: HOST,
  fetch: app.fetch,
}
