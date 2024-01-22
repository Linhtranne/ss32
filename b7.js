let users = [];

function validateUserName(name) {
    return name.length >= 3;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // chuỗi định dạng email
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function createUser() {
    let id = users.length + 1;
    let user_name = prompt('Nhập tên người dùng:');
    let email = prompt('Nhập email:');
    let password = prompt('Nhập mật khẩu:');

    while (
        !user_name || !validateUserName(user_name) ||
        !email || !validateEmail(email) ||
        !password || !validatePassword(password)
    ) {
        console.log('Thông tin không hợp lệ. Vui lòng nhập lại.');
        user_name = prompt('Nhập tên người dùng:');
        email = prompt('Nhập email:');
        password = prompt('Nhập mật khẩu:');
    }

    let user = { id, user_name, email, password };
    users.push(user);

    console.log('Đã thêm người dùng mới:');
    console.log(user);
}
createUser();
