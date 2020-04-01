import Koa from 'koa'
import Router from './routes/routes'
import cors from '@koa/cors'
import koaBady from 'koa-body'
import json from 'koa-json'

const app = new Koa()

app.use(koaBady()) // 设计body
app.use(cors()) // 设置跨域
app.use(json({ pretty: false, param: 'pretty' }))
app.use(Router())
app.listen(8641)
qq
