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


    let currentId = 1;

    function devolveTarjeta(id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
          document.getElementById('main-pokemon-name').textContent = datos.name.toUpperCase();
          document.getElementById('main-pokemon-img').src = datos.sprites.front_default;
          document.getElementById('main-pokemon-weight').textContent = "Peso: " + datos.weight + " kg";
        })
        .catch(error => console.error('Error al obtener el Pokémon:', error));
    }
    
    document.getElementById('prev-btn').addEventListener('click', () => {
      if (currentId > 1) {
        currentId--;
        devolveTarjeta(currentId);
      }
    });
    
    document.getElementById('next-btn').addEventListener('click', () => {
      currentId++;
      devolveTarjeta(currentId);
    });
    
    // Tarjeta principal: carga inicial
    devolveTarjeta(currentId);
    
    // Tarjeta de favorito
    function pokemonFavorito1() {
      fetch('https://pokeapi.co/api/v2/pokemon/104')
        .then(respuesta => respuesta.json())
        .then(datos => {
          document.getElementById('fav-pokemon1-name').textContent = datos.name.toUpperCase();
          document.getElementById('fav-pokemon1-img').src = datos.sprites.front_default;
          document.getElementById('fav-pokemon1-weight').textContent = "Peso: " + datos.weight + " kg";
        })
    }
    
    pokemonFavorito1();

    function pokemonFavorito2() {
        fetch('https://pokeapi.co/api/v2/pokemon/196')
          .then(respuesta => respuesta.json())
          .then(datos => {
            document.getElementById('fav-pokemon2-name').textContent = datos.name.toUpperCase();
            document.getElementById('fav-pokemon2-img').src = datos.sprites.front_default;
            document.getElementById('fav-pokemon2-weight').textContent = "Peso: " + datos.weight + " kg";
          })
      }
      
      pokemonFavorito2();

      function pokemonFavorito3() {
        fetch('https://pokeapi.co/api/v2/pokemon/38')
          .then(respuesta => respuesta.json())
          .then(datos => {
            document.getElementById('fav-pokemon3-name').textContent = datos.name.toUpperCase();
            document.getElementById('fav-pokemon3-img').src = datos.sprites.front_default;
            document.getElementById('fav-pokemon3-weight').textContent = "Peso: " + datos.weight + " kg";
          })
      }
      
      pokemonFavorito3();
    