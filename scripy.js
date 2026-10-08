let expenses = [];

function addExpense() {

    const description = document.getElementById("description").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;

    if (description === "" || amount === 0 || category === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    const expense = {
        description: description,
        amount: amount,
        category: category,
        date: date
    };

    expenses.push(expense);

    displayExpenses();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("date").value = "";
}


function displayExpenses() {

    const expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense) {

        total = total + expense.amount;

        const div = document.createElement("div");

        div.className = "expense-item";

        div.innerHTML = `
            <strong>${expense.description}</strong><br>
            Amount: ₹${expense.amount}<br>
            Category: ${expense.category}<br>
            Date: ${expense.date}
        `;

        expenseList.appendChild(div);
    });

    document.getElementById("totalAmount").textContent = total;
}


function searchExpenses() {

    const searchText = document
        .getElementById("search")
        .value
        .toLowerCase();

    const expenseItems = document.querySelectorAll(".expense-item");

    expenseItems.forEach(function(item) {

        if (item.textContent.toLowerCase().includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
}