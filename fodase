frase = "Eu!? s+ou mu(ito b@om"

frase.replace(/[?!+(@)]/g,'').split(" ").reduce((a,b) => a.length > b.length ? a : b)

function retira_caracterias(frase){
    caracteres = '?!(@+'
    nova = ''
    for (i=0; i<frase.length; i++){
        troca=false
        for (a=0; a<caracteres.length; a++){
            if(frase[i] == caracteres[a]){
                nova+= ''
                troca=true
                break
            } 
        } if (troca==false){
            nova+= frase[i]
        }
    }
    return nova
}

final = retira_caracterias(frase).split(" ")

function maior(palavras){
    maior = palavras[0]
    for (i=0; i< palavras.length; i++){
        if (palavras[i].length > maior.length){
            maior = palavras[i]
        } else maior = maior
    }
    return maior
}

console.log(maior(final))
