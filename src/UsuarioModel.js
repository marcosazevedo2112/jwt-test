// FUNCÇÕES BASICAS DE CRUD NO BANCO DE DADOS MOCK

const data = require('../data/mock.js');

ops = {
    getById: (id) => data.find(item => {
        if (item.id == id) {
            return item;
        }
    }),
    getAll: () => data,
    create: (item) => {
        data.push(item)
        return item
    },
    getPassword: (id) => data.find(item => item.id === id).password,
    getByUsername: (username) => data.find(item => item.username === username)
}

module.exports = ops;