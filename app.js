const left = document.getElementById("left");
const right = document.getElementById("right");
const div = document.getElementsByClassName("reviewdiv");
let translate = 0;

left.addEventListener("click", () => {
//   let sl = div.scrollLeft,
//     cw = div.scrollWidth;

//   if (sl + scrollStep >= cw) {
//     div.scrollTo(cw, 0);
//   } else {
//     div.scrollTo(sl + scrollStep, 0);
//   }

// widgetsContent.nativeElement.scrollLeft -= 150;
console.log(div)
});
right.addEventListener("click", () => {
  console.log("clicked");
});

// left.on('click', function() {
// var scrollIndex = $(window).scrollTop(); // current page position
// $(window).scrollTop(y - 150); // scroll up 150px
// }

// right.on('click', function() {
// var scrollIndex = $(window).scrollTop(); // current page position
// $(window).scrollTop(y + 150); // scroll down 150px
// };
