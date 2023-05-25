// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {

altura = Number(prompt('Digite um numero'))
largura = Number(prompt('Digite um numero'))
 
 
 console.log(altura*largura)


}

// EXERCÍCIO 02
function imprimeIdade(nascimento, hoje) {
  nascimento = Number(prompt('Digite o ano que você nasceu'))
  hoje = Number(prompt('Digite o ano atual'))

  console.log(nascimento - hoje)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 

  return peso / (altura* altura)


}

// EXERCÍCIO 04

function imprimeInformacoesUsuario(uName, uIdade, uMail) {
    uName = prompt("Digite seu nome")
    uIdade = Number(prompt("Digite sua idade"))
    uMail = prompt("Digite seu mail")

  console.log(`Meu nome é ${uName}, tenho ${uIdade} anos, e o meu email é ${uMail}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  cor1 = prompt("Digite sua cor favorita")
  cor2 = prompt("Digite sua cor favorita")
  cor3 = prompt("Digite sua cor favorita")

  const cores = [cor1, cor2, cor3 ]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return (string).toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let lista1 = array[0]
  let lista2 = array[array.length-1]
  array[0] = lista2
  array[array.length - 1] = lista1

  return array
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}