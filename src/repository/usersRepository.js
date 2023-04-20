import dataset from '../dataset/users_info.json'
let usuarios = []
usuarios = dataset




exports.getUsersForNameInOrder = (nombre) => {
    // Se revisa si algun producto tiene la categoria
    let name_filter = usuarios.filter((user) => user.name.includes(nombre))
  
    // En caso de no existir ningun producto retorna -1 (equivalente a que no fue encontrado) (Para captar el error 404)
    if (name_filter.length == 0 ) return -1
  
    // Se retornan los productos
    return name_filter
  }
  