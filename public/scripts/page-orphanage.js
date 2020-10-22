
// Objeto de controle do mapa do orphanage.html
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Utilização de cont pois a variável mymap não sofrerá uma mudança durante o código. (cont é constante). Usar var ou let poderia trazer o risco de em algum momento a váriavel mudar e não queremos isso. 
// O L não é do JSON, ele é um objeto que criamos. O L é do script que colocamos do Leaflet. 
// No array o primeiro valor é latitude e a segunda longitude, o terceiro valor em outro argumento ao lado é o  zoom.
// Aqui criamos o mapa
const map = L.map('mapid', options).setView([-26.1766925,-50.3915868], 15)

// Aqui é criado o titlelayer, ele é a primeira camada que vai receber o mapa. 
// titlelayer é uma função aqui e recebe dois argumentos aqui. 
// O primeiro argumento é uma string, o segundo argumento é um objeto que tem uma propriedade chamado attribution que tem um valor no formato de string.
// Depois de criado tudo isso e passado por objeto ele é adicionado ao mapa. 
// Criando e adicionando tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Criando icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]

})

// Adicionando o pupup a um ponto especifico passado no argumento com um texto descritivo.
//Criando e adicionando marker
L.marker([-26.1766925,-50.3915868], { icon })
.addTo(map)

/* image gallery */

function selectImage(event) {
    const button = event.currentTarget
    console.log(button.children)

    // remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    // console.log(buttons) - Gerar log de ações nos botões
    // buttons.forEach(function() { }) - passar função para o botão
    // buttons.forEach(() => { }) - passar função para o botão de forma abreviada - arrowfunction
    // buttons.forEach((button) => { }) - passar função para o botão de forma abreviada com argumento button - arrowfunction
        
    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar a classe active para esse botao
    button.classList.add('active')
}