import Router from 'koa-router'
import post from '../api/post'

const router = new Router()

router.post('/post', post.posttest)

export default router
