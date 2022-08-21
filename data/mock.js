//BANCO DE DADOS MOCK GERADO COM O COMANDO:
let data = [
    ...Array(10).fill(0).map((_, i) => ({
        id: i,
        username: `user${i}`,
        age: Math.floor(Math.random() * 100),
        password: '123456',
        email: `u${i}@g.c`,
        address: `address${i}`,
        phone: `phone${i}`,
    }))
]

module.exports = data