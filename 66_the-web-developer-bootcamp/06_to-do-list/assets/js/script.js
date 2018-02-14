// Toggle for strike-through for lis
$('li').on('click', function() {
  $(this).toggleClass('strike')
});

// Click on trashcan to delete
$('.icon-trash').on('click', function(event) {
  $(this).parent().addClass('remove');
  window.setTimeout(function() {
    $('.remove').css("display", "none");
  }, 820);
  event.stopPropagation();
});
