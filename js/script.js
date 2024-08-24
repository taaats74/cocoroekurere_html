"use strict"

{
  $(document).ready(function(){
    $('.voice-wrapper').slick({
    autoplay: true,
    speed: 1500,
    autplaySpeed: 3000,
    dots: true,
    nextArrow: $(".next"),
    prevArrow: $(".prev"),
    slidesToShow: 3,
      responsive: [
        {
          breakpoint: 880,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  });

  window.addEventListener('load', function() {
  var maxHeight = 0;
  $('.voice-wrapper .voice .inner').each(function(idx, elem) {
    var height = $(elem).height();
    if(maxHeight < height) {
      maxHeight = height;
    }
  });
    $('.voice-wrapper .voice .inner').height(maxHeight);
  });
}

{
  $(function(){
    $('.faq-slide').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 8000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 4, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });
}

{
  const spMenuIcon = document.querySelector(".menu-icon");
  const spMenu = document.querySelector(".sp-menu");
  const spMenuLists = document.querySelectorAll(".sp-menu ul li a");

  spMenuIcon.addEventListener("click", () => {
    spMenuIcon.classList.toggle("active");
    spMenu.classList.toggle("active");
  });

  spMenuLists.forEach((list) => {
    list.addEventListener("click", () => {
      console.log(list);
      spMenu.classList.toggle("active");
      spMenuIcon.classList.toggle("active");
    });
  });
}

{
  const targetElement = document.querySelectorAll('.animation-target');
  const topTargetElement = document.querySelectorAll('.top-animation-target');
  const topTargetElementSp = document.querySelectorAll('.top-animation-target-sp');

  console.log(targetElement);

  // ロードされたらトップのアニメーションが読み込まれる
  window.addEventListener('load', function() {
    topTargetElement.forEach(function(element, index) {
      // index を利用して時間差を設定（0.5秒ごとに遅延を追加）
      const delay = index * 0.7; // 各要素に0.5秒の差をつける
      element.style.transitionDelay = `${delay}s`;

      // 'show' クラスを追加してアニメーションを開始
      element.classList.add('show');
    });
  });

  window.addEventListener('load', function() {
    topTargetElementSp.forEach(function(element, index) {
      // index を利用して時間差を設定（0.5秒ごとに遅延を追加）
      const delay = index * 0.7; // 各要素に0.5秒の差をつける
      element.style.transitionDelay = `${delay}s`;

      // 'show' クラスを追加してアニメーションを開始
      element.classList.add('show');
    });
  });

  window.addEventListener('scroll', () => {
    for (let i = 0; i < targetElement.length; i++){
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .5;
      console.log(getElementDistance);
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add('show');
      }
    }
  });
}

{
  // ヘッダーとフッターのスムーススクロール
  $(function () {
    let pcMenu = $('header a');
  pcMenu.click(function(){
    let speed = 1500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 70;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });

  $(function () {
    let pcMenuFooter = $('footer a');
  pcMenuFooter.click(function(){
    let speed = 1500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 70;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });

  $(function () {
    let spMenu = $('.sp-menu a');
  spMenu.click(function(){
    let speed = 1500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 70;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });
  });
}
