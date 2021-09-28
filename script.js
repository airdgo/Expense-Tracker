// Select the items
const inputName = document.getElementById("input-name");
const inputDate = document.getElementById("input-date");
const inputAmount = document.getElementById("input-amount");
const submitExpense = document.getElementById("add-expense");
const tableBody = document.getElementById("table-body");

// Get item from local storage
let expenseTracker = localStorage.getItem("TRAK");

// Show expenses on the page
showExpenses();

// Add item when user clicks add expense
submitExpense.addEventListener("click", (e) => {
	e.preventDefault();
	// Check if user completed input filds
	if (
		inputName.value == "" ||
		inputDate.value == "" ||
		inputAmount.value == ""
	) {
		alert("Please complete all filds");
	} else {
		loadLocalStorage();
		showExpenses();
	}
});

// Load local storage function
function loadLocalStorage() {
	let expenseTracker = localStorage.getItem("TRAK");
	if (expenseTracker) {
		expenseTrackerObj = JSON.parse(expenseTracker);
	} else {
		expenseTrackerObj = [];
	}

	myObj = {
		name: inputName.value,
		date: inputDate.value,
		amount: inputAmount.value,
	};

	expenseTrackerObj.push(myObj);

	localStorage.setItem("TRAK", JSON.stringify(expenseTrackerObj));
}

// Show expenses function
function showExpenses() {
	let expenseTracker = localStorage.getItem("TRAK");
	let tableBody = document.getElementById("table-body");
	if (expenseTracker) {
		expenseTrackerObj = JSON.parse(expenseTracker);
	} else {
		expenseTrackerObj = [];
	}

	let item = "";
	expenseTrackerObj.forEach((element, index) => {
		item += `
                    <tr id="${index}">
                        <td>${element.name}</td>
                        <td>${element.date}</td>
                        <td>${element.amount}</td>
                        <td><i class="far fa-window-close remove-button" job="delete"></i></td>
                    </tr>
                `;
	});

	if (expenseTrackerObj != 0) {
		tableBody.innerHTML = item;
	} else {
		tableBody.innerHTML = `<tr><td colspan="4"><p>No expenses added yet</p></td></tr>`;
	}

	// Reset input filds
	inputName.value = "";
	inputDate.value = "";
	inputAmount.value = "";
}

// Remove an item
function removeItem(element) {
	let expenseTracker = localStorage.getItem("TRAK");
	if (expenseTracker) {
		expenseTrackerObj = JSON.parse(expenseTracker);
	} else {
		expenseTrackerObj = [];
	}
	expenseTrackerObj.splice(element, 1);
	localStorage.setItem("TRAK", JSON.stringify(expenseTrackerObj));
}

// Target elements created dynamically
tableBody.addEventListener("click", (e) => {
	let expenseTracker = localStorage.getItem("TRAK");
	if (expenseTracker) {
		expenseTrackerObj = JSON.parse(expenseTracker);
	} else {
		expenseTrackerObj = [];
	}
	const element = e.target;
	const removeButtonClass = "far fa-window-close remove-button";

	if (element.className === removeButtonClass) {
		removeItem(expenseTrackerObj[element.parentElement.parentElement.id]);
		if (expenseTrackerObj.length != 0) {
			element.parentElement.parentElement.classList.add("remove-row");
		} else {
			location.reload();
		}
	}
});
