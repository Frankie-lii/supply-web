document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
    const overlay = document.getElementById("overlay");

    // Open menu
    menuToggle.addEventListener("click", () => {
        nav.classList.add("active");
        overlay.classList.add("active");
    });

    // Close menu when clicking outside
    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    console.log("Home section loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("About Us section loaded successfully!");
});

// Sample Product Data with Prices in Kenyan Shillings (KES)
const products = [
    // Office Furniture (6 items)
    { id: 1, name: "Office Chair", price: "KES 15,800", category: "furniture", image: "images/office-chair.jpg", description: "Ergonomic office chair with lumbar support." },
    { id: 2, name: "Standing Desk", price: "KES 35,000", category: "furniture", image: "images/standing-desk.jpg", description: "Adjustable height desk for ergonomic working." },
    { id: 3, name: "Bookshelf", price: "KES 12,500", category: "furniture", image: "images/bookshelf.jpg", description: "Spacious wooden bookshelf for office storage." },
    { id: 4, name: "Executive Desk", price: "KES 50,000", category: "furniture", image: "images/executive-desk.jpg", description: "Modern executive desk with drawers." },
    { id: 5, name: "Filing Cabinet", price: "KES 18,200", category: "furniture", image: "images/filing-cabinet.jpg", description: "Steel filing cabinet for office organization." },
    { id: 6, name: "Conference Table", price: "KES 75,000", category: "furniture", image: "images/conference-table.jpg", description: "Large conference table for meetings." },

    // Computers & Accessories (6 items)
    { id: 7, name: "Laptop", price: "KES 120,000", category: "computers", image: "images/laptop.jpg", description: "Powerful laptop for work and gaming." },
    { id: 8, name: "Desktop PC", price: "KES 85,000", category: "computers", image: "images/desktop-pc.jpg", description: "High-performance desktop PC for office work." },
    { id: 9, name: "Mechanical Keyboard", price: "KES 7,500", category: "computers", image: "images/keyboard.jpg", description: "RGB mechanical keyboard for fast typing." },
    { id: 10, name: "Wireless Mouse", price: "KES 3,500", category: "computers", image: "images/mouse.jpg", description: "Ergonomic wireless mouse with Bluetooth." },
    { id: 11, name: "Monitor", price: "KES 22,000", category: "computers", image: "images/monitor.jpg", description: "Full HD 24-inch monitor with vibrant display." },
    { id: 12, name: "External SSD", price: "KES 18,000", category: "computers", image: "images/external-ssd.jpg", description: "Fast 1TB external SSD for backup storage." },

    // Printers & Scanners (8 items)
    { id: 13, name: "Printer", price: "KES 28,500", category: "printers", image: "images/printer.jpg", description: "All-in-one wireless printer for office use." },
    { id: 14, name: "Scanner", price: "KES 20,000", category: "printers", image: "images/scanner.jpg", description: "High-resolution scanner for documents." },
    { id: 15, name: "Inkjet Printer", price: "KES 18,000", category: "printers", image: "images/inkjet-printer.jpg", description: "Compact inkjet printer for home offices." },
    { id: 16, name: "Laser Printer", price: "KES 40,000", category: "printers", image: "images/laser-printer.jpg", description: "High-speed laser printer for bulk printing." },
    { id: 17, name: "3D Printer", price: "KES 150,000", category: "printers", image: "images/3d-printer.jpg", description: "Advanced 3D printer for prototypes." },
    { id: 18, name: "Printer Ink", price: "KES 2,500", category: "printers", image: "images/printer-ink.jpg", description: "Genuine ink cartridges for printers." },
    { id: 19, name: "Toner Cartridge", price: "KES 8,000", category: "printers", image: "images/toner-cartridge.jpg", description: "Long-lasting toner for laser printers." },
    { id: 20, name: "Photo Printer", price: "KES 50,000", category: "printers", image: "images/photo-printer.jpg", description: "Specialized photo printer for high-quality prints." },

    // Networking & Storage (6 items)
    { id: 21, name: "Router", price: "KES 9,500", category: "networking", image: "images/router.jpg", description: "High-speed WiFi router for seamless connectivity." },
    { id: 22, name: "Modem", price: "KES 12,000", category: "networking", image: "images/modem.jpg", description: "4G LTE modem for fast internet access." },
    { id: 23, name: "Network Switch", price: "KES 18,500", category: "networking", image: "images/network-switch.jpg", description: "8-port gigabit network switch for businesses." },
    { id: 24, name: "External Hard Drive", price: "KES 15,000", category: "networking", image: "images/external-hdd.jpg", description: "2TB external hard drive for extra storage." },
    { id: 25, name: "USB Flash Drive", price: "KES 2,000", category: "networking", image: "images/usb-flash.jpg", description: "64GB USB 3.0 flash drive for data transfer." },
    { id: 26, name: "Cloud Storage Plan", price: "KES 5,000/year", category: "networking", image: "images/cloud-storage.jpg", description: "1TB cloud storage plan for businesses." }
];

// Function to display products
function displayProducts(productList) {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = "";

    productList.forEach(product => {
        productContainer.innerHTML += `
            <div class="product" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <p>${product.description}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Function to filter products by category
function filterProducts(category) {
    if (category === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Function to handle search functionality
document.getElementById("search").addEventListener("keyup", function() {
    const searchValue = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue)
    );
    displayProducts(filteredProducts);
});

// Function to handle category filtering
document.getElementById("category-filter").addEventListener("change", function() {
    filterProducts(this.value);
});

// Function to add products to the cart
function addToCart(productId) {
    const selectedProduct = products.find(product => product.id === productId);
    alert(`${selectedProduct.name} has been added to your cart.`);
}

// Initialize by displaying all products
displayProducts(products);


// Function to search products
function searchProducts() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
}

// Function to filter products by category
function filterProducts() {
    const selectedCategory = document.getElementById("category-filter").value;

    if (selectedCategory === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === selectedCategory);
        displayProducts(filteredProducts);
    }
}

// Function to add to cart (for demo)
function addToCart(productId) {
    alert("Product added to cart: " + productId);
}

// Initialize Products on Page Load
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products);
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Why Choose Us section loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll(".service");

    services.forEach(service => {
        service.addEventListener("mouseover", () => {
            service.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        service.addEventListener("mouseleave", () => {
            service.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });

    console.log("Services section loaded successfully!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been sent. We’ll get back to you soon.`);

    // Clear form
    document.getElementById("contact-form").reset();
});