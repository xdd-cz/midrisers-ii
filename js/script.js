
// Product Data
const products = [
    {
        id: 1,
        title: "Smart Inverter Refrigerator",
        price: "NRP 85,999",
        brand: "Samsung",
        model: "RT56K7040SL",
        rating: 4.7,
        description: "520L Double Door with AI Energy Saving Technology and Digital Inverter Compressor for quiet operation and energy efficiency. Features Twin Cooling Plus technology to keep food fresh for longer and SmartThings connectivity for remote monitoring.",
        features: [
            "520 Liters Capacity",
            "Digital Inverter Compressor",
            "Twin Cooling Plus™",
            "All-around Cooling",
            "SmartThings Connectivity",
            "AI Energy Mode",
            "Metal Cooling"
        ],
        images: [
            "./assets/ref.jpg",
            "https://via.placeholder.com/600x600?text=Refrigerator+Inside",
            "https://via.placeholder.com/600x600?text=Refrigerator+Panel"
        ],
        category: "Kitchen Appliances"
    },
    {
        id: 2,
        title: "Front Load Washing Machine",
        price: "NRP 72,500",
        brand: "LG",
        model: "FHM1207ZDL",
        rating: 4.5,
        description: "9kg capacity with Steam Wash and Allergy Care technology to remove up to 99.9% of allergens and bacteria. Features AI Direct Drive motor for optimized washing performance and TurboWash 360° for faster cleaning.",
        features: [
            "9 kg Washing Capacity",
            "AI Direct Drive™ Motor",
            "Steam™ Allergy Care",
            "TurboWash™ 360°",
            "SmartThinQ™ Enabled",
            "6 Motion DD Technology",
            "Auto Dose"
        ],
        images: [
            "./assets/wash.jpg",
            "https://via.placeholder.com/600x600?text=Washing+Machine+Panel",
            "https://via.placeholder.com/600x600?text=Washing+Machine+Inside"
        ],
        category: "Laundry"
    },
    {
        id: 3,
        title: "Inverter Split AC",
        price: "NRP 99,999",
        brand: "Daikin",
        model: "FTKF35TV16U",
        rating: 4.8,
        description: "1.5 Ton 5-Star with Wi-Fi Control and PM 2.5 Filter for clean and cool air with energy efficiency. Features Coanda airflow for wider air distribution and Econo mode for energy savings.",
        features: [
            "1.5 Ton Capacity",
            "5 Star Energy Rating",
            "Wi-Fi Enabled",
            "PM 2.5 Filter",
            "Copper Condenser",
            "Coanda Airflow",
            "Econo Mode"
        ],
        images: [
            "./assets/ac.jpg",
            "https://via.placeholder.com/600x600?text=AC+Remote",
            "https://via.placeholder.com/600x600?text=AC+Installation"
        ],
        category: "Cooling & Heating"
    },
    {
        id: 4,
        title: "4K Ultra HD Smart TV",
        price: "NRP 65,000",
        brand: "Sony",
        model: "X80J",
        rating: 4.6,
        description: "55-inch 4K Ultra HD Smart TV with Dolby Vision and Android TV for a premium viewing experience. Features 4K X-Reality PRO for enhanced picture quality and Google Assistant built-in for voice control.",
        features: [
            "55-inch 4K Display",
            "Dolby Vision & Atmos",
            "Android TV",
            "4K X-Reality PRO",
            "Google Assistant Built-in",
            "TRILUMINOS Pro",
            "Game Mode"
        ],
        images: [
            "./assets/tv.jpg",
            "https://via.placeholder.com/600x600?text=TV+Side",
            "https://via.placeholder.com/600x600?text=TV+Remote"
        ],
        category: "Entertainment"
    },
    {
        id: 5,
        title: "Convection Microwave Oven",
        price: "NRP 28,750",
        brand: "Panasonic",
        model: "NN-CT645BFDG",
        rating: 4.3,
        description: "32L capacity with Grill and 101 Auto Cook Menu for versatile cooking options in one appliance. Features Inverter Technology for even cooking and Eco mode for energy savings.",
        features: [
            "32 Liters Capacity",
            "Convection + Grill",
            "101 Auto Cook Menu",
            "Inverter Technology",
            "Eco Mode",
            "Auto Defrost",
            "Child Lock"
        ],
        images: [
            "./assets/oven.webp",
            "https://via.placeholder.com/600x600?text=Microwave+Inside",
            "https://via.placeholder.com/600x600?text=Microwave+Panel"
        ],
        category: "Kitchen Appliances"
    },
    {
        id: 6,
        title: "Digital Air Fryer",
        price: "NRP 12,999",
        brand: "Philips",
        model: "HD9252/90",
        rating: 4.4,
        description: "5.5L capacity with 8 Preset Cooking Functions for healthy frying with little to no oil. Features Rapid Air Technology for even cooking and dishwasher safe parts for easy cleaning.",
        features: [
            "5.5 Liters Capacity",
            "8 Preset Menus",
            "Rapid Air Technology",
            "Digital Touch Screen",
            "Dishwasher Safe Parts",
            "Overheat Protection",
            "60 Min Timer"
        ],
        images: [
            "./assets/air.jpg",
            "https://via.placeholder.com/600x600?text=Air+Fryer+Top",
            "https://via.placeholder.com/600x600?text=Air+Fryer+Basket"
        ],
        category: "Kitchen Appliances"
    },
    {
        id: 7,
        title: "RO+UV Water Purifier",
        price: "NRP 32,500",
        brand: "Kent",
        model: "Grand Plus",
        rating: 4.5,
        description: "7-Stage Purification with Mineral Guard Technology that retains essential natural minerals in water. Features Smart Alert System for filter change indication and 8 liters storage capacity.",
        features: [
            "RO+UV+UF+TDS Control",
            "7 Stage Purification",
            "Mineral Guard Technology",
            "8 Liters Storage",
            "Smart Alert System",
            "Zero Water Wastage",
            "Wall Mountable"
        ],
        images: [
            "./assets/pure.jpg",
            "https://via.placeholder.com/600x600?text=Water+Purifier+Side",
            "https://via.placeholder.com/600x600?text=Water+Purifier+Tank"
        ],
        category: "Kitchen Appliances"
    },
    {
        id: 8,
        title: "Robot Vacuum Cleaner",
        price: "NRP 45,000",
        brand: "Xiaomi",
        model: "Mi Robot Vacuum-Mop",
        rating: 4.6,
        description: "Smart Mapping with App Control and 2000Pa strong suction for thorough cleaning. Features LDS Laser Navigation for accurate mapping and multi-floor mapping capability.",
        features: [
            "LDS Laser Navigation",
            "2000Pa Strong Suction",
            "App & Voice Control",
            "Multi-floor Mapping",
            "5200mAh Battery",
            "Mop Attachment Included",
            "Real-time Mapping"
        ],
        images: [
            "./assets/vacc.jpg",
            "https://via.placeholder.com/600x600?text=Robot+Vacuum+Side",
            "https://via.placeholder.com/600x600?text=Robot+Vacuum+Dock"
        ],
        category: "Home Appliances"
    }
];

// DOM Elements
const productContainer = document.getElementById('product-container');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.getElementById('thumbnails');
const detailTitle = document.getElementById('detailTitle');
const detailPrice = document.getElementById('detailPrice');
const detailBrand = document.getElementById('detailBrand');
const detailModel = document.getElementById('detailModel');
const detailRating = document.getElementById('detailRating');
const detailDescription = document.getElementById('detailDescription');
const detailFeatures = document.getElementById('detailFeatures');

// Render Product Listing
function renderProducts() {
    productContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = product.id;
        
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.images[0]}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
                <p class="product-description">${product.description.substring(0, 100)}...</p>
                <div class="product-actions">
                    <button class="btn">Add to Cart</button>
                    <button class="btn btn-secondary view-more-btn">View Details</button>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
        
        // Add click event to view details button
        productCard.querySelector('.view-more-btn').addEventListener('click', () => {
            showProductDetail(product.id);
        });
    });
}

// Show Product Detail in Modal
function showProductDetail(productId) {
    const product = products.find(p => p.id == productId);
    
    if (!product) return;
    
    // Update product details in modal
    detailTitle.textContent = product.title;
    detailPrice.textContent = product.price;
    detailBrand.textContent = product.brand;
    detailModel.textContent = product.model;
    detailRating.textContent = product.rating;
    detailDescription.textContent = product.description;
    
    // Update features
    detailFeatures.innerHTML = '';
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        detailFeatures.appendChild(li);
    });
    
    // Update main image
    mainImage.innerHTML = `<img src="${product.images[0]}" alt="${product.title}">`;
    
    // Update thumbnails
    thumbnails.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.innerHTML = `<img src="${image}" alt="${product.title} ${index + 1}">`;
        thumbnail.addEventListener('click', () => {
            mainImage.innerHTML = `<img src="${image}" alt="${product.title}">`;
        });
        thumbnails.appendChild(thumbnail);
    });
    
    // Show modal
    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize
renderProducts();
