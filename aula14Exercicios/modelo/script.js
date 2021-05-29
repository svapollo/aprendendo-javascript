function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //f formulario > sexo adc [0] é o mas e [1] fem
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10) {
                //crianca
                img.setAttribute('src', 'criancaH.jpg')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescenteH.jpg')
            } else if (idade < 59){
                //adulto
                img.setAttribute('src', 'adultH.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosH.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10) {
                //crianca
                img.setAttribute('src', 'criancaM.jpg')
            } else if (idade < 21){
                //adolescente
                img.setAttribute('src', 'adolescenteM.jpg')
            } else if (idade < 59){
                //adulto
                img.setAttribute('src', 'adultM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}