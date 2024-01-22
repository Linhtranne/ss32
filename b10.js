function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
let shoppingCart = [];
function addToCart(productName, price, quantity) {
    let existingProduct = shoppingCart.find(product => product.name === productName);

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        let newProduct = new Product(productName, price, quantity);
        shoppingCart.push(newProduct);
    }

    console.log('Sản phẩm đã được thêm vào giỏ hàng.');
}

function removeFromCart(productName) {
    let indexToRemove = shoppingCart.findIndex(product => product.name === productName);

    if (indexToRemove !== -1) {
        shoppingCart.splice(indexToRemove, 1);
        console.log('Sản phẩm đã được xóa khỏi giỏ hàng.');
    } else {
        console.log('Không tìm thấy sản phẩm trong giỏ hàng.');
    }
}

function calculateTotal() {
    let total = shoppingCart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    console.log('Tổng giá trị giỏ hàng:', total);
}

function displayCart() {
    console.log('Thông tin giỏ hàng:');
    shoppingCart.forEach(product => {
        console.log('Tên sản phẩm:', product.name);
        console.log('Giá:', product.price);
        console.log('Số lượng:', product.quantity);
        console.log('Tổng giá trị:', product.price * product.quantity);
        console.log('------------------------');
    });
}

function clearCart() {
    shoppingCart = [];
    console.log('Giỏ hàng đã được xóa sạch.');
}