$(function() {
  //All JS goes within these brackets

$("#bar-submit").click(function(){
  //select the box with id of age
  //get the value from that box
  var ageString = $("#age").val();
  var clothingString = $("#clothing").val();
  var songString = $("#song").val();
  

        //convert string to number 
  
  var age= parseInt(ageString); 
  var clothing= parseInt(clothingString); 
  var song= parseInt(songString);
  
  
  
  
    //check if age is greater than 21

  if (age >=21 && clothing >=5 && song ==18) { 

    //if age is greater than 21 say yes
    $("#answer").text("You're in!");
    $("#club-img").attr("src", "http://big.assets.huffingtonpost.com/bcgif7.gif");
  } else {
    //if age is less than 21 say self-destruct
    $("#answer").text("scram. youre too young.");
    $("#club-img").attr("src", "http://bossfight.co/wp-content/uploads/2015/07/bossfight-stock-images-photos-photography-free-high-resolution-black-door.jpg");


}



  
  

  

  


  

  


});


});