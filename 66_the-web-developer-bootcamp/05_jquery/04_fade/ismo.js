$('#in').on('click',function() {
  $('#fade-in').fadeIn(1200, function(){
    $(this).addClass('god-mode')
  });
});

$('#out').on('click',function() {
  $('#fade-out').fadeOut(200)
  });

$('#toggle').on('click',function() {
  $('#fade-toggle').fadeToggle(1200)
  });
