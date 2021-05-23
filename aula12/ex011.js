var idade = 18
console.log(`Você tem ${idade} anos.`)
if (idade > 17 && idade < 66){
    var futuro_idoso = 66 - idade
    console.log('Voto Obrigatório!')
    console.log('A partir dos 18 anos seu voto se tornou obrigatório.')
    console.log(`Falta(m) aproximadamente ${futuro_idoso} ano(s) para seu voto voltar a ser opcional.`)
} else if (idade > 15){
    console.log('Voto Opcional!')
    console.log('Dos 16 aos 17 anos ou a partir dos 66 anos seu voto é opcional.')
}else{
    var falta = 16 - idade
    console.log('Ainda não pode votar!')
    console.log(`Daqui a aproximadamente ${falta} ano(s) você terá acesso ao voto opcional.`)
 }
