$(function(){
  "use strict";

  //変数の定義・データ取得
  var today;

  //ローカルストレージ記録の取得
  var isChallenger = localStorage.getItem("isChallenger")
  var dayCnt = localStorage.getItem("dayCnt");
  var startDate = localStorage.getItem("startDate");
  var lastAccess = localStorage.getItem("lastAccess");
  showLog();

  //ウィンドウサイズの反映
  var windowH = $(window).height();
  if(windowH < 766) windowH = 766;
  $(".base").css("height", windowH * 3);
  $("#view-frame, #intro-page, #void, #main-page").css("height", windowH);

  //日付の取得
  (function getDate(){
    var dt = new Date();
    var year = dt.getFullYear();
    var month = ("0" + (dt.getMonth() + 1)).slice(-2);
    var date = ("0" + dt.getDate()).slice(-2);
    var hour = ("0" + dt.getHours()).slice(-2);
    var min = ("0" + dt.getMinutes()).slice(-2);
    today = "" + year + "/" + month + "/" + date + "/" + hour + "/" + min;
  }());


  //チャレンジしていない場合
  if(lastAccess == undefined){
    //intro-pageを表示
    $('html,body').animate({ scrollTop: 0 }, 1);

    //今日から始める
    $("#new-challenge").click(function(){
      var target = $("#main-page").offset().top;
      $("#view-frame").animate({scrollTop:target}, 400, "swing");

      dayCnt = 1;
      $("#dayCnt").text(dayCnt);
      $("#comment").text(" #100DaysOfCode #Day" + dayCnt)
      $("#start-date").text(today);
      $(".lastAccess").css("visibility", "hidden");
      // localStorage.setItem("isChallenger", "challenger");
      localStorage.setItem("dayCnt", dayCnt);
      localStorage.setItem("startDate", today);
      localStorage.setItem("lastAccess", today);
      showLog(); //開発用
    });


    //継続して始める
    $("#continue").click(function(){
      $("#new-challenge").fadeOut(500);
      $(".nav-right").fadeOut(500);
      $("#continue").fadeOut(500);
      $(".fadein-wrap").fadeIn(1000);
    });

    $("#continue-days").keyup(function(){
      dayCnt = $(this).val();
      if(dayCnt > 0 && Math.round(dayCnt) == dayCnt){
        $("#continue-start").addClass("accept");
        $("#continue-start").css("opacity", 1);
        $("#continue-days").css("font-size", "25px");
      }else{
        $("#continue-start").css("opacity", 0.5);
        $("#continue-start").removeClass("accept");
        $("#continue-days").css("font-size", "12px");
      }
    });

    $('#continue-start').click(function(){
      if(dayCnt > 0 && Math.round(dayCnt) == dayCnt){
        var target = $("#main-page").offset().top;
        $("#view-frame").animate({scrollTop:target}, 400, "swing");

        $("#dayCnt").text(dayCnt);
        $("#comment").text(" #100DaysOfCode #Day" + dayCnt)
        $(".startDate").css("visibility", "hidden");
        $(".lastAccess").css("visibility", "hidden");
        // localStorage.setItem("isChallenger", "challenger");
        localStorage.setItem("dayCnt", dayCnt);
        localStorage.setItem("lastAccess", today);
        showLog();
      }
    });

  }else{
    //チャレンジ中の場合
    //main-pageを表示
    $('#view-frame').animate({ scrollTop:windowH * 2}, 1);
    $("#lastAccess").text(lastAccess);

    //学習日数の加算
    if(lastAccess != today){
      dayCnt = dayCnt - 0 + 1;
      localStorage.setItem("dayCnt", dayCnt)
      localStorage.setItem("lastAccess", today);
      showLog();
    }
    $("#dayCnt").text(dayCnt);
    $("#comment").text(" #100DaysOfCode #Day" + dayCnt)

    //開始日の表示設定
    if(startDate == undefined){
      $(".startDate").css("visibility", "hidden");
    }else{
      $("#start-date").text(startDate);
    }
  }


  //コメントの入力
  $("#comment").on("click change keyup", function(){
    $(this).addClass("comment-anm");

    var comment = $(this).val();
    $("#textCnt").text(280 - comment.length);
    if(comment.length < 270){
      $("#textCnt").css("color", "rgb(150, 150, 150)")
    }else if(comment.length < 280){
      $("#textCnt").css("color", "rgb(200, 120, 120)")
    }else {
      $("#textCnt").css("color", "rgb(200, 60, 60)")
    }

  });

  $("#tw-btn").attr("href", "https://twitter.com/intent/tweet?text=" + comment + "&hashtags=" + "100DaysOfCode," + "Day" + dayCnt);


  //学習日数の修正
  $("#modify").click(function(){
    var modifyCnt = window.prompt("学習した日数を入力してください","") - 0;
    if(modifyCnt > 0 && Math.round(modifyCnt) === modifyCnt){
      dayCnt = modifyCnt;
      $("#dayCnt").text(dayCnt);
      localStorage.setItem("dayCnt", dayCnt);
      showLog();
    }else if(modifyCnt == 0){
    }else {
      alert("学習した日数は整数で入力してください")
    }
  });


  //チャレンジの終了
  $("#graduate").click(function(){
    if(confirm("100DaysOfCodeチャレンジを終了しますか？")){
      alert(dayCnt + "日間チャレンジお疲れ様でした！");
      // localStorage.removeItem("isChallenger");
      localStorage.removeItem("dayCnt");
      localStorage.removeItem("startDate");
      localStorage.removeItem("lastAccess");
      location.reload();
    }
  });



  //開発用検証コマンド
  $(document).on("keypress", function(e){
    if(e.keyCode == 101){
      //Rキー 記録削除
      // localStorage.removeItem("isChallenger");
      localStorage.removeItem("dayCnt");
      localStorage.removeItem("startDate");
      localStorage.removeItem("lastAccess");
      console.log("data-remove");
      showLog();
    }else if(e.keyCode == 115){
      //Sキー　ログを見る
      console.log("show-log");
      showLog();
    }
  });

  function showLog(){
    // console.log("isChallenger = " + localStorage.getItem("isChallenger"));
    console.log("dayCnt = " + localStorage.getItem("dayCnt"));
    console.log("startDate = " + localStorage.getItem("startDate"));
    console.log("lastAccess = " + localStorage.getItem("lastAccess"));
    console.log("-----------------------");
  }

});
