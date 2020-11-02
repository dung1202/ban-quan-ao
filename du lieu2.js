let selectedName = localStorage.getItem('selected');
let products = JSON.parse(localStorage.getItem('products'));
let t = JSON.parse(localStorage.getItem('mang'));

let product = products.find(function (p) {
    return p.name === selectedName;
});

function enterLogin(e, t) {
    if (e.key === 'Enter') dataName();
}
function displaylistphone(phones) {
    let t = 0;
    let listphones = document.getElementById('list-phone')
    listphones.innerHTML = ''; // xóa mảng trc khi thêm
    for (let i = 0; i < phones.length; i++) {
        const phoneName = phones[i];
        t = t + phoneName.price * phoneName.sl;
        listphones.innerHTML +=
            `
        <div class="gio-hang" id="gio-hang">
        <div class="item-gio-hang">
        <div class="stt">${i + 1}</div>
        <div class="hinhanh">
            <img src="${phoneName['img'][0]}" alt="">
        </div>
        <p class="sp">${phoneName.name}</p>
        <p class="gia">
        ${formatNumber(phoneName.price)}đ
        </p>
        <p class="soluong">x${formatNumber(phoneName.sl)}<p>
        <p class="tongtien">${formatNumber(phoneName.price * phoneName.sl)}đ</p>
        <img class="anhsua" onclick="sua(${i})" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABFRUWSkpKNjY1BQUF+fn7JycnFxcXe3t5jY2O1tbV8fHy7u7v6+vrIyMjBwcEmJibz8/PX19ejo6M3NzeFhYX09PSWlpbo6OhfX19mZmZvb2+pqalOTk50dHQiIiItLS1XV1cTExMVFRUzMzMOeGnGAAAE8klEQVR4nO2d61bqMBBGgwdBQJA7XgoC6vu/4qGe5VGhJDNpmq8za77/dmW7x+Za45zF0nzmi9Gy23stitf7x+14MEe3J2mexr1V5zxvN+upDsx+b3ZB9z+rbh/dvppZ3F+n+8r9At3K6EyW+zBfmcMA3dSobLo0vNIiuq1ReSTzyQQc0/lEAj4dGYA9dGsjMmLwiQQcKgccvCsH5LxiRAIutQMyOkEDbGV4gAI7+q12gw/aAZ+0A7qDdkDCXF424J12wIl2QFdoB+xrB3QH7YCMOb1MQEdcFZULSFcoFJCuUCogecQdBThuwaYGdW00CnDagmnkvEnAcjA4Sd1ibohrT5EGTxmlbjE3l5u7SQ12OsfULWaGNvGNN4gvU9LiTA2Dp0xTt5mXZwLgLObB3zNO8NuUVKRD/nN/TKmjfkHJMiARdp65z/21ZgA9k0IdkzIRp79++K6ZttOyJhLyEM9m1I9NtZ6SGyohB/F8WeulufaH80YmpCNeDOUPTRIEQh2Ufob4Rq1YmGwWwhveUj4JsWrlFfgyXbAIKYiVS8tPzZNcy7SqPXUQq6fTwFkw6+QMAfHKwutDHpqqsAn9iNd2P4Bjbz6hD/Hq0vk4H9F5IgivI17fvwIS8s4H+RE9mx/AKuXt3XsRfY8CngVn9odfqRhoerevgIekeWMaD6J/fw7Y47PGpR7EQLVvMHSfYR21vIoY2GF9R9GVoc8PPYihLeQdjs+5XjThN2Jwj3yNJOSdZatEDB8CgK7rR3YXPxAJpxywX9TUISwRKcc4oIDk3cPqFBRA8NYM72B3VJZYQuKid52gP2zzfD6ZJthtC+7Z7phAV7yd+9M4IHLYfQr9I8roQIdsOQwiVzCyGMR29zkMQjvDLAaRBzGyGEQqzAMI/CvMU6LAmWEmgzcwwEwGccOZTAZxr5lcBmHjtVwGYbv3uQzCtrazGdxqB0StAmcrUdRBr2wGUa/RbAZRgNkMss/bJko2g6jPo9R3E9bRJ8oRtWWfCxBVoblKdAg7KZvH4Ap3ijSLwRXwo4ocBnfI/2KaweAaur1U22Cx9n+TUUC/+UlgsDxmMNgW1ZTHJfxL7doGb7+eNO9vu8Xt/h/p+2y3Xj6g9+fL1Aa8XNKdbDbwj7O/U7tEcWvWtKQr0ZbGDJpBNEEgZtAMogkCaaCjb1esRENpe4maQTOIJgjEDJpBNEEg1tFLB1RfombQDKIJAjGDZhBNEIh19NIB1ZeoGTSDaIJAzKAZRBMEYh29dED1JWoGzSCaIBAzaAbRBIFYRy8dUH2JmkEziCYIxAyaQTRBINbRSwdUX6Jm0AyiCQIxg2YQTRCIdfTSAdWXqBk0g2iCQMygGUQTBGIdvXRA9SVqBqUbVP+SqXP/kgiDlKt3RBvcaDfonpUbrF2jrQd0q3qArS/Rugrbb9C9KDfoJtoNsu85l2bQubVyg859KDdY5zZJGQajr1cWAxhPKKRE4y+TlGIw2qEYg7GEcgxGXnMuyOAp/n/XK97gKTvlBiNudRVmkH8JuDhA7h+itBItw1rOF2iQ1yNKNHhKodugY3T6Qg068mX1Ug2WudFt0NHqVLJBR3mfCgcMT4SP6AbWz3zmA7xHNy9JPN0i7o7ktLnbV/MNoTfWpM22YhS+g9/pkjbT3ztRs24bbnVJncVjb/exn90OuyNF5WmxtDZ/AYsCUwXy2TGBAAAAAElFTkSuQmCC"></img>
        <img class="anhrac" onclick="xoa(${i})" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrtRP_zT97YxmobCjmSmyA6VUOQi6z9XsXLQ&usqp=CAU"></img>   
        </div>
        </div>
        <br>
            `

    }
    return t;
}


function tinhtien(a) {
    let tien = document.getElementById('haizz')
    tien.innerHTML = `
    <div class="tien">
     <div class="tt">Thành tiền</div>
     <div class="a">${formatNumber(a)}đ</div> 
     <button class="dh" onclick="dh()">Đặt hàng</button>
     </div>`     
}
if (localStorage.getItem('mang') === '[]') {
    let kt = document.getElementById('kt')
    kt.innerHTML = `Bạn chưa chọn sản phẩm`
}
else {
    displaylistphone(t)
    tinhtien(displaylistphone(t))
}
function xoa(a) {
    t.splice(a, 1);
    viewDetail();
}
const luongHang = document.getElementById('luonghang')
luongHang.innerText = t.length

function sua(a) {
    kt = t[a]['name']
    viewDetail1(kt)
}

function viewDetail() {
    localStorage.setItem('mang', JSON.stringify(t));
    window.location.href = 'gio hang.html';
}

function viewDetail1(a) {
    localStorage.setItem('selected', a)
    window.location.href = 'lua chon.html'
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

function dh()
{
    window.location.href = 'cam on.html'
}