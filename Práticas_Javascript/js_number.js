const peso1 = 1.0
// Transforma uma string em number
const peso2 = Number('2.0')

console.log(peso1, peso2)
// Para saber se um número é inteiro
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

// Sistema para fazer uma média de duas notas

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('Sua média é ' + media)

console.log(media.toFixed(2))
console.log(media.toString(2)) // Em binário
console.log(typeof media) // Para saber o tipo

// Cuidados com números
console.log(7 / 0) // Infinito
console.log("10" / 2)
console.log("Dois" * 2) // Não funciona
console.log(0.1 * 0.7) // Não é 0.7