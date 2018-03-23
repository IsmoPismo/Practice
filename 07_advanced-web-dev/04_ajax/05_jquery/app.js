$('button').click(function(){
  $.ajax({
    method: 'GET',
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: 'json'
  })
  .done(printIpsum)
  .fail(alertError);
});

function printIpsum(data){
  $('p').text(data[0]);
}

function alertError(err){
  alert(err + ' ... shit');
}
