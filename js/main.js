$(function(){
  'use strict';
  var comment = "";
  var days = 1;

  $("#form").on("change keyup", function(){
    comment = $(this).val();

    $("#twBtn").attr("href", "https://twitter.com/intent/tweet?text=" + comment + "&hashtags=" + "100DaysOfCode," + "Day_" + days);

  });


//動作確認用
  $(document).mousedown(function(){
    console.log( $("#twBtn").attr("href") );
    console.log(comment);
  });

});
