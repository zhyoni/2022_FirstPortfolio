$(document).ready(function(){
  $('#datepicker').datepicker({
     dateFormat: 'yy-mm-dd' //달력 날짜 형태
     ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
     ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
     ,changeYear: true //option값 년 선택 가능
     ,changeMonth: true //option값  월 선택 가능
     ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
     ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
     ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
     ,buttonText: "선택" //버튼 호버 텍스트
     ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
     ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
     ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
     ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
     ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
     ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
     ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
 });

 // $(".ui-datepicker-calendar td").on("click",function(){
 //   // $(this).addClass("on");
 //   // $(this).append("<span></span>")
 // });

 $(".kakao,.naver,.face,.guest").click(function(e){
     e.preventDefault();
   location.href = "../nagaza/home.html";
 });




// main slider
var count = 0;
var slideWidth = $(".slider > li").width();
$(".btnNext").click(function(){
  count++;
  if(count > 2){
    count = 0;
  }
  $(".slider").css("left",-slideWidth*count+"px");
  $(".slider > li").removeClass("on");
  $(".slider > li").eq(count).addClass("on");
  $(".pagination > ul > li").removeClass("on");
  $(".pagination > ul > li").eq(count).addClass("on");
});
$(".btnPrve").click(function(){
    count--;
    if(count < 0){
      count = 2;
    }
    $(".slider").css("left",-slideWidth*count+"px");
    $(".slider").css("left",-slideWidth*count+"px");
    $(".slider > li").removeClass("on");
    $(".slider > li").eq(count).addClass("on");
    $(".pagination > ul > li").removeClass("on");
    $(".pagination > ul > li").eq(count).addClass("on");
  });
  var timer1 = setInterval(function(){
     count++;
     if(count > 2){
       count = 0;
     }
     $(".slider").css("left",-slideWidth*count+"px");
     $(".slider > li").removeClass("on");
     $(".slider > li").eq(count).addClass("on");
     $(".pagination > ul > li").removeClass("on");
     $(".pagination > ul > li").eq(count).addClass("on");
   },2000);


//walk_record1
$(".stop").click(function(){
  $(".map >p").addClass("off");
  $(".map >.dogimg").addClass("off");
  $(".opBox").addClass("on")

});

// c1 colorList
  var cl = false;
 $(".colorp").click(function(){
   if (cl == false) {
     $(".colorList").addClass("on");
     cl = true;
   }else{
        $(".colorList").removeClass("on");
        cl = false;
   }
});
//c3
$(".kinds_Li").click(function(){
  if (cl == false) {
    $(this).addClass("on");
    cl = true;
  }else{
     $(this).removeClass("on");;
     cl = false;
  }
});
//event
$(".eventTeb > dt").click(function(){
  $(".eventTeb > dt").removeClass("on");
  $(this).addClass("on");
  $(".eventTeb > dd").removeClass("on");
  $(this).next().addClass("on");
});

//알림
$(".chime_li > dt").click(function(){
  $(".chime_li > dt").removeClass("on");
  $(this).addClass("on");
  $(".chime_li > dd").removeClass("on");
  $(this).next().addClass("on");
});

//커뮤니티
$(".comList > dt").click(function(){
  $(".comList > dt").removeClass("on");
  $(this).addClass("on");
  $(".comList > dd").removeClass("on");
  $(this).next().addClass("on");
});

$(".logo_5").click(function(){
   $(".tab_h").css("opacity","1");

});

// loding page
setTimeout(function(){
  $(".loding").addClass("top");
},2000);


$(".comListUl > li").click(function(){
  location.href = "./community1.html";
});

// var oponStatus = false; //
// var walkStatus = false; // 산책상태
// // 팝업창 확인 눌렀을 때
// if(walkStatus == false){
//   $(".opon").click(function(){
//
//     changePopup(walkStatus);
//     $(".opBox").addClass("opBox_off");
//     $(".map > p").addClass("on");
//     $(".map > img").addClass("on");
//     walkStatus = true;
//     playButton(walkStatus);
//     // walkStatus = true;
//   });
// }else{
//   $(".opon").click(function(){
//
//     changePopup(walkStatus);
//     $(".opBox").addClass("opBox_off");
//     $(".map > p").removeClass("on");
//     $(".map > img").removeClass("on");
//     walkStatus = false;
//     playButton(walkStatus);
//      // walkStatus = false;
//   });
// }
// if(walkStatus == false){
//   $(".opoff").click(function(){
//     $(".opBox").addClass("opBox_off");
//     $(".map > p").removeClass("on");
//     $(".map > img").removeClass("on");
//     walkStatus = false;
//     playButton(walkStatus);
//   });
// }else{
//   $(".opoff").click(function(){
//     walkStatus = changePopup(walkStatus);
//     $(".opBox").addClass("opBox_off");
//     $(".map > p").addClass("on");
//     $(".map > img").addClass("on");
//     walkStatus = true;
//     playButton(walkStatus);
//   });
// }
//
// $(".stop").click(function(){
//   $(".opBox").removeClass("opBox_off");
//   $(".map > p").removeClass("on");
//   $(".map > img").removeClass("on");
//   changePopup(walkStatus);
//   playButton(walkStatus);
//   walkStatus = false;
// });
//
// $(".onstop").click(function(){
//   $(".opBox").addClass("opBox_off");
//   $(".map > p").addClass("on");
//   $(".map > img").addClass("on");
//   walkStatus = true;
//   playButton(walkStatus);
// });
//
//
//
//
// function playButton(state){
//   if(state == false){
//     $(".onstop").attr("src","./img/svg/play.svg");
//     //재생
//   }else{
//     $(".onstop").attr("src","./img/svg/play_on.svg");
//     //일시정지
//   }
// }
//
// function changePopup(state){
//   if(state == false){
//     $(".walkopen").text("산책을 시작할까요?");
//   }else{
//     $(".walkopen").text("산책을 마칠까요?");
//   }
// }

// if(oponStatus == false){
//
//   $(".map > p").addClass("on");
//   $(".map > img").addClass("on");
//   oponStatus = true;
// }else{
//   // 일시정지 -> 플레이
//   var b = a.replace("_on.svg",".svg");
//   $(".map > p").removeClass("on");
//   $(".map > img").removeClass("on");
//   oponStatus = false;
// }


// $(".opon").click(function(){
//   walkStatus = true;
//
//   $(".opBox").addClass("opBox_off");
//   $(".map > p").addClass("on");
//   $(".map > img").addClass("on");
  // var a = $(".onstop").attr("src");
//
//   // alert(b);
//   // 플레이 -> 일시정지

//
//   // alert(c);
//   // var c = $(".onstop").attr("src",b);
//
// });
// 팝업창 취소 눌렀을 때














});
