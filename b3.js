const numberOfStudents = parseInt(prompt('Nhập số lượng sinh viên:'));

let students = [];

for (let i = 0; i < numberOfStudents; i++) {
    let student = {
        id: prompt('Nhập ID của sinh viên ' + (i + 1) + ':'),
        name: prompt('Nhập tên của sinh viên ' + (i + 1) + ':')
    };
    students.push(student);
}
console.log('Danh sách sinh viên:');
for (let i = 0; i < students.length; i++) {
    console.log('Sinh viên ' + (i + 1) + ':', students[i]);
}