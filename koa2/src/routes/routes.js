import combinerouters from 'koa-combine-routers'

import apiRoutes from './apiRoutes'
import postRoutes from './postRoutes'

export default combinerouters(apiRoutes, postRoutes)
