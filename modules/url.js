const url = require('url');

const newUrl = new URL('https://bexruz.ru:5000/users/user.html?name=Bexruz&status=active&age=24');


// To'iq urlni chiqarish uchun 
console.log(newUrl.href); // https://bexruz.ru:5000/users/user.html?name=Bexruz&status=active&age24

// PORT yoki Dommenning o'zini olish uchun 
console.log(newUrl.host); // bexruz.ru:5000

// Dommenning o'zini olish uchun
console.log(newUrl.hostname); // bexruz.ru

//  Murojat qilinayotgan file ning nomi 
console.log(newUrl.pathname); //    /users/user.html

// Ohirgi filedan keyingi query parametrini string holatda qaytaradi
console.log(newUrl.search);//   ?name=Bexruz&status=active&age24

// Ohirgi filedan keyingi query parametrini object holatda qaytaradi
console.log(newUrl.searchParams); // URLSearchParams { 'name' => 'Bexruz', 'status' => 'active', 'age24' => '' }


// Yangi params qo'shish uchun 
newUrl.searchParams.append("firstname", "Xolmuminov");
console.log(newUrl.searchParams); // URLSearchParams {'name' => 'Bexruz','status' => 'active', 'age24' => '', 'firstname' => 'Xolmuminov' }


// Params larni loop yordamida aylanib chiqish mumkin
console.log(newUrl.searchParams.forEach((key, val)=>console.log(`${val}: ${key}`)));
// name: Bexruz
// status: active
// age: 24
// firstname: Xolmuminov
