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
    
    let tableRow = table.insertRow();
    nameCell = tableRow.insertCell(0);
    dateCell = tableRow.insertCell(1);
    amountCell = tableRow.insertCell(2);
    deleteButtonCell = tableRow.insertCell(3);

    nameCell.innerText = inputName.value;
    dateCell.innerText = inputDate.value;
    amountCell.innerText = inputAmount.value;
    deleteButtonFunction();

    resetInput();

}

const deleteButtonFunction = () => {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.onclick = () => {
        var td = event.target.parentNode; 
        var tr = td.parentNode;
        tr.parentNode.removeChild(tr);
    };
    deleteButtonCell.appendChild(deleteButton);
}

const resetInput = () => {
    inputName.value = "";
    inputDate.value = "";
    inputAmount.value = "";
}