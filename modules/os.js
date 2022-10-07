






                        // Aperatsion sistema yani biz ishlatib turgan qurilma haqidagi malumotlardan foydalanish uchun ishlatiladi
                        const os = require('os');


                        // Ushbu holatda qurulma qanday sistemadan foydalanayotgani haqida malumot beradi 
                        console.log(os. platform()); // Win32


                        // Sistemaning 32 yoki 64 ekanini aniqlash
                        console.log(os.arch()); // x64


                        // CPU core => yadro patoklari va shu haqida batafsil object shaklidagi malumot 
                        console.log(os.cpus());    

                        // Bo'sh joy haqida
                        console.log(os.freemem()); //4123652096

                        // Jami hotira
                        console.log(os.totalmem()); //8473796608

                        //  Qurilmaning ohirgi yongan vaqtidan boshqab qancha vaqt bo'lgani haqida (sekundlarda) malumot olish uchun 
                        console.log(os.uptime()); // 16359