let users = [];


function addUser() {
    let id = prompt("Enter User ID:");
    let name = prompt("Enter User Name:");
    let balance = prompt("Enter User Balance:");

    let found = users.find(user => user.id === id);

    if (found) {
        alert("ID already exists!");
        return;
    }

    users.push({
        id: id,
        name: name,
        balance: balance
    });

    alert("User added successfully.");
    console.log(users);
}

function editUserBalanceById() {
    let id = prompt("Enter User ID:");
    let newBalance = prompt("Enter New Balance:");

    let user = users.find(user => user.id === id);

    if (user) {
        user.balance = newBalance;
        alert("Balance updated successfully.");
    } else {
        alert("User not found.");
    }

    console.log(users);
}

function transferBalance() {
    let fromID = prompt("Transfer From ID:");
    let toID =prompt("Transfer To ID:");
    let amount =prompt("Enter Amount:");

    let sender = users.find(user => user.id === fromID);
    let receiver = users.find(user => user.id === toID);

    if (!sender) {
        alert("Sender not found.");
        return;
    }

    if (!receiver) {
        alert("Receiver not found.");
        return;
    }

    if (amount <= 0) {
        alert("Invalid amount.");
        return;
    }

    if (sender.balance < amount) {
        alert("Insufficient balance.");
        return;
    }

    sender.balance -= amount;
    receiver.balance += amount;

    alert("Transfer completed successfully.");
    console.log(users);
}

function deleteUserById() {
    let id = prompt("Enter User ID:");

    let index = users.findIndex(user => user.id === id);

    if (index === -1) {
        alert("User not found.");
        return;
    }

    users.splice(index, 1);

    alert("User deleted successfully.");
    console.log(users);
}

function showUsers() {
    console.log(users);
}