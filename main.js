// vars
let nums = document.querySelectorAll(".rate ul li");
let nmsArray = Array.from(nums);

let thankYou = document.querySelector(".thank-you")
let sbmBtn = document.querySelector(".subm");
let chose = document.querySelector(".chose span");
//start funtions
nmsArray.forEach((e) => {
  e.addEventListener("click", function () {
    nmsArray.forEach((y)=>{
      y.classList.remove("active")
    })
    e.classList.add("active");
    chose.innerHTML = e.innerHTML
  });
});

sbmBtn.addEventListener("click", ()=>{
  thankYou.style.display = "flex";
  document.querySelector(".rate-1").remove()

})
