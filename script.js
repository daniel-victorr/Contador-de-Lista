let num = window.document.querySelector("input#fnum")
let lista = window.document.querySelector("select#flista")
let res = window.document.getElementById("res")
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<=100){
       return true
    }else
       return false
}

function isLista(n, l){
   if(l.indexOf(Number(n)) != -1){
       return true
   }else
       return false
}

function adicionar(){
  if(isNumero(num.value) && !isLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement("option")
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  }else{
    window.alert("Informe valores válidos!")
  }
  num.value = ''
  num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert("Adicione valores antes de finalizar")
    }else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
          soma += valores[pos]
          if(valores[pos]>maior){
            maior = valores[pos]
          }if(valores[pos]<menor){
            menor = valores[pos]
          }
        }
        media = soma / total  
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número da lista é: ${maior}<p/>`
        res.innerHTML += `<p>O menor número da lista é: ${menor}<p/>`
        res.innerHTML += `<p>A soma dos valores são: ${soma}<p/>`
        res.innerHTML += `<p>A média dos valores são: ${media}<p/>`
    }
}