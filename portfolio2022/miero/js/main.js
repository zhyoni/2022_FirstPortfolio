$(document).ready(function(){
  // 슬라이드 기능
  // 1. 이전/다음 버튼 클릭 시 슬라이드 구동

  var count = 0;
  // var slideWidth = $(".mainSlider > li").width();
  $(".btn_next").click(function(){
    count++;
    if(count > 2){
      count = 0;
    }
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagination > li").removeClass("active");
    $(".pagination > li").eq(count).addClass("active");
  })
  $(".btn_prev").click(function(){
    count--;
    if(count < 0){
      count = 2;
    }
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagination > li").removeClass("active");
    $(".pagination > li").eq(count).addClass("active");
  });

  // 2. pagination부분 슬라이드 구동
  // 2-1 내가 클릭한 리스트의 순번구해야함
  // 2-2.순번에 맞는 기차칸이 보여야함
$(".pagination > li").click(function(){
  count = $(this).index();
  $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
  $(".pagination > li").removeClass("active");
  $(".pagination > li").eq(count).addClass("active");
});


  // 3. 자동 슬라이드
  // 3-1. 3초에 한번식 나대신 자바스크립트가 next버튼을 눌렀을 때 하는 동작을 수행
    var timer1 = setInterval(function(){
    count++;
    if(count > 2){
      count = 0;
    }
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagination > li").removeClass("active");
    $(".pagination > li").eq(count).addClass("active");
  },3000);

  $(".mainBanner").mouseover(function(){
    clearInterval(timer1);
  });
  $(".mainBanner").mouseout(function(){
    timer1 = setInterval(function(){
    count++;
    if(count > 2){
      count = 0;
    }
    $(".mainSlider").css("transform","translateX("+(-count*33.333)+"%)");
    $(".pagination > li").removeClass("active");
    $(".pagination > li").eq(count).addClass("active");
  },3000);

  });
  // 탭메뉴 기능
  $(".tabMenu1 > dt").click(function(){
    $(".tabMenu1 > dt").removeClass("on");
    $(this).addClass("on");
  });

//위로버튼 클릭했을 때 가장위로 스크롤 되기
$(".btn_top").click(function(){
  $("html,body").animate({scrollTop:0},1000)
});

var btnStatus = false;
$(".btnGnb").click(function(){
  // 메뉴를 열었을 때
  if(btnStatus == false){
    $(".btnGnb").addClass("on");
    $(".moGnb").addClass("on");
    btnStatus = true;
  }else{
    // 메뉴를 닫았을 때
    $(".btnGnb").removeClass("on");
    $(".moGnb").removeClass("on");
    $(".moGnb > li").removeClass("on")
    btnStatus = false;
  }
});

$(".moGnb > li").click(function(){
  $(".moGnb > li").removeClass("on");
  $(this).addClass("on");

});













});
