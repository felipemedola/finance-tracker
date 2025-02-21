
let totalIncomes = 0;
let totalExpenses = 0;

document.getElementById('movement__incomes').value = 'R$ 0.00'
document.getElementById('movement__expenses').value = 'R$ 0.00'
document.getElementById('movement__final').value = 'R$ 0.00'

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

        let uniqueId = Date.now();
        console.log(uniqueId)

        let movementEntry = document.createElement('div');
        movementEntry.id = `movement-${uniqueId}`;
        movementEntry.innerHTML = `
            <span class="movement__value--history">Valor: ${movementValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            <span class="movement__name--history">Estabelecimento: ${movementName}</span>
            <span class="movement__type--history">Tipo: ${movementType}</span>
            <button onclick="removeMovement(${uniqueId}, ${movementValue}, '${movementType}')">Excluir</button>
        <br>`

        movementHistory.appendChild(movementEntry);

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

        document.getElementById('movement__value').value = '';
        document.getElementById('movement__establishment').value = '';
    }
}

function removeMovement(id, movementValue, movementType) {
    let element = document.getElementById(`movement-${id}`);
    if (element) {
        element.remove();
    }

    let incomesValue = document.getElementById('movement__incomes');
    let expensesValue = document.getElementById('movement__expenses');

    if (movementType == 'Receita') {
        totalIncomes -= movementValue;
        incomesValue.value = totalIncomes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    } else {
        totalExpenses -= movementValue;
        expensesValue.value = totalExpenses.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    let initialBalance = Number(document.getElementById('balance__value').value);
    let finalBalance = document.getElementById('movement__final');

    finalBalance.value = (initialBalance + totalIncomes - totalExpenses).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function end() {
    window.location.reload();
}