$('document').ready(function () {
  $('.list li a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
  });
  // 點擊愛心時，切換效果
  $('.menuItem i').on('click', function () {
    $(this).toggleClass('fa-regular fa-heart');
    $(this).toggleClass('fa-solid fa-heart');
  });

  //點擊漢堡選單時show
  $('.navbarShow').on('click', function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('navbar-show');
  });
});
