var alunos = ["Pedro", "Joana", "Lincon", "Marcela", "Lucas", "Luana", "Negron", 'Thiago']
var nota1 = [18, 15, 20, 16, 11, 13, 17, 12]
var nota2 = [20, 13, 15, 19, 20, 12, 19, 20]

function media(i){
    return (nota1[i] + nota2[i])/2
}
function passou(){
    if(media(i) >= 15){
        return 'Passou'
    }
    else{
        return 'Não passou'
    }
}
for(var i in alunos){
    console.log('Nome:', alunos[i])
    console.log('Primeira Nota:', nota1[i])
    console.log('Segunda Nota:', nota2[i])
    console.log('Média:', media(i))
    console.log('Você:', passou())
    console.log('')
}