let Bar = document.getElementById("bar")
let Ul = document.querySelector("ul");

Bar.addEventListener("click", function(){
  Ul.classList.toggle("ShowHide");
  console.log(Ul);
  
})

// ---------------------------------------------Menu color 
let Home = document.getElementById("Home");
let Shop = document.getElementById("Shop");
let Review = document.getElementById("Review");
let Blog = document.getElementById("Blog");
let Contact = document.getElementById("Contact");

Home.addEventListener("click", function () {
  Home.style.color = "#038c8d";
  Shop.style.color = "none";
  Review.style.color = "none";
  Blog.style.color = "none";
  Contact.style.color = "none";
});
Shop.addEventListener("click", function () {
  Shop.style.color = "#038c8d";
  Home.style.color = "none";
  Review.style.color = "none";
  Blog.style.color = "none";
  Contact.style.color = "none";
});
Review.addEventListener("click", function () {
  Review.style.color = "#038c8d";
  Home.style.color = "none";
  Shop.style.color = "white";
  Blog.style.color = "none";
  Contact.style.color = "none";
});
Blog.addEventListener("click", function () {
  Blog.style.color = "#038c8d";
  Home.style.color = "none";
  Shop.style.color = "none";
  Review.style.color = "white";
  Contact.style.color = "none";
});
Contact.addEventListener("click", function () {
  Contact.style.color = "#038c8d";
  Home.style.color = "none";
  Shop.style.color = "none";
  Review.style.color = "none";
  Blog.style.color = "white";
});

// ------------------------------------ Container

let container = document.querySelector(".container");
let prodCard = document.querySelector(".prod-card");
function ImgShow(sm) {
  container.style.display = "none";
  prodCard.style.display = "flex";
  let newImg = document.getElementById("newImg");
  console.log(sm);
  newImg.src = sm.src;
}
// ------------------------------------BuyNow

let payDets = document.querySelector(".payDets");

function BuyNow() {
  prodCard.style.display = "none";
  payDets.style.display = "flex";
}
let xmark = document.getElementById("xmark");

xmark.addEventListener("click", function () {
  payDets.remove();
  container.style.display = "block";
});

// ------------------------------------ Form

let Connect = document.getElementById("Connect");

Connect.addEventListener("click", function () {
    let FormName = document.getElementById("FormName");
    let FormNum = document.getElementById("FormNum");
    
    if (FormName.value == "" && FormNum.value == "") {
        alert("Please Fill The Form");
    } else {
        alert("Thanks for Submit");
    }
});

// ------------------------------------ Payment Option

let Submits = document.getElementById("Submits");

Submits.addEventListener("click", function () {
  let PayName = document.getElementById("PayName");
  let PatAdd = document.getElementById("PatAdd");
  let PayNum = document.getElementById("PayNum");

  if (PayName.value == "" && PatAdd.value == ""  && PayNum.value == "") {
    alert("Please Fill The Form");
  } else {
    alert("Thanks for Submitting");
  }
});
