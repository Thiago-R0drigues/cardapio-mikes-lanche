
const sandwiches = [
    {
        name: "Mistão",
        description: "3 fatias de pão, presunto, queijo.",
        price: "R$ 8,00"
    },
    {
        name: "X Burger",
        description: "Pão, carne, queijo.",
        price: "R$ 7,00"
    },
    {
        name: "X Egg",
        description: "Pão, carne, queijo, ovo, alface, tomate.",
        price: "R$ 8,00"
    },
    {
        name: "X Maionese",
        description: "Pão, carne, queijo, presunto, alface, tomate.",
        price: "R$ 9,00"
    },
    {
        name: "X Salada",
        description: "Pão, carne, queijo, presunto, ovo, alface, tomate.",
        price: "R$ 10,00"
    },
    {
        name: "X Salada Especial 1",
        description: "Pão, 2 carnes, queijo, presunto, ovo, alface, tomate.",
        price: "R$ 13,00"
    },
    {
        name: "X Salada Especial 2",
        description: "Pão, carne, queijo, presunto, ovo, molho rosé, batata palha, alface, tomate.",
        price: "R$ 13,00"
    },
    {
        name: "X Salada Bacon",
        description: "Pão, carne, queijo, presunto, ovo, bacon, alface, tomate.",
        price: "R$ 13,00"
    },
    {
        name: "X Bacon",
        description: "Pão, carne, queijo, ovo, bacon, alface, tomate.",
        price: "R$ 13,00"
    },
    {
        name: "X Salsicha",
        description: "Pão, carne, queijo, ovo, salsicha, alface, tomate.",
        price: "R$ 13,00"
    },
    {
        name: "X Calabresa",
        description: "Pão, carne, queijo, ovo, calabresa, alface, tomate.",
        price: "R$ 13,00"
    },
    {
        name: "X Tudo",
        description: "Pão, carne, queijo, presunto, ovo, bacon, calabresa, salsicha, alface, tomate.",
        price: "R$ 17,00"
    },
    {
        name: "X Mike",
        description: "Pão, carne, queijo, presunto, ovo, bacon, calabresa, salsicha, banana, pepino, alface, tomate.",
        price: "R$ 20,00"
    }
];

const extras = [
    { name: "Bacon", price: "R$ 3,00" },
    { name: "Cebola", price: "R$ 2,00" },
    { name: "Queijo", price: "R$ 2,00" },
    { name: "Banana", price: "R$ 2,00" },
    { name: "Pepino (opcional)", price: "Gratuito" }
];

const drinks = [
    { name: "Sucos 300ml", price: "R$ 5,00" },
    { name: "Refrigerante em lata", price: "R$ 5,00" }
];


// Renderizar lanches
function renderSandwiches() {
    const container = document.querySelector("#sandwich-list");

    container.innerHTML = sandwiches.map(item => `
        <article class="sandwich-item">
            <div class="sandwich-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>

            <span class="price">${item.price}</span>
        </article>
    `).join("");
}


// Renderizar adicionais
function renderExtras() {
    const container = document.querySelector("#extras-list");

    container.innerHTML = extras.map(item => `
        <div class="simple-item">
            <span>${item.name}</span>
            <span class="price">${item.price}</span>
        </div>
    `).join("");
}


// Renderizar bebidas
function renderDrinks() {
    const container = document.querySelector("#drinks-list");

    container.innerHTML = drinks.map(item => `
        <div class="simple-item">
            <span>${item.name}</span>
            <span class="price">${item.price}</span>
        </div>
    `).join("");
}


// Ano automático
document.querySelector("#year").textContent =
    new Date().getFullYear();


// Inicialização
renderSandwiches();
renderExtras();
renderDrinks();
