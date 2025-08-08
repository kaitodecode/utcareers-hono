import { Hono } from 'hono'
import { AppRouter } from './routes'

const app = new Hono()


app.route("/api", AppRouter)


export default app
