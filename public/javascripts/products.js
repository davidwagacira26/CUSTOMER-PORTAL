document.addEventListener('DOMContentLoaded', function() {
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', sortProducts);

    function sortProducts() {
        const sortValue = sortSelect.value;
        const productGrid = document.querySelector('.product-grid');
        const products = Array.from(productGrid.children);

        products.sort((a, b) => {
            const aName = a.querySelector('p').textContent.trim();
            const bName = b.querySelector('p').textContent.trim();
            const aPrice = parseFloat(a.querySelector('strong').textContent.replace('KES ', ''));
            const bPrice = parseFloat(b.querySelector('strong').textContent.replace('KES ', ''));
            const aCategory = getCategoryFromName(aName);
            const bCategory = getCategoryFromName(bName);

            switch(sortValue) {
                case 'name-asc':
                    return aName.localeCompare(bName);
                case 'name-desc':
                    return bName.localeCompare(aName);
                case 'category-asc':
                    return aCategory.localeCompare(bCategory);
                case 'category-desc':
                    return bCategory.localeCompare(aCategory);
                case 'price-asc':
                    return aPrice - bPrice;
                case 'price-desc':
                    return bPrice - aPrice;
                default:
                    return 0;
            }
        });

        // Re-append sorted products
        products.forEach(product => productGrid.appendChild(product));
    }

    function getCategoryFromName(name) {
        const categories = ['UHT Milk', 'Mala', 'Delight', 'Gold Crown', 'Cheese', 'Butter', 'Ghee', 'Yoghurt'];
        return categories.find(category => name.includes(category)) || '';
    }
});
 
 lucide.createIcons();
        document.getElementById('sidebar-toggle').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });