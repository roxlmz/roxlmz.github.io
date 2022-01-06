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
