console.log("hola ajax1")

function uno(){
    return "uno";
}

function dos(){
    setTimeout(()=>{
        console.log("ahora si... dos!!!")
        return "dos"
    }, 2000);

}


function tres(){
    return "tres";
}


console.log(uno())
console.log(dos())
console.log(tres())


// Promesas: ejemplo de tipo

const miPromesa = new Promise(()=>{})
console.log("mi promesa: ", miPromesa)

const miPromesa2 = fetch('https://pokeapi.co/api/v2//pokemon/6')
console.log("mi promesa 2 : ", miPromesa2)

miPromesa2.then(
    //Funcion que se ejecuta cuando la promesa se resuelve
    (respuesta)=>{
        console.log("respuesta", respuesta)
        console.log("status", respuesta.status)
        console.log("ok", respuesta.ok)

        const datos = respuesta.json()
        console.log("datos", datos)

        datos.then(
            (datoJson)=>{
                console.log("datoJson", datoJson.name)
            }
        )
    }
)


const nombre = fetch("https://pokeapi.co/api/v2//pokemon/12")
    .then((respuesta)=>{
        return respuesta.json()   
    })
    .then((datos)=>{
        console.log("nombre pokemon", datos.name)
        return datos.name
    })

