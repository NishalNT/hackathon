// const menuBtn = document.querySelector(".menu-btn");
// const navigation = document.querySelector(".navigation");
// const nav = document.querySelector(".navigation-items");
// const i = document.querySelector(".fa-bars");

// menuBtn.addEventListener("click", () => {
//     menuBtn.classList.toggle("active");
//     navigation.classList.toggle("active");
//     nav.classList.toggle("active");
// });

// nav.addEventListener("click", () => {
//     navigation.classList.remove("active");
//     nav.classList.remove("active");
//     i.classList.toggle("fa-x");
// });

// let changeIcon = function (icon) {
//     icon.classList.toggle("fa-x");
// };

// //scroll

// function scroll() {
//     const btns = document.querySelectorAll(".nav-btn");
//     const slides = document.querySelectorAll(".video-slide");
//     const test = document.querySelectorAll(".test");
//     const contents = document.querySelectorAll(".content");

//     let currentSlide = 1;

//     var sliderNav = function (manual) {
//         btns.forEach((btn) => {
//             btn.classList.remove("active");
//         });

//         slides.forEach((slide) => {
//             slide.classList.remove("active");
//         });

//         contents.forEach((content) => {
//             content.classList.remove("active");
//         });

//         btns[manual].classList.add("active");
//         slides[manual].classList.add("active");
//         contents[manual].classList.add("active");
//     };

//     btns.forEach((btn, i) => {
//         btn.addEventListener("click", () => {
//             sliderNav(i);
//             currentSlide = i;
//         });
//     });

//     var repeat = function (activeClass) {
//         let active = document.getElementsByClassName(".active");

//         let i = 1;
//         var repeater = () => {
//             setTimeout(function () {
//                 contents.forEach((content) => {
//                     content.classList.remove("active");
//                 });
//                 slides.forEach((slide) => {
//                     slide.classList.remove("active");
//                 });
//                 test.forEach((btn) => {
//                     btn.classList.remove("active");
//                 });
//                 btns.forEach((btn) => {
//                     btn.classList.remove("active");
//                 });

//                 slides[i].classList.add("active");
//                 contents[i].classList.add("active");
//                 btns[i].classList.add("active");
//                 i++;

//                 if (slides.length == i) {
//                     i = 0;
//                 }
//                 if (i >= slides.length) {
//                     return;
//                 }
//                 repeater();
//             }, 10000);
//         };
//         repeater();
//     };

//     repeat();
// }
// scroll();