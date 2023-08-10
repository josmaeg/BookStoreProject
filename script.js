let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".nav2");
let list = document.querySelector("#lists");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

list.onclick = () => {
  navbar.classList.remove("active");
};

let books = [
  {
    id: 1,
    image: "./image/book_1.jpg",
    bookName: "Featured Books1",
    authorName: "John Doe1",
    categories: "Thriller, Horror, Romance",
    discountprice: "$25.50",
    originalprice: "$28.60",
  },
  {
    id: 2,
    image: "./image/book_2.jpg",
    bookName: "Featured Books2",
    authorName: "John Doe2",
    categories: "Thriller, Horror, Romance",
    discountprice: "$23.50",
    originalprice: "$27.40",
  },
  {
    id: 3,
    image: "./image/book_3.jpg",
    bookName: "Featured Books3",
    authorName: "John Doe3",
    categories: "Thriller, Horror, Romance",
    discountprice: "$28.50",
    originalprice: "$38.65",
  },
  {
    id: 4,
    image: "./image/book_4.jpg",
    bookName: "Featured Books4",
    authorName: "John Doe4",
    categories: "Thriller, Horror, Romance",
    discountprice: "$15.50",
    originalprice: "$18.10",
  },
  {
    id: 5,
    image: "./image/book_5.jpg",
    bookName: "Featured Books5",
    authorName: "John Doe5",
    categories: "Thriller, Horror, Romance",
    discountprice: "$15.50",
    originalprice: "$18.60",
  },
  {
    id: 6,
    image: "./image/book_6.jpg",
    bookName: "Featured Books6",
    authorName: "John Doe6",
    categories: "Thriller, Horror, Romance",
    discountprice: "$25.50",
    originalprice: "$28.70",
  },
  {
    id: 7,
    image: "./image/book_9.jpg",
    bookName: "Featured Books7",
    authorName: "John Doe7",
    categories: "Thriller, Horror, Romance",
    discountprice: "$24.50",
    originalprice: "$28.60",
  },
  {
    id: 8,
    image: "./image/book_1.jpg",
    bookName: "Featured Books8",
    authorName: "John Doe8",
    categories: "Thriller, Horror, Romance",
    discountprice: "$25.00",
    originalprice: "$27.60",
  },
  {
    id: 9,
    image: "./image/book_2.jpg",
    bookName: "Featured Books9",
    authorName: "John Doe9",
    categories: "Thriller, Horror, Romance",
    discountprice: "$23.50",
    originalprice: "$28.50",
  },
];

const feature = document.getElementById("Featured");

books.forEach((val) => {
  let html = `
<div class="featured_bcard swiper-slide">
    <div class="featured_bimage">
        <img src="${val.image}" alt="book1" >  
    </div>
    <i class="fa-solid fa-heart bheart"></i>
    <div class="featured_btag">
        <h3>${val.bookName}</h3>
    </div>
    <div class="featured_bauthor">
        <p>${val.authorName}</p>
    </div>
    <div class="featured_bcategories">
        <p>${val.categories}</p>
    </div>
    <div class="featured_bprice">
        <p>${val.discountprice}<sub><del>${val.originalprice}</del></sub></p>
    </div>
    <div class="featured_bbutton">
        <a href="#"> Learn More </a>
    </div>
</div>`;

  if (feature) feature.innerHTML += html;
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    850: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
