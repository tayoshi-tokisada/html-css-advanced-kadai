$(function(){
  // メインビジュアルカルーセル
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    Infinite: true,
    arrows: false,
    fade: true,
  });

  // 画像モーダルオープン
  $(".clickImg").on("click", function(){
    let src = $(this).attr("src");
    $("#modal").attr("src", src);
    $("#overlay").fadeIn();
  });
  // 画像モーダルクローズ
  $("#modalClose").on("click", function(){
    $("#overlay").fadeOut();
  });

  // トップボタンクリック
  $("#topBtn").on("click", function(){
    scrollTo({
      top: $("header").position().top,
      left: $("header").position().left,
      behavior: "smooth",
    });
  });

  $(window).scroll(function(){
    if($(this).scrollTop() >= 100){
      $("#backToTop").css("visibility", "visible");
      $("#backToTop").css("opacity", 1);
    }
    else{
      $("#backToTop").css("opacity", 0);
      $("#backToTop").css("visibility", "hidden");
    }
  });
});