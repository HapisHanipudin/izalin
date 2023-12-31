const btn = document.querySelectorAll(".btn-link");

btn.forEach((btn) => {
  btn.addEventListener("click", function () {
    const link = btn.dataset.link;
    // Pindahkan ke halaman lain dalam situs web Anda
    window.location.href = link;
  });
});

const dropBtn = document.querySelectorAll(".dropdown");

dropBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("show");
  });
});

// Scrolled Navbar
// const navbar = document.querySelector(".navigation");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     navbar.classList.add("nav-scrolled");
//   } else {
//     navbar.classList.remove("nav-scrolled");
//   }
// });

const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const closeBtn = cart.querySelector(".close");

cartBtn.addEventListener("click", () => {
  cart.classList.toggle("show");
  cartTotal();
});

closeBtn.addEventListener("click", () => {
  cart.classList.toggle("show");
});

function cartTotal() {
  var spanElements = document.querySelectorAll(".item-price"); // Mengambil semua elemen <span>
  var total = 0; // Inisialisasi total
  const totalPrice = document.querySelector(".total");

  spanElements.forEach(function (spanElement) {
    var text = spanElement.textContent;
    var number = parseFloat(text.replace("Harga : Rp", ""));
    total += number; // Menjumlahkan number ke total
  });

  totalPrice.innerHTML = "Rp" + total;
  console.log(total); // Hasil akhirnya adalah total dari semua angka dalam elemen <span>
}
