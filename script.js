const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10"


// manejando primises con then y catch
/*function listaImagenes() {
  fetch(url)
    .then(response => response.json())//cuando la promise retorna en          resuelta
    .then(datosImagenes => {
      console.log(datosImagenes)


      const card = document.querySelector("[data-ul]")

      datosImagenes.forEach(elemento => {
        const contenido = ` <li class="card">
                    <img class="card__image" src="${elemento.url}"      alt="imagen">
                    <h3 class="card__title">${elemento.tittle}</h3>
                </li>`
        card.innerHTML = card.innerHTML + contenido
      })
    })

    .catch(error => console.log(error)) // cuando es rejected
}

listaImagenes() */

// manejando promesas con async y await

async function listaImagenes() {
  try {
    let fecthImagen = await fetch(url)
    let datosImagenes = await fecthImagen.json()

    const card = document.querySelector("[data-ul]")

    datosImagenes.forEach(elemento => {
      const contenido = ` <li class="card">
                  <img class="card__image" src="${elemento.url}"          alt="imagen">
                  <h3 class="card__title">${elemento.tittle}</h3>
              </li>`
      card.innerHTML = card.innerHTML + contenido
    })



  }
  catch (error) { console.log(error) }
}

listaImagenes()