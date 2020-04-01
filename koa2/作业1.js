const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBady = require('koa-body')
const json = require('koa-json')

const app = new Koa()
const router = new Router()

router.prefix('/api') // 接口路由的固定前缀


router.post('/user', async (ctx) => {
    let { body, header } = ctx.request
    console.log(header)

    if ( !body.name || !body.email) {
        ctx.body = {
            "code": 404,
            "msg": "nama和email不能为空"
        }
    }else if( !header.role || header.role !== 'admin') {
        ctx.body = {
            "code": 401,
            "msg": "unauthorized post"
        }
    }else {
        ctx.body = {
            "code": 200,
            "data": {
                ...body,
            },
            "msg": "上传成功"
        }
    }
})






app.use(koaBady()) // 设计body
app.use(cors()) // 设置跨域
app.use(json({pretty: false, param: 'pretty'}))
app.use(router.routes()).use(router.allowedMethods())
app.listen(9000)