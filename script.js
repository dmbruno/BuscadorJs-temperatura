
let difKelvin = 273.15
const api_Key = 'abb6ad0e9b36d9d2d0acf45d267795ff';


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const cuidad = document.getElementById(`ciudadEntrada`).value

    if (cuidad) {
        fetchDatosClima(cuidad)
    }

})

function fetchDatosClima(cuidad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cuidad}&appid=${api_Key}`)
        .then(data => data.json())
        .then(data => mostrarDatosClima(data));

}


function mostrarDatosClima(data) {
    console.log(data);
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = '';


    //metemos en variabel los datos que queremos traer de la Api del clima
    const cuidadNombre = data.name
    const temperatura = data.main.temp
    const description = data.weather[0].description
    const sensacionT = data.main.feels_like
    const humedad = data.main.humidity
    
    // aca creamos elementos para meter esas variables y mostrar la info.

    const humedadinfo=document.createElement('p')
    humedadinfo.textContent=`La humedad es ${humedad}%`
    const cuidadTitulo = document.createElement('h2')
    cuidadTitulo.textContent = cuidadNombre
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`
    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripcion meteorologica es: ${description}`
    const sensacionTermica = document.createElement('p')
    sensacionTermica.textContent = `Sensacion Terminca: ${Math.floor(sensacionT - difKelvin)}`

    divDatosClima.appendChild(cuidadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descriptionInfo)
    divDatosClima.appendChild(humedadinfo)
    divDatosClima.appendChild(sensacionTermica)


}



