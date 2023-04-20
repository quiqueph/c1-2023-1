import userActions from '../../repository/usersRepository'

exports.getUsersForNameInOrder = (ctx) => {
   const result = userActions.getUsersForNameInOrder(ctx.params.name)
   if (result == -1){
       ctx.status = 404
       ctx.body = {message: 'El nombre no existe'}
   }else {
       ctx.status = 200
       ctx.body = result
   }
   return ctx
}

