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
    // トップにスクロール
    scrollTo({
      top: $("header").position().top,
      left: $("header").position().left,
      behavior: "smooth",
    });
  });

  // aboutリンククリック
  $("#aboutLink").on("click", function(){
    // aboutセクションにスクロール
    scrollTo({
      top: $("#sec-about").position().top,
      left: $("#sec-about").position().left,
      behavior: "smooth",
    });
  });

  // worksリンククリック
  $("#worksLink").on("click", function(){
    // aboutセクションにスクロール
    scrollTo({
      top: $("#sec-works").position().top,
      left: $("#sec-works").position().left,
      behavior: "smooth",
    });
  });

  // スクロール判定
  $(window).scroll(function(){
    if($(this).scrollTop() >= 100){
      // backToTopを表示
      $("#backToTop").css("visibility", "visible");
      $("#backToTop").css("opacity", 1);
    }
    else{
      // backToTopを非表示
      $("#backToTop").css("opacity", 0);
      $("#backToTop").css("visibility", "hidden");
    }
  });

  $("#backToTop").on({
    "mouseenter": ()=> {$("#backToTop").css("opacity", 0.5)},
    "mouseout": ()=> {$("#backToTop").css("opacity", 1)},
  });
});