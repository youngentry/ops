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

  $(".Re2 .right").mousemove(function (e) {
    var x = e.pageX;
    var y = e.pageY;
    $(".Re2ScrollPointer").css("left", x + "px");
    $(".Re2ScrollPointer").css("top", y + "px");
    $(".Re2ScrollPointer").css("display", "block");
  });
});
