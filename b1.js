
let information = {
    id: '',
    name: '',
    phone: '',
    address: ''
};
information.id = prompt('Nhập ID:');
information.name = prompt('Nhập tên:');
information.phone = prompt('Nhập số điện thoại:');
information.address = prompt('Nhập địa chỉ:');
console.log('Thông tin cá nhân:');
console.log('ID:', information.id);
console.log('Tên:', information.name);
console.log('Số điện thoại:', information.phone);
console.log('Địa chỉ:', information.address);
