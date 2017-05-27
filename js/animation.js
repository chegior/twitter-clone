$(document).ready(function(){


//////////OBJECT TWEET///////////////

/////////////////////////////////////
  // function hoverCallback () {
  //   console.log('test', this)
  //   $(this).find('.tweet-actions').toggle();
  //   $(this).find('.stats').css('display','none');
  // }


  $('#tweet-controls').hide();
  $('.tweet-actions').css('display','none');
  $('.stats').css('display','none');



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
    var name = 'Chedro';
    var textArea = $('.tweet-compose').val();
    var time = $.timeago(new Date()); //adding the

    newTweetCont.find('.fullname').html(name);
    newTweetCont.find('.avatar').attr('src',image);
    newTweetCont.find('.tweet-text').html(textArea);
    newTweetCont.find('.time').html(time);

    $("#stream").prepend(newTweetCont);


    });


$(document).on('mouseenter','.tweet', function() {
  $(this).find('.tweet-actions').show();
});

$(document).on('mouseleave','.tweet', function() {
  $(this).find('.tweet-actions').hide();
  $(this).find('.stats').hide();
});

$(document).on('click','.tweet',function(){
  $(this).find('.stats').show();
});







});
