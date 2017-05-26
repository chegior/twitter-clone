$(document).ready(function(){
  $('#tweet-controls').hide();
  //the Tweet button and the character count button should be hidden
  $('.tweet-compose').on('focus',function(){
    $('#tweet-controls').show();
    $(this).css('height', '5em');
// focus: when clicks on the text area

    var wordCounter = 140;
    $(this).keyup(function(){
      var typeText = $(this).val().length;
      var count = wordCounter - typeText;
      $('#char-count').html(count);
      if (count > 10) {
        $('#char-count').css('color','inherit');
      }
      if(count <= 10){
        $('#char-count').css('color','red');
        if(count < 0){
          $('#tweet-submit').hide();
          $('#char-count').html('You have more than 140 Characters');
        }else{
          $('#tweet-submit').show();

        }
      }
    });

  });




});
