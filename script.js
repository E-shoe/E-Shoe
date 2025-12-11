const shoes = [
    {
        name: "AirMax Pro X",
        price: "₹4,499",
        img: "https://i.imgur.com/fQF1pMc.png",
        desc: "Next-gen cushioning with neon energy return system."
    },
    {
        name: "Urban Runner V2",
        price: "₹3,299",
        img: "https://i.imgur.com/xZQZgQG.png",
        desc: "Premium lightweight shoe for futuristic street wear."
    },
    {
        name: "SportX Boost 2049",
        price: "₹5,199",
        img: "https://i.imgur.com/TXz2F4L.png",
        desc: "Engineered for athletes with adaptive power mesh."
    },
    {
        name: "NeoFlex Vision",
        price: "₹3,999",
        img: "https://i.imgur.com/0Wv7k4o.png",
        desc: "Glass-design inspired shoe with hologram reflect tech."
    }
];

const productGrid = document.getElementById("productGrid");

shoes.forEach((shoe, i) => {
    productGrid.innerHTML += `
        <div class="product-card">
            <img src="${shoe.img}">
            <h3>${shoe.name}</h3>
            <p>${shoe.price}</p>
        </div>
    `;
});

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
