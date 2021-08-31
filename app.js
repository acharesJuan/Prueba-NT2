const listaDeProductos = [{nombre:"hamburguesa",precio:450}
,{nombre:"papafrita",precio:50}
,{nombre:"coca",precio:20}
,{nombre:"pancho",precio:200}
,{nombre:"otra hamburguesa",precio:150}
,{nombre:"hamburguesa",precio:450}]

function filtrarProductos(valor){
    const productosFiltrados = listaDeProductos.filter(element => element.precio < valor)
    document.getElementById("lista").innerHTML = ""
    productosFiltrados.forEach(producto => {      
        const elemento = document.createElement('p')
        //CREA UN <p></p>
        elemento.innerText = producto.nombre
        document.getElementById("lista").appendChild(elemento)
    })
}