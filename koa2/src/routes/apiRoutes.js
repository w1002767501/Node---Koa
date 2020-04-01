import Router from 'koa-router'
import api from '../api/api'

const router = new Router()

router.get('/api', api.Mysql)

export default router
