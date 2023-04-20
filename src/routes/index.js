import Router from 'koa-router'
import getHealth from './health/health'
import users from './users/users'
//import userActions from '../repository/usersRepository'


const router = new Router()

router.get('/health', getHealth)

// Endpoint ejercicio 1
router.get('/api/users/:name', users.getUsersForNameInOrder)

//Endpoint ejercicio 2

router.post('/api/user', users.buscarUsuarios)

export default router
