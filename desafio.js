//Input: "fun&!! time"
//Output: time

//Input: "I love dogs"
//Output: love

frase = 'I love dogs'

sempontuacao= frase.replace(/\s+/g, '')

splits = sempontuacao.split(" ")

function maiorpalavra(palavras){
    maior = palavras[0]
    for (i=0; i< palavras.length; i++){
        if (palavras[i].length > maior.length){
            maior = palavras[i]
        } else maior = maior 
    }
    return maior
}

//console.log(maiorpalavra(splits))

//console.log(splits.reduce((a,b) => a.length > b.length ? a : b))

console.log(frase.split(" ").reduce((a,b) => a.length >= b.length ? a : b))
