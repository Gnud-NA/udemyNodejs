//schema categories
let categories = [
    {
        id: 1,
        name: "Development"
    },
    {
        id: 2,
        name: "Bussiness"
    },
    {
        id: 3,
        name: "Finance"
    },
    {
        id: 4,
        name: "Design"
    },
    {
        id: 5,
        name: "Marketing"
    }
]

function getCategories() {
    return categories;
}

module.exports = {
    getCategories
}