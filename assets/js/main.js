
function adicionar() {
    let saldoInicial = Number(document.getElementById('balance__value').value);
    let saldoFinal = document.getElementById('movement__final');
    
    console.log(saldoInicial);

    saldoFinal.value = saldoInicial + 1;

    console.log(saldoFinal)
}
