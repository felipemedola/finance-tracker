
let totalIncomes = 0;
let totalExpenses = 0;

function add() {
    let initialBalance = Number(document.getElementById('balance__value').value);

    let movementValue = Number(document.getElementById('movement__value').value);
    let movementName = document.getElementById('movement__establishment').value;
    let movementType = document.getElementById('movement__type').value;

    let movementHistory = document.getElementById('movement__history');
    movementHistory.innerHTML += `
    <span class="texto-azul">Valor: R$ ${movementValue}</span>
    Estabelecimento: ${movementName}
    <span class="texto-azul">Tipo: ${movementType}</span>
    <br>`

    // console.log(initialBalance, movementName, movementValue, movementType)
    let incomesValue = document.getElementById('movement__incomes');
    let expensesValue = document.getElementById('movement__expenses');

    if (movementType == 'Receita') {
        totalIncomes += movementValue;
        incomesValue.value = totalIncomes;
    } else {
        totalExpenses += movementValue;
        expensesValue.value = totalExpenses;
    }

    let finalBalance = document.getElementById('movement__final');

    finalBalance.value = initialBalance + totalIncomes - totalExpenses;
}

