
function Contact(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
};
let contacts = [];

function addContact(name, phone, email) {
    let newContact = new Contact(name, phone, email);
    contacts.push(newContact);
    console.log('Liên lạc mới đã được thêm vào danh bạ.');
}

function findContactByName(name) {
    let foundContact = contacts.find(contact => contact.name === name);
    if (foundContact) {
        console.log('Thông tin liên lạc:');
        console.log(foundContact);
    } else {
        console.log('Không tìm thấy liên lạc.');
    }
}

function displayContacts() {
    console.log('Danh bạ liên lạc:');
    contacts.forEach(contact => {
        console.log(contact.name, '-', contact.phone, '-', contact.email);
    });
}

function deleteContactByName(name) {
    let indexToDelete = contacts.findIndex(contact => contact.name === name);
    if (indexToDelete !== -1) {
        contacts.splice(indexToDelete, 1);
        console.log('Liên lạc đã được xóa khỏi danh bạ.');
    } else {
        console.log('Không tìm thấy liên lạc để xóa.');
    }
}

function updateContactByName(name, updatedInfo) {
    let indexToUpdate = contacts.findIndex(contact => contact.name === name);
    if (indexToUpdate !== -1) {
        contacts[indexToUpdate] = { ...contacts[indexToUpdate], ...updatedInfo };
        console.log('Thông tin liên lạc đã được cập nhật.');
    } else {
        console.log('Không tìm thấy liên lạc để cập nhật.');
    }
}

addContact('John Doe', '123456789', 'john.doe@example.com');
addContact('Jane Smith', '987654321', 'jane.smith@example.com');
displayContacts();

findContactByName('John Doe');

deleteContactByName('Jane Smith');
displayContacts();

updateContactByName('John Doe', { phone: '555555555' });
displayContacts();
