const languages = {
    eng: {
        home: 'HOME',
        foodGallery: 'FOOD GALLERY',
        specialMenu: 'SPECIAL MENU',
        chefs: 'CHEFS',
        contact: 'CONTACT',
        larm: 'ARM',
        lru: 'RU',
        len: 'ENG',
        zr: 'ZENTRO RESTAURANT',
        csd: 'CLEAN & SIMPLE DESIGN',
        lm: 'LEARN MORE',
        l_rp: 'Lemon-Rosemary Prawn',
        ssl: 'Seafood/Shrimp/Lemon',
        l_rv: 'Lemon-Rosemary Vegetables',
        trl: 'Tomato / Rosemary / Lemon',
        l_rb: 'Lemon-Rosemary Bakery',
        bro: 'Bread / Rosemary / Orange',
        l_rs: 'Lemon-Rosemary Salad',
        crg: 'Chicken / Rosemary / Green',
        l_rpiz: 'Lemon-Rosemary Pizza',
        prg: 'Pasta / Rosemary / Green',
        th: 'Thanya',
        mc: 'Main Chef',
        ly: 'Lynda',
        ps: 'Pizza Specialist',
        je: 'Jenny',
        nb: 'New Baker',
        mzchefs:'Meet Zentro Chefs',
        tel:'Tel․   +123456789',
        adr:'Is our address:  Hyusisayin Poxota 3 Yerevan, Armenia',
        sm1:'Lemon-Rosemary Vegetable............ $20.50',
        sp1:'Chicken/Rosemary/Lemon',
        sm2:'Lemon-Rosemary Pork................. $40.75',
        sp2:'Pork/Tooplate/Lemon',
        sm3:'Lemon-Rosemary Squit................ $65.00',
        sp3:'Rosemary/Lemon',
        sm4:'Lemon-Rosemary Prawn............... $110.75',
        sp4:'Rosemary/Lemon',
        sm5:'Lemon-Rosemary Meat................ $30.50',
        sp5:'Rosemary/Lemon',
        sm6:'Lemon-Rosemary Salad............... $55.00',
        sp6:'Rosemary/Lemon',
        sm7:'Lemon-Rosemary Shrimp.............. $70.50',
        sp7:'Rosemary/Lemon',
        sm8:'Lemon-Rosemary Seafood............ $220.50',
        sp8:'Rosemary/Lemon',
    },
    arm: {
        home: 'Գլխավոր',
        foodGallery: 'Սնունդի հավելված',
        specialMenu: 'Հատուկ Մենյու',
        chefs: 'Խոհարարներ',
        contact: 'Կոնտակտ',
        larm: 'ARM',
        lru: 'RU',
        len: 'ENG',
        zr: 'ԶԵՆՏՌՈ ՌԵՍՏՈՐԱՆ',
        csd: 'ՄԱՔՈՒՐ ԵՎ ՊԱՐԶ ԴԻԶԱՅՆ',
        lm: 'ԻՄԱՑԵՔ ԱՎԵԼԻՆ',
        l_rp: 'Լեմոն-Ռոզմարի Կարի',
        ssl: 'Ծունկերին/Շրիմպ/Լեմոն',
        l_rv: 'Լեմոն-Ռոզմարի Հավելվածներ',
        trl: 'Տարամարդուկ / Ռոզմարի / Լեմոն',
        l_rb: 'Լեմոն-Ռոզմարի Հարմարանքային',
        bro: 'Հարավ / Ռոզմարի / Նարնջագոզ',
        l_rs: 'Լեմոն-Ռոզմարի Սալաթ',
        crg: 'Կորտովամուլ / Ռոզմարի / Կանաչ',
        l_rpiz: 'Լեմոն-Ռոզմարի Պիցցա',
        prg: 'Պաստա / Ռոզմարի / Կանաչի',
        th: 'Թհանյա',
        mc: 'Շեֆ Խոհարար',
        ly: 'Լինդա',
        ps: 'Պիցցայի մասնագետ',
        je: 'Ջեննի Քո',
        nb: 'Նոր Հացթուխ',
        mzchefs:'Հանդիպեք Zentro-ի խոհարարներին',
        tel:'Հեռ․ +123456789',
        adr:'Մեր հասցեն է: Հյուսիսային Պողոտա 3, Երևան, Հայաստան',
        sm1:'Կիտրոն-խնկունի Բանջարեղեն............ $20.50',
        sp1:'Հավի միս/խնկունի/Կիտրոն',
        sm2:'Կիտրոն-խնկունի խոզի միս................. $40,75',
        sp2:'Խնկունի/Կիտրոն',
        sm3:'Կիտրոն-Ռոզմարի Սքվիտ................ $65,00',
        sp3:'Խնկունի/Կիտրոն',
        sm4:'Կիտրոն-խնկունի ծովախեցգետին............... $110,75',
        sp4:'Խնկունի/Կիտրոն',
        sm5:'Կիտրոն-խնկունի միս................ $30,50',
        sp5:'Խնկունի/Կիտրոն',
        sm6:'Կիտրոն-խնկունի աղցան............... $55.00',
        sp6:'Խնկունի/Կիտրոն',
        sm7:'Կիտրոն-խնկունի ծովախեցգետին.............. $70,50',
        sp7:'Խնկունի/Կիտրոն',
        sm8:'Կիտրոն-խնկունի ծովամթերք............ $220,50',
        sp8:'Խնկունի/Կիտրոն',
    },
    ru: {
        home: 'Главная',
        foodGallery: 'Галерея блюд',
        specialMenu: 'Специальное меню',
        chefs: 'Шеф-повара',
        contact: 'Контакты',
        larm: 'ARM',
        lru: 'RU',
        len: 'ENG',
        zr: 'ЗЕНТРО РЕСТОРАН',
        csd: 'ЧИСТЫЙ И ПРОСТОЙ ДИЗАЙН',
        lm: 'УЗНАТЬ БОЛЬШЕ',
        l_rp: 'Лимонно-розмариновая креветка',
        ssl: 'Морепродукты/Креветки/Лимон',
        l_rv: 'Лимонно-розмариновые овощи',
        trl: 'Помидор / Розмарин / Лимон',
        l_rb: 'Лимонно-розмариновая выпечка',
        bro: 'Хлеб / Розмарин / Апельсин',
        l_rs: 'Лимонно-розмариновый салат',
        crg: 'Курица / Розмарин / Зелень',
        l_rpiz: 'Лимонно-розмариновая пицца',
        prg: 'Паста / Розмарин / Зелень',
        th: 'Танья',
        mc: 'Главный шеф-повар',
        ly: 'Линда',
        ps: 'Специалист по пицце',
        je: 'Дженни Ко',
        nb: 'Новый пекарь',
        mzchefs:"Познакомьтесь с шеф-поварами Zentro",
        tel:'Тел․  +123456789',
        adr:'Наш адрес:  Севернй Проспект 3 Ереван, Армения',
        sm1:'Овощ лимон-розмарин........... $20,50',
        sp1:'Курица/Розмарин/Лимон',
        sm2:'Свинина с лимоном и розмарином................. $40,75',
        sp2:'Свинина/Тарелка/Лимон',
        sm3:'Сквит с лимоном и розмарином................. $65,00',
        sp3:'Розмарин/Лимон',
        sm4:'Креветки с лимоном и розмарином............... $110,75',
        sp4:'Розмарин/Лимон',
        sm5:'Мясо с лимоном и розмарином................. $30,50',
        sp5:'Розмарин/Лимон',
        sm6:'Лимонно-розмариновый салат............... $55,00',
        sp6:'Розмарин/Лимон',
        sm7:'Креветки с лимоном и розмарином.............. $70,50',
        sp7:'Розмарин/Лимон',
        sm8:'Морепродукты с лимоном и розмарином........... $220,50',
        sp8:'Розмарин/Лимон',
    },
};


const currentLanguage = window.location.search.replace('?', 'arm') || 'eng';

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (languages[language] && languages[language][key]) {
            element.textContent = languages[language][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLanguage);
});

document.querySelectorAll('.leng a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const newLanguage = link.textContent.toLowerCase();
        console.log('New Language:', newLanguage);
        window.history.replaceState({}, document.title, `?lang=${newLanguage}`);
        changeLanguage(newLanguage);
    });
});


changeLanguage()

