$(document).foundation()
//--When you click on the button it will todggle between hide and show-->
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Closes dropdown if the you click outside of it-->
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}


//-- a little bit 'o' js -response from the button 'click' on the page and Contact Us page (Future Plans-not implemented yet)-->
//hide till clicked, then click 'ok' on dialogue box-->
function myfunction1(){
  alert("Thanks, we will be in touch!");
}

//-- simple mouse over on the home page for verbage 'Western Hemisphere' and 'Eastern Hemisphere' in <p> tag-->
document.getElementById("color").onmouseover = function(){
  mouseOver()
};
document.getElementById("color").onmouseout = function() {
  mouseOut()
};

function mouseOver() {
    document.getElementById("color").style.color = "#b38600";
}

function mouseOut() {
    document.getElementById("color").style.color = "#2f5241";
}
