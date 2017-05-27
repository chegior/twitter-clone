$(document).ready(function(){


//////////OBJECT TWEET///////////////

/////////////////////////////////////



  $('#tweet-controls').hide();
  //the Tweet button and the character count button should be hidden
  $('.tweet-compose').on('focus',function(){
    $('#tweet-controls').show();
    $(this).css('height', '5em');
// focus: when clicks on the text area
  //  var tweetClone = $('.tweet').first().clone();

//    tweetClone.find('.avatar').attr('src', '')
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

  $('#tweet-submit').on('click',function(){
    ////////////add on STREAM////////////
    var newTweetCont = $('.tweet').first().clone();//save the CONTEXT of a tweet
    var image = $('#profile-summary').find('.avatar').attr('src');
    var name = 'chedro';
    var textArea = $('.tweet-compose').val();
    console.log(image);
    newTweetCont.find('.fullname').html(name);
    newTweetCont.find('.avatar').attr('src',image);
    newTweetCont.find('.tweet-text').html(textArea);

    $("#stream").prepend(newTweetCont);






  });





});
