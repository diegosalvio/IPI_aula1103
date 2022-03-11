/*const fs = require('fs')

const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log("Deu erro: " + erro)
        }
        else {
            console.log(conteudo.toString())
            //processamento
            const dobro = 2 * +conteudo.toString()

            const finalizar = function (erro){
                if(erro){
                    console.log("Deu erro" + erro)
                } else {
                    console.log("Salvou o dobro com sucesso")
                }
  
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }
    }
    //segundo parâmetro: função callback
    fs.readFile(nomeArquivo, exibirConteudo)
}

abrirArquivo('arquivo.txt')
*/
// IO Bound
// CPU Bound

/*function exemplo(){
    return 1
}*/
/*
function exemplo(){
    let p = new Promise(function(resolve, reject){
        resolve(1)
    })
    return p
}

const resultadoFuturo = exemplo()
resultadoFuturo.then((resultado)=> console.log(resultado))
*/
/*
function calculoDemorado(n){
    let p = new Promise ((resolve, reject)=>{
        if(n < 0){
            reject("Não pode número negativo, amigo")
        }
        else{
            let res = 0
            for (let i = 1; i<= n; i++){
                res += i
            }
            resolve(res)
        }
    })
    return p
}


calculoDemorado(-10).then((res)=> {
    console.log("deu tudo certo no final: " + res)
}).catch(erro => {
    console.log("Falhou, amigo: " + erro)
})
*/
//const resultadoFuturo = calculoDemorado(10)
//resultadoFuturo.then((res)=> console.log(res))

function calculoRapidinho(n){
    return Promise.resolve((n*(n + 1))/2)
}

calculoRapidinho(10)
.then(res=> console.log(res))

function f(n){
    return new Promise((resolve, reject) => {
        resolve(n * (n +1))/2
    })
}

