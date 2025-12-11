function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Array of shoes (4 items)
const shoes = [
    {
        name: "Nike Air Zoom",
        price: "$129",
        img: "https://images.unsplash.com/photo-1606813909355-39f4e6ca9f0c?auto=format&fit=crop&w=800&q=60"
    },
    {
        name: "Adidas Ultraboost",
        price: "$149",
        img: "https://images.unsplash.com/photo-1600180758890-6c1c6b47a5c6?auto=format&fit=crop&w=800&q=60"
    },
    {
        name: "Puma Future Rider",
        price: "$109",
        img: "https://images.unsplash.com/photo-1528701800489-20be3c2a2f54?auto=format&fit=crop&w=800&q=60"
    },
    {
        name: "Reebok Classic Leather",
        price: "$99",
        img: "https://images.unsplash.com/photo-1580716482680-b63c216dad8f?auto=format&fit=crop&w=800&q=60"
    }
];

// Inject shoes dynamically
const productGrid = document.getElementById("productGrid");

shoes.forEach(shoe => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${shoe.img}" alt="${shoe.name}">
        <h3>${shoe.name}</h3>
        <p class="price">${shoe.price}</p>
        <button onclick="alert('Details Coming Soon')">View Details</button>
    `;
    productGrid.appendChild(card);
});
