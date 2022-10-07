const fs = require('fs') // Import fs => File Sistem
const path = require('path') // Import path


//  Papka yaratish
fs.mkdir(
    path.join(__dirname, '/papka'),
    {},
    err => err ? console.log('Nimadir hato ketti !!!') : console.log('Papka yaratildi...'))

// Mavjud papka ichidan  File Yaratish va ichiga malumot kiritish
fs.writeFile(
    path.join(__dirname, '/papka', 'namuna.txt'),
    'Nodejs orqali yaratildi !!!',
    err => err ? console.log('Nimadir hato ketti !!!') : console.log('File yaratildi...'))



//  Mavjud fail ichidagi kontent davomidan malumot qo'shish
fs.appendFile(
    path.join(__dirname, '/papka', 'namuna.txt'),
    ' Hello world',
    err => err ? console.log('Nimadir hato ketti !!!') : console.log('File yaratildi...'))




//  Mavjud failni o'qish =>File Read
fs.readFile(path.join(__dirname, '/papka', 'namuna.txt'),
'utf8',
(err, data) => err ? console.log(err) : console.log(data))

// Mavjud file nomini o'zgartirish
fs.rename(
    path.join(__dirname, '/papka', 'namuna.txt'),
    path.join(__dirname, '/papka', 'example.txt'),
    err => err ? console.log(err) : console.log("Sucsess")
)