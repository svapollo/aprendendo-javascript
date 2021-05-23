var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} hora(s).`)
if(hora >= 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde!')
} else if (hora >= 18 && hora < 24){
    console.log('Boa noite!')
} else {
    console.log('Acordado na madrugada né safado, espero que seja uma necessidade real ou vai meditar!')
}