$(function(){
  'use strict';

  var comment = $('#comment');
  var twBtn = $('.twitter-share-button');


  $('#btn').on('click', function(e){
    var value = comment.val();
    $('#confirm').text(value);

    // twBtn.setAttribute('data-text', 'wow');
    // twBtn.dataset.text = 'wow';

  });

});
