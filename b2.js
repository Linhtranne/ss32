
let information = {
    id: '',
    name: '',
    phone: '',
    address: ''
};
information.id = prompt('Nhập ID:');
information.name = prompt('Nhập tên:');
information.phone = prompt('Nhập số điện thoại:');
delete information.address;
information.email = prompt('Nhập email:');
console.log('Thông tin cá nhân:');
console.log('ID:', information.id);
console.log('Tên:', information.name);
console.log('Số điện thoại:', information.phone);
console.log('Email:', information.email);
