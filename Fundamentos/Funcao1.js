// Funcao sem retorno
function imprimirSoma(a,b){
  console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,54,4,5,6,7,8)
imprimirSoma()

// funcao com retorno
function soma(a,b = 1){// o segundo padrão tem um valor padrão
    return a+b
}

console.log(soma(2,3))
console.log(soma(1))
console.log(soma())
