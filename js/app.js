

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


//-- form validation for contact page-->

$('#myForm')
  .on('invalid.fndtn.abide', function () {
    var invalid_fields = $(this).find('[data-invalid]');
    console.log(invalid_fields);
  })

  .on('valid.fndtn.abide', function () {
    console.log('valid!');
  });


//--mouseover for nav bar-->

$(document).ready(function(){
  $('li').mouseover(function(){
    $(this).addClass('hover');
  });

    $('li').mouseout(function(){
      $(this).removeClass('hover');
  });
});
