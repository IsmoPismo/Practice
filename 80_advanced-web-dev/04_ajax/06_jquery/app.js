$('#get').click(function(){
  $.get("https://baconipsum.com/api/?type=meat-and-filler")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log('shajt');
  });
});

$('#post').click(function(){
  var form = {name: "Shajt", age: 24};
  $.post("https://baconipsum.com/api/?type=meat-and-filler", data)
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log('shajt');
  });
});

$('#getJSON').click(function(){
  $.getJSON("https://baconipsum.com/api/?type=meat-and-filler")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log('shajt');
  });
});
