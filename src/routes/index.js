import Router from 'koa-router'
import getHealth from './health/health'
import users from './users/users'

const router = new Router()

router.get('/health', getHealth)

// Endpoint ejercicio 1
router.get('/api/users/:name',users.getUsersForNameInOrder)

export default router
