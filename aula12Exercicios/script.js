function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if(hora >= 6 && hora < 12){
        //Bom dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#B0E0E6'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#FF8C00'
    } else {
        //Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#9932CC'
    }
}