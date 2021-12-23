// create schema account
let accounts = [
    {
        email: "admin@gmail.com",
        password: "123456",
    },
    {
        email: "user@gmail.com",
        password: "123456789"
    }
]

// get account by id
function getAccountById(id) {
    return accounts[id-1];
}

module.exports = {
    getAccountById
}