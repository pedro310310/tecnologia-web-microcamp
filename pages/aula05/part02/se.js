function igual() {
    var x = 2
    var y = 2
    let res
    if (x == y) {
        res = "Iguais"
    } else {
        res = "Diferentes"
    }
    document.getElementById("resultado-igual").innerHTML = res
    document.getElementById("confirmado-igual").innerHTML = "Resultado ✔"
}
function confirmado() {
    document.getElementById("confirmado").innerHTML = "Resultado ✔"
}

function diferente(){
    var x = 2
    var y = 2 
    let res
    if(x!=y) 
  {
res = "Diferente"
} else {
res = "Iguais"
}
document.getElementById("resultado-diferente").innerHTML = res
    document.getElementById("confirmado-diferente").innerHTML = "Resultado ✔"
}
    