let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));
let kin = JSON.parse(localStorage.getItem('mang'))
let product = products.find(function (p) {
    return p.name === selectedName;
});
function enterLogin(e, t) {
    if (e.key === 'Enter') dataName();
}
let a = -1;
for (let i = 0; i < kin.length; i++) {
    if ((kin[i]['name']) === selectedName) {
        a = i;
        break;
    }
}

document.getElementById('product-name').innerHTML = product.name;
document.getElementById('product-price').innerHTML = formatNumber(product.price) + " đ";
let img = document.getElementById('product-img')
img.innerHTML = '';
let q = 0;
for (let i = 0; i < product['img'].length; i++) {
    img.innerHTML +=
        `<span>
        <img class="img" src="${product['img'][i]}">
        </span>`
}
function enterLogin1(e, t) {
    if (e.key === 'Enter') them();
}

function them() {
    let search = document.getElementById('id');

    if (Number(search.value) > 0) {
        if (a >= 0) kin.splice(a, 1);
        product.sl = Number(search.value);
        kin.push(product);
        viewDetail(product.name);
    }
    else {
        alert('moi nhap lai')
        exit;
    }
}
const luongHang = document.getElementById('luonghang')
luongHang.innerText = kin.length

function viewDetail(name) {
    localStorage.setItem('selected', name);
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('mang', JSON.stringify(kin))
    window.location.href = 'gio hang.html';
}

function dataNam() {
    localStorage.setItem('k', 'Nam')
    window.location.href = 'cua hang quan ao.html'
}

function dataNu() {
    localStorage.setItem('k', 'Nu')
    window.location.href = 'cua hang quan ao.html'
}

function dataName() {
    let key = document.getElementById('search')
    localStorage.setItem('k', key.value.trim())
    window.location.href = 'cua hang quan ao.html'
}
function trangchu() {
    window.location.href = 'cua hang quan ao.html'
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

let kinh = document.getElementById('chitiet')
kinh.innerHTML = '';
for (let i = 0; i < product['info'].length; i++) {
    kinh.innerHTML +=
        `<li ><span class="chi">${product['info'][i]}</span></li>`
}


