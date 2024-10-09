document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pageNumber = document.querySelector('.page-number');
    const showSelect = document.getElementById('show');
    const addProductBtn = document.getElementById('add-product-btn');
    const modal = document.getElementById('add-product-modal');
    const closeBtn = modal.querySelector('.close');
    const addProductForm = document.getElementById('add-product-form');
    const primaryImageUpload = document.getElementById('primary-image');
    const primaryImagePreview = document.getElementById('primary-image-preview');
    const additionalImagesContainer = document.querySelector('.additional-images');
    const addMoreImagesBtn = document.querySelector('.add-more-images');

    let currentPage = 1;
    let productsPerPage = parseInt(showSelect.value);

    const products = [
        { name: 'UHT Homogenised Milk 1L', price: 'KES 68.00', image: '/images/UHT Milk.jpg', quantity: 15 },
        { name: 'KCC Mala Plain Milk 500ml', price: 'KES 68.00', image: '/images/Mala TR 500ml.jpg', quantity: 8 },
        { name: 'KCC Mala Plain Milk 1L', price: 'KES 68.00', image: '/images/Mala 1lt.jpg', quantity: 0 },
        { name: 'KCC Mala Plain Milk 250ml', price: 'KES 68.00', image: '/images/Mala Sleeved Bootle 250Ml.jpg', quantity: 20, onSale: true, salePercentage: 15 },
        { name: 'Delight Strawberry 250ml', price: 'KES 68.00', image: '/images/Delight Strawberry-250ml.jpg', quantity: 12 },
        { name: 'Delight Vanilla 150ml', price: 'KES 68.00', image: '/images/Delight Vanilla-150ml.jpg', quantity: 9 },
        { name: 'Delight Vanilla 500ml', price: 'KES 68.00', image: '/images/Delight Vanilla-TR 500ml.jpg', quantity: 5 },
        { name: 'Delight Coconut 500ml', price: 'KES 68.00', image: '/images/Delight Coconut-500ml.jpg', quantity: 7 },
        { name: 'KCC Gold Crown Fresh Milk 500ml', price: 'KES 68.00', image: '/images/Gold Crown.jpg', quantity: 10 },
        { name: 'KCC Gold Crown Fresh Milk Pouch 500ml', price: 'KES 68.00', image: '/images/Gold Crown Pouch.jpg', quantity: 25 },
        { name: 'KCC Gold Crown Fresh Milk 200ml', price: 'KES 68.00', image: '/images/KCC 200ml.jpg', quantity: 30 },
        { name: 'KCC Fresh Milk Pouch 200ml', price: 'KES 68.00', image: '/images/KCC Fresh Milk.jpg', quantity: 15 },
        { name: 'KCC Fresh Milk 500ml', price: 'KES 68.00', image: '/images/KCC Fresh Milk 500ml.jpg', quantity: 12 },
        { name: 'KCC Gold Crown Fat Free 500ml', price: 'KES 68.00', image: '/images/K.C.C Gold Crown Fat Free 500Ml.jpeg', quantity: 6 },
        { name: 'KCC Gold Crown Lactose Free 500ml', price: 'KES 68.00', image: '/images/K.C.C Gold Crown Lactose Free 500Ml.jpeg', quantity: 10 },
        { name: 'KCC Safariland Powder', price: 'KES 68.00', image: '/images/Safariland Powder.jpg', quantity: 20 },
        { name: 'KCC Rindless Cheddar Cheese 150Gm', price: 'KES 68.00', image: '/images/K.C.C Rindless Cheddar Cheese 150Gm.jpg', quantity: 8 },
        { name: 'KCC Rindless Cheddar Cheese 250Gm', price: 'KES 68.00', image: '/images/K.C.C Cheddar Cheese 250Gm.jpg', quantity: 9 },
        { name: 'KCC Rindless Cheddar Cheese 500Gm', price: 'KES 68.00', image: '/images/K.C.C Rindless Cheddar Cheese 500Gm.jpg', quantity: 7 },
        { name: 'KCC Butter Salted Butter 500g', price: 'KES 68.00', image: '/images/K.C.C Salted Butter 500G Tub.jpeg', quantity: 15 },
        { name: 'KCC Salted Butter 500Gms', price: 'KES 68.00', image: '/images/K.C.C Salted Butter 500G.jpeg', quantity: 20 },
        { name: 'KCC Unsalted Butter 500g', price: 'KES 68.00', image: '/images/K.C.C Unsalted Butter 500G.jpeg', quantity: 10 },
        { name: 'KCC Superfine Ghee', price: 'KES 68.00', image: '/images/KCC Super Fine Ghee.png', quantity: 12 },
        { name: 'KCC Natural Yorghurt 500ml', price: 'KES 68.00', image: '/images/Natural Yorghurt.png', quantity: 5 },
        { name: 'KCC Natural Yorghurt 250ml', price: 'KES 68.00', image: '/images/Natural Yorghurt 250ml.png', quantity: 18 },
        { name: 'La Yorghurt Strawberry 250ml', price: 'KES 68.00', image: '/images/La Yoghurt Strawberry-250ml.jpg', quantity: 12 },
        { name: 'La Yorghurt Coconut 250ml', price: 'KES 68.00', image: '/images/La Yoghurt Coconut-250ml.jpg', quantity: 6 },
        { name: 'La Yorghurt Pineapple 250ml', price: 'KES 68.00', image: '/images/La Yoghurt Pineapple-250ml.jpg', quantity: 15 },
        { name: 'La Yorghurt Vanilla 250ml', price: 'KES 68.00', image: '/images/La Yoghurt Vanilla-250ml.jpg', quantity: 9 }
    ];

    function renderProducts() {
        productGrid.innerHTML = '';
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;
        const pageProducts = products.slice(start, end);

        pageProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            let statusTag = '';
            if (product.quantity === 0) {
                statusTag = '<span class="product-tag out-of-stock">Out of stock</span>';
            } else if (product.quantity <= 10) {
                statusTag = '<span class="product-tag almost-out-of-stock">Almost out of stock</span>';
            } else if (product.onSale) {
                statusTag = `<span class="product-tag on-sale">${product.salePercentage}% Off</span>`;
            }

            productCard.innerHTML = `
                ${statusTag}
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <p class="product-quantity">Quantity: ${product.quantity}</p>
                    <button class="view-product">View Product</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        updatePagination();
    }

    function updatePagination() {
        pageNumber.textContent = currentPage;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === Math.ceil(products.length / productsPerPage);
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            currentPage++;
            renderProducts();
        }
    });

    showSelect.addEventListener('change', () => {
        productsPerPage = parseInt(showSelect.value);
        currentPage = 1;
        renderProducts();
    });

    // Modal functionality
    addProductBtn.onclick = () => {
        modal.style.display = "block";
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Image upload logic
    function handleImageUpload(input, previewElement) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewElement.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    primaryImageUpload.onchange = (e) => {
        handleImageUpload(e.target, primaryImagePreview);
    };

    addMoreImagesBtn.onclick = () => {
        const newUpload = document.createElement('div');
        newUpload.className = 'additional-image-upload';
        newUpload.innerHTML = `
            <input type="file" accept="image/*">
            <i class="upload-icon ri-upload-2-line"></i>
        `;
        const fileInput = newUpload.querySelector('input[type="file"]');
        fileInput.onchange = (e) => {
            handleImageUpload(e.target, newUpload);
        };
        additionalImagesContainer.insertBefore(newUpload, addMoreImagesBtn);
    };

    // Handle existing additional image uploads
    document.querySelectorAll('.additional-image-upload input[type="file"]').forEach(input => {
        input.onchange = (e) => {
            handleImageUpload(e.target, e.target.closest('.additional-image-upload'));
        };
    });

    // Handle form submission
    addProductForm.onsubmit = (e) => {
        e.preventDefault();
        console.log("New product submitted:", {
            name: document.getElementById('product-name').value,
            price: document.getElementById('product-price').value,
            quantity: document.getElementById('product-quantity').value,
            onSale: document.getElementById('on-sale').checked,
            salePercentage: document.getElementById('sale-percentage').value,
        });
        modal.style.display = "none";
    };

    // Handle "On Sale" checkbox
    document.getElementById('on-sale').onchange = (e) => {
        document.getElementById('sale-percentage').disabled = !e.target.checked;
    };

    // Initial render
    renderProducts();
});