let users = [];

function displayUsers() {

    let table = document.getElementById("tableBody");

    table.innerHTML = "";

    users.forEach(user => {

        table.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.balance}</td>
        </tr>
        `;

    });

}

// Add User
function addUser() {

    let id = Number(document.getElementById("id").value);
    let name = document.getElementById("name").value;
    let balance = Number(document.getElementById("balance").value);

    let found = users.find(user => user.id === id);

    if(found){
        alert("ID already exists");
        return;
    }

    users.push({
        id:id,
        name:name,
        balance:balance
    });

    displayUsers();
}

// Edit Balance
function editUserBalanceById(){

    let id = Number(prompt("Enter User ID"));
    let newBalance = Number(prompt("Enter New Balance"));

    let user = users.find(user => user.id === id);

    if(user){

        user.balance = newBalance;

        alert("Balance Updated");

    }else{

        alert("User Not Found");

    }

    displayUsers();

}

// Transfer Balance
function transferBalance(){

    let fromID = Number(prompt("Transfer From ID"));
    let toID = Number(prompt("Transfer To ID"));
    let amount = Number(prompt("Amount"));

    let sender = users.find(user => user.id === fromID);
    let receiver = users.find(user => user.id === toID);

    if(!sender || !receiver){

        alert("User Not Found");
        return;

    }

    if(sender.balance < amount){

        alert("Not Enough Balance");
        return;

    }

    sender.balance -= amount;
    receiver.balance += amount;

    alert("Transfer Done");

    displayUsers();

}

// Delete User
function deleteUserById(){

    let id = Number(prompt("Enter User ID"));

    let index = users.findIndex(user => user.id === id);

    if(index == -1){

        alert("User Not Found");
        return;

    }

    users.splice(index,1);

    alert("User Deleted");

    displayUsers();

}