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
// Se retornan los productos

exports.buscarUsuarios = (ctx) => {
    if (ctx.request.body.name === undefined || ctx.request.body.age === undefined || ctx.request.body.gender === undefined || ctx.request.body.categorias === undefined){
        ctx.status = 400
        ctx.body = {message: 'Peticion mal realizada'}
        return ctx
    }
    let buscar = userActions.buscarUsuario(ctx.request.body)
    ctx.body = { message: 'El usuario ha sido encontrado', buscar }
    return ctx
}