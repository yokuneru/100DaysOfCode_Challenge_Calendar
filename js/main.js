$(function(){
  'use strict';

  var comment = "";
  var days = 0;

  $("#form").on("change keyup", function(){
    comment = $(this).val();

    $("#twBtn").attr("href", "https://twitter.com/intent/tweet?text=" + comment + "&hashtags=" + "100DaysOfCode," + "Day_" + days);
  });


//動作確認用
  $(document).mousedown(function(){
    // console.log( $("#twBtn").attr("href") );
  });


  if($.cookie("visitCnt") == undefined){
    console.log(1);
    $.cookie("visitCnt") = 1;

  }else{
    $.cookie("visitCnt") + 1;
    console.log($.cookie("visitCnt"));
  }


});
