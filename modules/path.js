// Path yuklab olinmaydi import qilish yetarli
const path = require("path"); 


// File nomi
console.log(path.basename(__filename));

// Filegacha bo'lgan yo'l filedan tashqari
console.log(path.dirname(__filename));

// Fail turi ( .js, .py, .c, .java )
console.log(path.extname(__filename));

// Barcha holatlar object holatda ko'rsatiladi
console.log(path.parse(__filename));

//  Stringga konkatenatsiya   =>   /database/mongodb/db.js
console.log(path.join(__dirname, 'database', 'mongodb', 'db.js'));
