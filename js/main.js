$(function () {
  $(".mainSlider").slick({});

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
});
