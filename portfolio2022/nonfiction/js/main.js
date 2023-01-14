$(document).ready(function(){

  var count = 0;
  var slideWidth = $(".slider > li").width();

// main - slider_wrap
  $(".btnNext").click(function(){
    count++;
    if(count > 4){
      count = -1;
    }
    $(".slider").css("left",-slideWidth*count+"px");
    $(".slider > li").removeClass("on");
    $(".slider > li").eq(count+1).addClass("on")
    $(".currentBar").css("width",20*(count+1)+"%");
  });

  $(".btnPrve").click(function(){
    count--;
    if(count < -1){
      count = 4;
    }
    $(".slider").css("left",-slideWidth*count+"px");
    $(".slider > li").removeClass("on");
    $(".slider > li").eq(count+1).addClass("on");
    $(".currentBar").css("width",20*(count+1)+"%");
  })

// con3
  $(".con3 > ul > li").click(function(){
     if($(".con3 > ul > li > ul").is(":visible")){
         $(this).children().css("display","none");
     }
     else{
         $(this).children().css("display","block");
     }
  });

  //subpage - subgnb
  $(".subgnb > ul > li").click(function(){
     if($(".subgnb > ul > li > ul").is(":visible")){
         $(this).children().css("display","none");
     }
     else{
         $(this).children().css("display","block");
     }
  });


  var btnOn = false;
  $(".btn_open").click(function(){
    if(btnOn == false){
      $(".btn_open").addClass("on");
      $(".gnb").addClass("on");
      btnOn = true;
    }else{
        $(".btn_open").removeClass("on");
        $(".gnb").removeClass("on");

        btnOn = false;
    }

  });
  // $(document).mousemove(function(e){
  //   var posX= e.pageX;
  //   var posY= e.pageY;
  //   $(".cursor").css("display","block");
  //   $(".cursor").css("left",posX-10).css("top",posY-10);
  // });





});
