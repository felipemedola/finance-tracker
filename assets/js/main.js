
let totalIncomes = 0;
let totalExpenses = 0;

function add() {
    let balanceValue = document.getElementById('balance__value').value;
    let movementValue = document.getElementById('movement__value').value;
    let establishmentValue = document.getElementById('movement__establishment').value;

    let numValue = Number(movementValue);
    let balanceNum = Number(balanceValue);

    if (balanceValue.trim() === '' || movementValue.trim() === '' || establishmentValue.trim() === ''){
        alert('Campos obrigatórios não podem ser nulos.')
    } else if (numValue <= 0 || balanceNum <= 0) {
        alert('O valor da movimentação deve ser maior que 0!');
    } else {
        let initialBalance = Number(document.getElementById('balance__value').value);

        let movementValue = Number(document.getElementById('movement__value').value);
        let movementName = document.getElementById('movement__establishment').value;
        let movementType = document.getElementById('movement__type').value;

        let movementHistory = document.getElementById('movement__history');
        movementHistory.innerHTML += `
        <span class="texto-azul">Valor: ${movementValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        Estabelecimento: ${movementName}
        <span class="texto-azul">Tipo: ${movementType}</span>
        <br>`

        let incomesValue = document.getElementById('movement__incomes');
        let expensesValue = document.getElementById('movement__expenses');

        if (movementType == 'Receita') {
            totalIncomes += movementValue;
            incomesValue.value = totalIncomes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        } else {
            totalExpenses += movementValue;
            expensesValue.value = totalExpenses.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }

        let finalBalance = document.getElementById('movement__final');

        finalBalance.value = (initialBalance + totalIncomes - totalExpenses).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}

function end() {
    window.location.reload();
}