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

const add = document.getElementById("wish");

books.forEach((val) => {
  let html = `<div class="wish_featured_bcard">
    <div class="wish_featured_bimage">
        <img src=${val.image} alt="book1" >
    </div>
    <i class="fa-solid fa-xmark cart"></i>
    <div class="description">
        <h3>${val.bookName}</h3>
        <div class="wish_featured_bauthor">
            <p class="wish_featured_bauthor">${val.authorName}</p>
        </div>
        <div class="wish_featured_bcategories">
            <p>${val.categories}</p>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis nostrum, esse quas tempore aliquid, accusamus in dicta ut qui aperiam. Aliquam atque itaque commodi aut deleniti repellendus sunt? Ut!</p>
        <div class="wish_featured_bprice">
         <p>${val.discountprice}<sub><del>${val.originalprice}</del></sub></p>
        </div>
        <div class="wish_featured_bbutton">
            <a href="#">Move to cart  <i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>
</div>`;
  add.innerHTML += html;
});
