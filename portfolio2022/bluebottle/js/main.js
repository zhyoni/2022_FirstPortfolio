$(document).ready(function(){

var count = 0;

$(".next").click(function(){
  count++;
  if(count > 8){
    count = 0;
  }
  $(".slider").css("transform","translateX("+(-10*count)+"%)");
  $(".slider > li").removeClass("on");
  $(".slider > li").eq(count).addClass("on")
  $(".numprve").text("0"+(count+1));
  $(".pagination ul li").removeClass("on");
  $(".pagination ul li").eq(count).addClass("on");
});

$(".prve").click(function(){
  count--;
  if(count < 0){
    count = 8;
  }
  $(".slider").css("transform","translateX("+(-10*count)+"%)");
  $(".slider > li").removeClass("on");
  $(".slider > li").eq(count).addClass("on");
  $(".numprve").text("0"+(count+1));
  $(".numnext").text("09");
  $(".pagination ul li").removeClass("on");
  $(".pagination ul li").eq(count).addClass("on");
});

// 비디오 글씨 효과
$(".mainVideo").mouseover(function(){
  $(".mainVideo > h2").addClass("on");
  $(".mainVideo > h3").addClass("on");

});

var timer1 = setInterval(function(){
  count++;
  if(count > 8){
    count = 0;
  }
  $(".slider").css("transform","translateX("+(-10*count)+"%)");
  $(".slider > li").removeClass("on");
  $(".slider > li").eq(count).addClass("on")
  $(".numprve").text("0"+(count+1))
  $(".pagination ul li").removeClass("on");
  $(".pagination ul li").eq(count).addClass("on");
},2500);


$(".pagination ul li").click(function(){
  count = $(this).index();
  $(".slider").css("transform","translateX("+(-10*count)+"%)");
  $(".pagination ul li").removeClass("on");
  $(".pagination ul li").eq(count).addClass("on");
});

$(".storeList,.prve,.next").mouseover(function(){
  clearInterval(timer1)
});

$(".storeList,.prve,.next").mouseout(function(){
  timer1  = setInterval(function(){
    count++;
    if(count > 8){
      count = 0;
    }
  $(".slider").css("transform","translateX("+(-10*count)+"%)");
  $(".slider > li").removeClass("on");
  $(".slider > li").eq(count).addClass("on")
  $(".numprve").text("0"+(count+1))
  $(".pagination ul li").removeClass("on");
  $(".pagination ul li").eq(count).addClass("on");
},2500);

});


var clickli = false;
$(".menumobile").click(function(){
  if(clickli == false){
    $(".gnbmobile").addClass("on");
    $(".menumobile").addClass("on");
      clickli = true;
      $(".gnbmobile > li").click(function(){
        if(clickli == false){
          $(this).children().addClass("on");
          clickli = true;
        }else{
          $(this).children().removeClass("on");
          clickli = false;
        }
      });
  }else{
    $(".gnbmobile").removeClass("on");
    $(".menumobile").removeClass("on");
      clickli = false;

  }
});

//
// $(".gnbmobile > li").click(function(){
//   if(clickli == false){
//     $(this).children().addClass("on");
//     clickli = true;
//   }else{
//     $(this).children().removeClass("on");
//     clickli = false;
//   }
// });

$(".fa-chevron-circle-up").click(function(){
  $("html,body").clearQueue().animate({scrollTop:0},1000);
});


});
