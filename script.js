const shoes = [
    {
        name: "AirMax Pro",
        price: "₹3,999",
        img: "https://i.imgur.com/fQF1pMc.png",
        desc: "Lightweight running shoe with breathable mesh and enhanced cushioning."
    },
    {
        name: "Urban Runner",
        price: "₹2,799",
        img: "https://i.imgur.com/xZQZgQG.png",
        desc: "Perfect for daily use with flexible support and urban street style."
    },
    {
        name: "SportX Boost",
        price: "₹4,499",
        img: "https://i.imgur.com/TXz2F4L.png",
        desc: "High-performance shoe designed for athletes seeking energy return."
    },
    {
        name: "Flex Vision",
        price: "₹3,299",
        img: "https://i.imgur.com/0Wv7k4o.png",
        desc: "Comfortable and stylish, ideal for long walks and casual wear."
    }
];

// Load shoes into homepage
const productGrid = document.getElementById("productGrid");

shoes.forEach((shoe, index) => {
    productGrid.innerHTML += `
        <div class="product-card" onclick="showDetails(${index})">
            <img src="${shoe.img}">
            <h3>${shoe.name}</h3>
            <p>${shoe.price}</p>
        </div>
    `;
});

// Modal functionality
const modal = document.getElementById("productModal");

function showDetails(i) {
    document.getElementById("modalImg").src = shoes[i].img;
    document.getElementById("modalName").innerText = shoes[i].name;
    document.getElementById("modalPrice").innerText = shoes[i].price;
    document.getElementById("modalDesc").innerText = shoes[i].desc;

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

window.onclick = function(e) {
    if (e.target === modal) modal.style.display = "none";
};
