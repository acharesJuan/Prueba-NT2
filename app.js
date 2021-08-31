const listaDeProductos = [{nombre:"hamburguesa",precio:450},{nombre:"hamburguesa",precio:450},{nombre:"hamburguesa",precio:450}]


function filtrarProductos(valor){
    const productosFiltrados = listaDeProductos.filter(element => element.precio < valor)

    productosFiltrados.forEach(producto => {
        const elemento = document.createElement('p')
        elemento.innerText = producto.nombre
        document.getElementById("lista").appendChild(elemento)

    })
}