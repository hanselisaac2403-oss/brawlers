const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 50000
    },
    {
        id: 2,
        nombre: "Jean",
        precio: 120000
    },
    {
        id: 3,
        nombre: "Chaqueta",
        precio: 180000
    }
];



/* 
productos.push({
    id:4,
    nombre:"Gorra",
    precio:50000
}); */




console.log("PRIMERO:***",productos)

//arrays:   metodos propios. 

productos.push(
    {
        id:4,
        nombre: "Camiseta",
        precio:10000
    }
)

    
console.log("DESPUES--->",productos)

//productos.pop()

let productos_filtrados = productos.filter(producto => producto.nombre == "Camiseta" )

console.log("DESPUES de filtro --->",productos_filtrados)


console.log("despues de ordenados",productos_filtrados[0].nombre)

let productos_encontrados =  productos.find(producto => producto.nombre == "Camiseta")

console.log("METODO FIND: ",productos_encontrados)

//productos.pop();
//let busqueda = productos.find(producto=>producto.nombre === "Gorra")
//let baratos=productos.filter(producto=>producto.precio===50000) //crea unnuevo array NO sobreescribe el array en juego
//let nuevo = productos.map(producto=>producto.nombre)

//console.log("SEGUNDO::: ",nuevo)


/* function pares(numero){
    
        if(numero % 2 === 0){
            console.log("par")
        }
        else{
        console.log("impar")}

    
}

pares(7)

const numeros = [10,15,20,23,40,51,70];

function num (){
        numeros.forEach(item=>{
            if(item % 2 === 0){
                console.log(item)
            }else{
                console.log("*")
            }
        })

    
}

num();



 */