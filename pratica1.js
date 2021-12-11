const pessoas = [
    { nome: "Fernando", idade: 17 },
    { nome: "Ana", idade: 25 },
    { nome: "Paula", idade: 35 },
    { nome: "Paulo", idade: 34 },
    { nome: "Gustavo", idade: 36 },
    { nome: "João", idade: 43 },
    { nome: "Jaqueline", idade: 26 },
    { nome: "Bernado", idade: 18 },
    { nome: "Gabriel", idade: 39 }
];


pessoas.forEach((pessoa) => {
    const nome = pessoa["nome"];
    const idade = pessoa["idade"];

    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log('===============');
})