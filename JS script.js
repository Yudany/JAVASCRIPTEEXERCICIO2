let registros = []

while (true) {
    let nome = prompt("Qual e seu nome").toLowerCase()
    let sobrenome = prompt("Qual e seu Sobrenome").toLowerCase()
    let Nacionalidade = prompt("Qual e sua Nacionalidade").toLowerCase()
    
    let idade
    while (true) {
      idade = Number(prompt("Qual e sua idade?"))
      if (! Number.isNaN(idade)) {
        break
      }
      alert('Idade inválida, por favor digite um número')
    }
       
    let pessoa = {nome, sobrenome, idade, nacionalidade }
    
    registros.push(pessoa)

    let outroRegistro = confirm("Deseja fazer outro registro?")
        if (outroRegistro === false) {
          break
    }
 }

console.table(registros)
console.log(registros)
/// comparações

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade++) {
    console.log('Idade dentro do for:', idade)
  }
  console.log('Idade fora do for:', idade)
}
imprimeIdade()

let gruposnacionalidad = nacionalidad(registros)

for (let nacionalidade of Object.keys(gruposnacionalidad)) {
  console.log(` As pessoas que tem la nacionalidade ${nacionalidade}:`)
  for (let pessoa of gruposnacionalidad[nacionalidade]) {
    console.log(`- ${pessoa.nome}`)
  }
}

function obterMaisNovo(registros) {
  let maisNovo = [ registro[0] ]

  for (let registro of registros.slice(1)) {
   if (registro.idade < maisNovo[0].idade) {
      maisNovo = [ registro ]
    } else if (registro.idade === maisNovo[0].idade) {
       maisNovo.push(registro)
    }
  }

  return maisNovo
}

function  nacionalidad(registros) {
  let gruposnacionalidad = {}
  
  for (let registro of registros) {
    if (typeof gruposnacionalidad[registro.nacionalidade] === 'undefined') {
      gruposnacionalidad[registro.nacionalidade] = [ registro ]
    } else {
      gruposnacionalidad[registro.nacionalidade].push(registro)
    }
  }

  return gruposnacionalidad
}

