let users = [];

function validateUserName(name) {
    return name.trim() !== '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function isDuplicateEmail(email) {
    return users.some(user => user.email === email);
}

function registerUser() {
    let id = users.length + 1;
    let user_name = prompt('Nhập tên người dùng:');
    let email = prompt('Nhập email:');
    let password = prompt('Nhập mật khẩu:');

    while (
        !validateUserName(user_name) ||
        !validateEmail(email) ||
        !validatePassword(password) ||
        isDuplicateEmail(email)
    ) {
        console.log('Thông tin không hợp lệ hoặc email đã tồn tại. Vui lòng nhập lại.');
        user_name = prompt('Nhập tên người dùng:');
        email = prompt('Nhập email:');
        password = prompt('Nhập mật khẩu:');
    }

    let user = { id, user_name, email, password };
    users.push(user);
    console.log('Đã đăng ký tài khoản thành công.');
}

function loginUser() {
    let email = prompt('Nhập email:');
    let password = prompt('Nhập mật khẩu:');

    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        console.log('Đăng nhập thành công. Thông tin tài khoản:');
        console.log(foundUser);
    } else {
        console.log('Đăng nhập thất bại. Email hoặc mật khẩu không đúng.');
    }
}