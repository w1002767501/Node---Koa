import Koa from 'koa'
import Router from './routes/routes'
import cors from '@koa/cors'
import koaBady from 'koa-body'
import json from 'koa-json'
import compose from 'koa-compose'

const app = new Koa()

const middleware = compose([
  koaBady(),
  // statics(path.join(__dirname)),
  cors(),
  json({ pretty: false, param: 'pretty' })
])

app.use(middleware)
app.use(Router())
app.listen(1000)
