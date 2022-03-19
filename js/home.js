var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
});


/*$('carousel').Carousel({
  loop:true,
 margin:100,
  nav:false,
  responsive : {
   0:{
           items:1
       },
       600:{
          items:3
      },
      1000:{
          items:3
      },
      1400:{
        items:3
      }

  
})*/
/*var regionList = [

  { Country: 'Saudi', Region: 'Alabama' },
  { Country: 'Saudi', Region: 'Arizona' },
  { Country: 'Saudi', Region: 'California' },
  { Country: 'Egypt', Region: 'Cairo' },
  { Country: 'Egypt', Region: 'Alex' },
  { Country: 'Egypt', Region: 'Aswan' },
  { Country: 'India', Region: 'Maharashtra' },
  { Country: 'India', Region: 'Delhi' },
  { Country: 'India', Region: 'Punjab' }

];
$(document).ready(function () {
  debugger;
  $(".divOtherCountry").hide();
  $(".divOtherState").hide();
  $(".divOtherCity").hide();
  $("#dpdlCountry").change(function () {
    debugger;
    if ($("#dpdlCountry").val() == "Other") {
      $(".divOtherCountry").show();
      const option = "<option val='Other'>Other</option>";
      $("#dpdlState").append(option);
    }
  })
});
*/
$('.country a').click(function () {
 if ($(this).data("region") === "#sa") {
      
      $("#region2").hide();
      $("#region3").hide();
      $("#region1").show();

  }
  else if ($(this).data("region") === "#e") {
      
      $("#region3").hide();
      $("#region1").hide();
      $("#region2").show();

  }
  else if ($(this).data("region") === "#in") {
      
      $("#region1").hide();
      $("#region2").hide();
      $("#region3").show();

  
  }
});