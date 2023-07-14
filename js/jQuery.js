function intro(){
  setInterval(function(){
    $('div#intro>ul>li:eq(2)>img').fadeOut();
  },3000);

  setInterval(function(){
    $('div#intro>ul>li:eq(1)>img').fadeOut();
  },6000);

  setInterval(function(){
    $('div#intro>ul>li:eq(2)>img').fadeIn();
  },9000);

  setInterval(function(){
    $('div#intro>ul>li:eq(1)>img').fadeIn();
  },12000);

}

function codiGirl(){
$('ul#gallery>li>a').on('click',function(){
  var pic= $(this).attr('href');
  $('div#show02').prepend('<img src="'+pic+'" alt="여자아이 옷01">');
  $('div#show02>img:last').fadeOut(300,function(){
    $('div#show02>img:not(:eq(0))').remove();

  });
  return false;
});

$('p.up>img').on('click',function(e){
$('ul#gallery').animate({marginTop:'-=110px'},300,'swing');
});

$('p.down>img').on('click',function(e){
$('ul#gallery').animate({marginTop:'+=110px'},300,'swing');
});
}

function catalModal(){
  $('ul#gallery>li>a').on('click',function(e){
    $('div#back').show();
    $('div#main').show();

    var pic = $(this).attr('href');
    console.log(pic);
    $('dt').html('<img src="'+pic+'">');

    var mainWidth = $('#main').width()/2;
    var mainHeight = $('#main').height()/2;

 $('#main').css({marginLeft:'-'+mainWidth+'px',marginTop:'-'+mainHeight+'px'});
    return false;
  });
  $('#back').on('click',function(e){
    $(this).hide();
    $('#main').hide();
  });

}


 var modal01 = new Object();
  modal01.url = "images/years.jpg";
  modal01.alt = "연혁사진01";
  modal01.text01 = "01 유아 스킨케어 오투베베 런칭";
  modal01.text02 = "02 유아동 편집숍 카라멜 플라츠 1호전 오픈";
  modal01.text03 = "03 프리미엄 유아용품 브랜드 엘츠 런칭";
  modal01.action = function(){
     $('div#years01>dl>dt>img').attr('src',modal01.url).attr('alt',modal01.alt);
     $('dd.text01').text(modal01.text01);
     $('dd.text02').text(modal01.text02);
     $('dd.text03').text(modal01.text03);
  }


var  modal02 = new Object();
  modal02.url = "images/years01.jpg";
  modal02.alt = "연혁사진02"
  modal02.text01 = "01 북유럽 감성 브랜드 타이니플렉스 런칭";
  modal02.text02 = "02 베트남 Coop 그룹과 유통 프랜차이즈 계약 체결";
  modal02.text03 = "03 퓨토, 모기·진드기 기피제 디펜스 벅스 출시";
  modal02.action = function(){
    $('div#years02>dl>dt>img').attr('src',modal02.url).attr('alt',modal02.alt);
    $('dd.text04').text(modal02.text01);
    $('dd.text05').text(modal02.text02);
    $('dd.text06').text(modal02.text03);
  }
var  modal03 = new Object();
  modal03.url = "images/years02.jpg";
  modal03.alt = "연혁사진03"
  modal03.text01 = "01 영·유아용품업체 디자인스킨 인수";
  modal03.text02 = "02 이천 물류센터 준공";
  modal03.text03 = "03 퓨토, 모기·진드기 기피제 디펜스 벅스 출시";
  modal03.action = function(){
    $('div#years01>dl>dt>img').attr('src',modal03.url).attr('alt',modal03.alt);
    $('dd.text01').text(modal03.text01);
    $('dd.text02').text(modal03.text02);
    $('dd.text03').text(modal03.text03);
  }
  var  modal04 = new Object();
    modal04.url = "images/years03.jpg";
    modal04.alt = "연혁사진04"
    modal04.text01 = "01 랑시코리아(주)(랑시그룹 자회사)로 (주)아가방앤컴퍼니 최대주주 변경";
    modal04.text02 = "02 자연발효 스킨케어 에코뮤(ECOMU) 출시";
    modal04.text03 = "03 상해법인 '상해 아가방 무역 유한공사' 출범";
    modal04.action = function(){
      $('div#years02>dl>dt>img').attr('src',modal04.url).attr('alt',modal04.alt);
      $('dd.text04').text(modal04.text01);
      $('dd.text05').text(modal04.text02);
      $('dd.text06').text(modal04.text03);
    }
    var  modal05 = new Object();
      modal05.url = "images/years04.jpg";
      modal05.alt = "연혁사진05"
      modal05.text01 = "01 퓨토 테라피 출시";
      modal05.text02 = "02 퓨토 테라피 중국 쇼케이스";
      modal05.text03 = "03 퓨토 마더스(임산부 전용) 발매";
      modal05.action = function(){
        $('div#years01>dl>dt>img').attr('src',modal05.url).attr('alt',modal05.alt);
        $('dd.text01').text(modal05.text01);
        $('dd.text02').text(modal05.text02);
        $('dd.text03').text(modal05.text03);
      }
      var  modal06 = new Object();
        modal06.url = "images/years05.jpg";
        modal06.alt = "연혁사진06"
        modal06.text01 = "01 에뜨와 브랜드 리뉴얼";
        modal06.text02 = "02 美 임부복 전문기업 [데스티네이션 마터니티]와 국내 독점 판매 계약 체결 및 국내 론칭";
        modal06.text03 = "03 BASIC ELLE 브랜드 리뉴얼";
        modal06.action = function(){
          $('div#years02>dl>dt>img').attr('src',modal06.url).attr('alt',modal06.alt);
          $('dd.text04').text(modal06.text01);
          $('dd.text05').text(modal06.text02);
          $('dd.text06').text(modal06.text03);
        }
        var  modal07 = new Object();
          modal07.url = "images/years06.jpg";
          modal07.alt = "연혁사진07"
          modal07.text01 = "01 ELLE 브랜드 리뉴얼";
          modal07.text02 = "02 아토피 전문 스킨케어 퓨토(PUTTO) 런칭";
          modal07.text03 = "03 데일리웨어 브랜드 이야이야오 런칭";
          modal07.action = function(){
            $('div#years01>dl>dt>img').attr('src',modal07.url).attr('alt',modal07.alt);
            $('dd.text01').text(modal07.text01);
            $('dd.text02').text(modal07.text02);
            $('dd.text03').text(modal07.text03);
          }

  function modalY(){
    $('ul#gallery>li:not(:odd)').on('click',function(){
      $('div#years01').fadeIn();

      var yearsN = $(this).attr('name');
      switch(yearsN){
        case 'modal01':modal01.action();
        break;
        case 'modal02':modal02.action();
        break;
        case 'modal03':modal03.action();
        break;
        case 'modal04':modal04.action();
        break;
        case 'modal05':modal05.action();
        break;
        case 'modal06':modal06.action();
        break;
        case 'modal07':modal07.action();
        break;
      }
      $('div#years02').fadeOut();
    });
$('ul#gallery>li:not(:even)').on('click',function(){
  $('div#years02').fadeIn();

  var yearsN = $(this).attr('name');
  switch(yearsN){
    case 'modal01':modal01.action();
    break;
    case 'modal02':modal02.action();
    break;
    case 'modal03':modal03.action();
    break;
    case 'modal04':modal04.action();
    break;
    case 'modal05':modal05.action();
    break;
    case 'modal06':modal06.action();
    break;
    case 'modal07':modal07.action();
    break;
  }
  $('div#years01').fadeOut();
});
  }

function btn(){
  $('div#contant>p.btnP').on('click',function(e){
    $('div#show>ul#gallery').animate({marginTop:'-=100px'},600,'swing');
  });
}
