let listaDeProductosFinal = []

const filtrarProductos = (listaDeProductos,precio) =>  (listaDeProductos.forEach(element => {
    if (element <=precio) {
        listaDeProductosFinal.push(element)
    }
}))

