// タブ
$('#smarttab').smartTab({
  autoAdjustHeight: false,
  enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});
// slick
$('.customer__main').slick({
  arrows: false,
  autoplay: false,
  adaptiveHeight: true,
  centerMode: false,
  dots: true,
  variableWidth: true,
  slidesToShow: 3,
	slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "15%",
      }
    }
  ]
});
// アコーディオンのタイトルがクリックされたら
$('.faq__box-top').on('click', function(e) {

  // .accordion-contentを選択
  var content = $(this).next('.accordion-content');

  // .accordion-contentを表示・非表示
  content.slideToggle();
  //openクラスをつける
  $(this).toggleClass("open");
});