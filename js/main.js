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
<<<<<<< HEAD
    $.cookie("visitCnt", 1, {expires: 30});
  }else{
    var cnt = $.cookie("visitCnt");
    $.cookie("visitCnt", cnt + 1, {expires: 30});
=======
    $.cookie("visitCnt", 1);

  }else{
    $.cookie("visitCnt") += 1;
>>>>>>> daa469cf1e77a6392cd4f6991d5249ccd70286f4
    console.log($.cookie("visitCnt"));
  }

});
