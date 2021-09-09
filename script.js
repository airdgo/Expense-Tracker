const inputName = document.getElementById('input-name');
const inputDate = document.getElementById('input-date');
const inputAmount = document.getElementById('input-amount');
const addExpenseButton = document.getElementById('add-expense');
const table = document.getElementById('table');

addExpenseButton.addEventListener('click', e => {
    e.preventDefault();

    addExpense();
})

function addExpense () {
    
    insertName();

    resetInput();

}

function insertName() {

    let tableRow = table.insertRow();
    nameCell = tableRow.insertCell(0);
    dateCell = tableRow.insertCell(1);
    amountCell = tableRow.insertCell(2);
    nameCell.innerText = inputName.value;
    dateCell.innerText = inputDate.value;
    amountCell.innerText = inputAmount.value;
}

const resetInput = () => {
    inputName.value = "";
    inputDate.value = "";
    inputAmount.value = "";
}