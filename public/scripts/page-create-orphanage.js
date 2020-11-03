
// Utilização de cont pois a variável mymap não sofrerá uma mudança durante o código. (cont é constante). Usar var ou let poderia trazer o risco de em algum momento a váriavel mudar e não queremos isso. 
// O L não é do JSON, ele é um objeto que criamos. O L é do script que colocamos do Leaflet. 
// No array o primeiro valor é latitude e a segunda longitude, o terceiro valor em outro argumento ao lado é o  zoom.
// Aqui criamos o mapa
const map = L.map('mapid').setView([-26.1766925,-50.3915868], 15)

// Aqui é criado o titlelayer, ele é a primeira camada que vai receber o mapa. 
// titlelayer é uma função aqui e recebe dois argumentos aqui. 
// O primeiro argumento é uma string, o segundo argumento é um objeto que tem uma propriedade chamado attribution que tem um valor no formato de string.
// Depois de criado tudo isso e passado por objeto ele é adicionado ao mapa. 
// Criando e adicionando tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map)

//Criando icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]

})

let marker;

// criando e adicionando marker
map.on('click', (event) => {
    //console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    // remover icon
    marker && map.removeLayer(marker)

    // adicionando icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})
