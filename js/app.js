let bar = document.querySelector("#bar");
let closeBar = document.querySelector("#close");
let nav = document.querySelector("#navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}

if (closeBar) {
    closeBar.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}

// ====================================================================

let products = document.querySelectorAll(".product");
products.forEach(element => {
    element.onclick = function () {
        window.location.href = 'singleproduct.html';
    }
});

let mainImg = document.getElementById("main");
let smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < 4; i++) {
    smallImg[i].onclick = function () {
        mainImg.src = smallImg[i].src;
    }
}

// ====================================================================