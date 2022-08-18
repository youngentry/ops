$(function () {
  $(".Header .menu li").on("click", function (e) {
    e.preventDefault();
    $(this).addClass("on").siblings().removeClass("on");
  });

  $(".menuBtn").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("on");
  });

  $(".mainSlider").slick({
    autoplay: true,
  });

  $(".jarSlider").slick({
    centerMode: true,
    centerPadding: "10%",
  });

  // $('.jarSlider').on('afterChange',function(e,s,c) {
  //   $('.jarSlider.slick-current')
  // })
  $(".reviewSlider").slick({
    slidesToShow: 3,
  });

  $(".Review .right").mousemove(function (e) {
    var x = e.pageX;
    var y = e.pageY;
    $(".ReviewScrollPointer").css("left", x + "px");
    $(".ReviewScrollPointer").css("top", y + "px");
    $(".ReviewScrollPointer").css("display", "block");
  });
});
