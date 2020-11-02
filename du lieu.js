let sp = [
    {
        name: 'Ao Nam Sweater',
        price: 149e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.04.2.02.007.219.01.10200011___10__0630ea13500843c4a01096e3933dcff8_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.04.2.02.007.219.01.10200011___8__eadacb7270e34dd99de4c43aa55de2c2_1024x1024.jpg'
        ],
        info: ['Chất liệu: USA Cotton', 'Size mẫu mặc: M', 'Số đo mẫu: 79cm, 65kg'],
    },
    {
        name: 'Ao Nu Hoodie',
        price: 149e3,
        img: ['https://product.hstatic.net/1000299894/product/1.0.06.2.02.002.219.01.10100011___5__92d19f8216c34eb4a53d0c9657c26c33_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.0.06.2.02.002.219.01.10100011___2__5bba1d0674b74150a8e46d4640b605e4_1024x1024.jpg'
        ],
        info: ['Chất liệu: Nỉ da cá', ' Size mẫu mặc: M', 'Số đo mẫu: Nữ: 165cm, 45kg'],
    },
    {
        name: 'Ao Nam Coat',
        price: 199e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.05.2.05.003.219.01.10800030___2__0f9a37d11b7c412aa4546ecbc3c789dc_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.05.2.05.003.219.01.10800030___3__e3dd813a114c4aa4823aa421526672ab_1024x1024.jpg'
        ],
        info: ['Chất liệu: nỉ cotton', 'Size mẫu mặc: L', 'Số đo mẫu: cao 185cm, nặng 65 kg'],
    },
    {
        name: 'Quan Nu Jean',
        price: 99e3,
        img: ['https://product.hstatic.net/1000299894/product/31d448d1-dafd-4fd2-adac-f31ef598cf70_b5faebfb1ad74f2cac89b6a0452d08f4_1024x1024.jpeg',
            'https://product.hstatic.net/1000299894/product/31d448d1-dafd-4fd2-adac-f31ef598cf70_b5faebfb1ad74f2cac89b6a0452d08f4_1024x1024.jpeg'
        ],
        info: ['Chất liệu: jean', 'Size mẫu mặc: M', 'Số đo mẫu: Nữ: 165cm, 45kg'],
    },
    {
        name: 'Quan Nam Kaki',
        price: 99e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.22.2.14.002.120.23.10700023___1__7b6aecfca48a4400a565244c813d2748_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.22.2.14.002.120.23.10700023___3__95e3a49b16894a46b21f6dfc85e56dc5_1024x1024.jpg'
        ],
        info: ['Chất liệu: kaki', 'Size mẫu mặc: M', 'Số đo mẫu: Nữ: 165cm, 45kg'],
    },
    {
        name: 'Quan Nu Jogger',
        price: 149e3,
        img: ['https://product.hstatic.net/1000299894/product/1.2.24.1.05.002.219.01__14__2585b103e4994e5bb0b29c029c17db35_1024x1024.jpg',
            'https://product.hstatic.net/1000299894/product/1.2.24.1.05.002.219.01__16__dd843dff1cf14cd2b8e71b9ebb4772a2_1024x1024.jpg  '
        ],
        info: ['Chất liệu: Jean', 'Size mẫu mặc: M', 'Số đo mẫu: 50kg, cao 167 cm'],
    },
];

displaylistphone(sp);
const luongHang = document.getElementById('luonghang')
if (localStorage.getItem('mang') === null) {
    localStorage.setItem('mang', '[]')
}
let gioHang = JSON.parse(localStorage.getItem('mang'));
luongHang.innerText = gioHang.length


function displaylistphone(phones) {
    let listphones = document.getElementById('list-phone')
    listphones.innerHTML = ''; // xóa mảng trc khi thêm
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        listphones.innerHTML +=
            `<div class="item">
            <div id="anhsp" onclick="viewDetail('${phoneName.name}')"><img src="${phoneName['img'][0]}"></div>
            <div id="namesp" onclick="viewDetail('${phoneName.name}')"><h2>${phoneName.name}</h2></div>
            <div id="giasp"><h4>${formatNumber(phoneName.price)}đ</h4></div>
            </div>`
    }

}
function dong() {
    var element = document.getElementById("box");
    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
}

function data() {
    let w=0;
    let a = [];
    let search = document.getElementById('search');
    let key = search.value.trim();
    let q = key;
    if (key < 1000) { q = key * 1000 }
    if (key === '') {
        return;
    }
    else {
        for (let i = 0; i < sp.length; i++) {
            const kt = sp[i];
            if (kt.price >= q) a.push(kt);
            else if (kt.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) a.push(kt);
        }
        if (a.length === 0) alert('khong tim thay yeu cau, moi ban nhap lai')
        else { displaylistphone(a); dong()}
    }
}

function enterLogin(e, t) {
    if (e.key === 'Enter') data();
}

function dataNam() {
    let a = []
    for (let i = 0; i < sp.length; i++) {
        const kt = sp[i];
        if (kt.name.toLowerCase().indexOf('nam') !== -1) a.push(kt);
    }
    displaylistphone(a);
    dong();
}

function dataNu() {
    let a = []
    for (let i = 0; i < sp.length; i++) {
        const kt = sp[i];
        if (kt.name.toLowerCase().indexOf('nu') !== -1) a.push(kt);
    }
    displaylistphone(a);
    dong();
}
function viewDetail(name) {
    localStorage.setItem('selected', name);
    localStorage.setItem('products', JSON.stringify(sp));
    localStorage.setItem('mang', JSON.stringify(gioHang))
    window.location.href = 'lua chon.html';
}


let w = localStorage.getItem('k')
if (w !== 'null') {
    q();
}
function q() {
    if (w === 'Nam') {
        dataNam();
        k();
    }
    else if (w === 'Nu') {
        dataNu();
        k();
    }
    else {
        dataq(w);
        k();
    }
}

function k() {
    w = null
    localStorage.setItem('k', 'null')
}

function dataq(b) {
    let a = [];
    let key = b;
    let q = key;
    if (key < 1000) { q = key * 1000 }
    if (key === '') {
        return;
    }
    else {
        for (let i = 0; i < sp.length; i++) {
            const kt = sp[i];
            if (kt.price >= q) a.push(kt);
            else if (kt.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) a.push(kt);
        }
        if (a.length === 0) alert('khong tim thay yeu cau, moi ban nhap lai')
        else { displaylistphone(a); dong()}
    }
}

function trangchu() {
    window.location.href = 'cua hang quan ao.html';
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
var current = 1;
var num_image = 4;
function nextImg() {
    current++;
    if (current > num_image) {
        current = 1
    }
    document.images['image'].src = 'anhnew/anh trang chu/nu_ms_banner_img' + current + '.webp';
}

function prevImg() {
    current--;
    if (current < 1) {
        current = 4
    }
    document.images['image'].src = 'anhnew/anh trang chu/nu_ms_banner_img' + current + '.webp';

}

setInterval(nextImg, 3000);