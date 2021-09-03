const valores = [28 , 08 , 2001, 1.73]
console.log(valores[0], valores[3])
// Não gera um erro
console.log(valores [4])

// Coloca um elemento em uma array
valores[4] = 10 
console.log(valores)
//mostra a quantidade de elementos em uma array
console.log(valores.length)
// Coloca elementos em uma array
valores.push({id:3}, false, null, 'teste')
console.log(valores)

// Retira o ultimo elemento de uma array
console.log(valores.pop())
// Retira um elemento especifico de uma array
delete valores[0]

// Uma array é do tipo objetc
console.log(typeof valores)