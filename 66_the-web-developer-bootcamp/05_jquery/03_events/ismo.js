// $(function() {
//   $('div').css("background","tomato")
//
//   var zebra = {
//     border: "1px solid black",
//     backgroundColor: "aqua"
//   };
//
//   $('.dzidz').css(zebra);
//   $('#dzong').html("Jebatsčh");
//   $('#dzong').css("text-shadow","-1px -3px 2px black");
// })

// Challange to myself:
  // buttons take the text of the input.value


$('button').click(function() {
  $(this).text($('input').val())
});

// Challange done! Needed about 5 minutes
//because of this not 'this' and val()
//(i just learned this, val and click in jQuery), and i had  
