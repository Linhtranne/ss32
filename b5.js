function Book(author, name) {
    this.author = author;
    this.name = name;
}

let books = [
    new Book('tgia1', 'sách 1'),
    new Book('tgia2', 'sách 2'),
    new Book('tgia3', 'sách 3')
];

let authorToSearch = prompt('Nhập tên tác giả:');

let foundBooks = books.filter(function(book) {
    return book.author === authorToSearch;
});

if (foundBooks.length > 0) {
    console.log('Thông tin sách của tác giả', authorToSearch + ':');
    foundBooks.forEach(function(book) {
        console.log('Tên sách:', book.name);
    });
} else {
    console.log('Không tìm thấy sách của tác giả', authorToSearch);
}