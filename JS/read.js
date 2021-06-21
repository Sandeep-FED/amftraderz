var scroll1 = window.pageYOffset;
window.onscroll = function(){
  var scroll2 = window.pageYOffset;
  if (scroll1 > scroll2) {
    document.querySelector("header").style.top ="0";
  }else{
    document.querySelector("header").style.top="-100px";
  }
  scroll1 =scroll2;
}



function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
