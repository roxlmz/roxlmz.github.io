function slideUpSobre() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("sobre").className = "slideUp";
  }
}
function clicar(){
  const hambegerBtn = document.getElementsByClassName("btn-hamburger")[0]
  const navLinks = document.getElementsByClassName("menu")[0]
    navLinks.classList.toggle("active")
}
function MostarMais() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("mostrar");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Mostrar +"; 
        moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Mostrar -"; 
            moreText.style.display = "inline";
          }
}

