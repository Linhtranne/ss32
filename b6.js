function Product(id, product_name, price) {
    this.id = id;
    this.product_name = product_name;
    this.price = price;
}

let products = [
    new Product(1, 'iphone 12', 200),
    new Product(2, 'iphone 11', 100),
    new Product(3, 'galaxy note 10', 500),
];

function sortProductsByPrice(products) {
    return products.sort(function(a, b) {
        return a.price - b.price;
    });
}
let sortedProducts = sortProductsByPrice(products);

sortedProducts.forEach(function(product) {
    console.log('ID:', product.id, '| Tên sản phẩm:', product.product_name, '| Giá:', product.price);
});