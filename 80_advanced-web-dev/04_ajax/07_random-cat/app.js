$('button').click(function(){
  $.ajax("http://aws.random.cat/meow")
  .done(function(cat){
    $('img').attr("src", cat.file);
  })
  .fail(function(err){
    alert('no cat found...');
  });
});
