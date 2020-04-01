const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBady = require('koa-body')
const json = require('koa-json')
const Client = require('mysql-pro')
const client = new Client({
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    database: 'mydb1',
    user: 'root',
    password: '12345678'
  }
})

const app = new Koa()
const router = new Router()

router.prefix('/api') // 接口路由的固定前缀

// router.get('/', ctx => {
//     console.log(ctx)
//     console.log(ctx.request);
//     ctx.body = 'Hello World!'
// })
// router.get('/api', ctx => {
//     console.log(ctx)
//     console.log(ctx.request);
//     ctx.body = 'Hello Api!'
// })
// router.get('/async', async(ctx) => {
//     let result = await new Promise((resolve) => {
//         setTimeout(function () {
//             resolve('Hell async')
//         }, 2000)
//     })
//     ctx.body = result
// })

// post
router.post('/post', async ctx => {
  let { body } = ctx.request // 前端post传来数据存入这里
  console.log(body)
  console.log(ctx.request)
  ctx.body = {
    // 将存在{ body }里面的数据取出来，放在这里
    ...body
  }
})

// get
router.get('/api', async ctx => {
  const params = ctx.request.query // 前端可以传过来的值
  const data = await client.query('select * from users')
  console.log(data)
  ctx.body = {
    code: 200,
    data
  }
})

app.use(koaBady()) // 设计body
app.use(cors()) // 设置跨域
app.use(json({ pretty: false, param: 'pretty' }))
app.use(router.routes()).use(router.allowedMethods())
app.listen(8641)
