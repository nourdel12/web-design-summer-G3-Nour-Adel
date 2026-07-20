let ids = [101, 102, 103, 104];

let userId = prompt("Enter an ID:");

let found = ids.find(id => id === userId);

if (found) {
    alert("ID already exists.");
    console.log("ID already exists.");
} else {
    ids.push(userId);
    alert("ID added successfully.");
    console.log("Updated array:", ids);
}