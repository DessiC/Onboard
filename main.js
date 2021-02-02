function openNav() {
  document.getElementById("sidepanel").style.width = "270px";
}

function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
}


  var collapse = document.getElementsByClassName("collapse");


for (var i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
