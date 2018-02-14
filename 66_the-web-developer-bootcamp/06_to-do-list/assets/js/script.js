// Toggle for strike-through for lis
$('ul').on('click', 'li', function() {
  $(this).toggleClass('strike')
});

// Click on trashcan to delete
$('ul').on('click', '.icon-trash', function(event) {
  $(this).parent().addClass('remove');
  window.setTimeout(function() {
    $('.remove').css("display", "none");
  }, 820);
  event.stopPropagation();
});

// Adds new To-Do
$('input[type="text"]').keypress(function(event){
  if(event.which === 13){
    var inputText = $(this).val();
    $(this).val("");
    $('ul').append('<li><svg class="icon-trash"><use xlink:href="#trash"></use></svg>' + inputText + "</li>");
  }
});

// Toggle inputText
$('.icon-plus').click(function() {
  $('input[type="text"]').fadeToggle();
});
