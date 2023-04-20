import dataset from '../dataset/users_info.json'
let usuarios = dataset

exports.getUsersFromDataset = (ctx) => {
    return dataset
}


exports.getUsersForNameInOrder = (nombre) => {

    let name_filter = usuarios.filter((user) => user.name.includes(nombre))

    if (name_filter.length == 0 ) return -1
    
    const ageOrder = name_filter.sort((u1, u2) => (u1.age >= u2.age) ? 1 : (u1.age < u2.age) ? -1:0); // Referencia: https://www.scaler.com/topics/javascript-sort-an-array-of-objects/

    return ageOrder.reverse()
  }

exports.buscarUsuario = (data) => {
    const products = {
        name: data.name,
        age: data.age,
        gender: data.gender,
        company: data.company,
        isActive: data.isActive
    }
    //usuarios.forEach(usuarios 
    //No me ha dado tiempo a realizar más
}
  