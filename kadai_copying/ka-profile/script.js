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

  // 画像オーバーレイ
  $(".clickImg").on("click", function(){
    let src = $(".clickImg").attr("src");
    $("#overlay1").fadeIn();

    console.log(src);
    console.log();
  });
});