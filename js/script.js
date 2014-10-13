//-----Global Vars-------------------------------------------------------------------------------
var website_spinner,
    page_spinner;
var isSplash = true;

$(document).ready(function(){

//-------------------------------------------------
    var MSIE8 = ($.browser.msie) && ($.browser.version == 8);
	$.fn.ajaxJSSwitch({
		topMargin:490,//mandatory property for decktop
		bottomMargin:200,//mandatory property for decktop
		topMarginMobileDevices:490,//mandatory property for mobile devices
		bottomMarginMobileDevices:200,//mandatory property for mobile devices
		bodyMinHeight:900,
        delaySubMenuHide:700,
        fullHeight:false,
//-----menu---------------------------------------------------------------------------------------		
menuInit:function (classMenu, classSubMenu){
      classMenu.find(">li").each(function(){
        $(">a", this).append("<div class='openPart'></div>");
      })
    },
    buttonOver:function (item){
      if(MSIE8){
        item.css({"color":"#8e8e8e"});
        $(".openPart", item).css({"visibility":"visible","top":"54px"});
      }else{
        item.stop(true).animate({"color":"#8e8e8e"}, 200, "easeOutCubic");
        $(".openPart", item).stop(true).animate({"opacity":"1","top":"54px"}, 400, "easeOutCubic");
      }
    },
    buttonOut:function (item){
      if(MSIE8){
        item.css({"color":"#8e8e8e"});
        $(".openPart", item).css({"visibility":"hidden"});
      }else{
        item.stop(true).animate({"color":"#8e8e8e"}, 200, "easeOutCubic");
        $(".openPart", item).stop(true).animate({"pageLoadComplete:function (opacity":"0","top":"-30px"}, 400, "easeOutCubic");
      }
    },
		subMenuButtonOver:function (item){ 
		     // item.stop().animate({"color":"#9e9e9e"}, 300, "easeOutCubic");
        },
		subMenuButtonOut:function (item){
		      //item.stop().animate({"color":"#fff"}, 300, "easeOutCubic");
        },
		subMenuShow:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"block"});
			}else{
				subMenu.stop(true).css({"display":"block"}).animate({"opacity":"1"}, 400, "easeOutCubic");
			}
        },
		subMenuHide:function(subMenu){
            if(MSIE8){
				subMenu.css({"display":"none"});
			}else{
				subMenu.stop(true).delay(300).animate({"opacity":"0"}, 400, "easeOutCubic", function(){
					$(this).css({"display":"none"})
				});
      
			}
        },
//-----PAGE-----------------------------------------------------------------------------------------------
        pageInit:function (pages){
        },
		currPageAnimate:function (page){
              page.css({left:'1700px'}).stop(true).delay(150).animate({left:0}, 500, "easeOutExpo");
              isSplash = false;
               $('header').stop().animate({'margin-top':'333px'}, 350, 'easeOutExpo');
               //$('.close_btn').stop().animate({'opacity':1}, 350, 'easeOutExpo');

              $(window).trigger('resize'); 
        },
		prevPageAnimate:function (page){
              page.stop(true).animate({left:'-1700px'}, 100, "easeInExpo");
      
        },
		backToSplash:function (){
		      isSplash = true;
              $(window).trigger('resize'); 
             // $('.close_btn').stop().animate({'opacity':0}, 50, 'easeOutExpo');
 $('header').stop().animate({'margin-top':'95px'}, 350, 'easeOutExpo');
              
 //$('.bg_tint').stop().animate({'opacity':0,'margin-top':'180px'}, 350, 'easeOutExpo');
        },

		pageLoadComplete:function (){ 
 setTimeout(function () { 
        $("#jcarousel_2").jCarouselLite({
              btnNext: ".btnHolder2 > .nextBtn",
              btnPrev: ".btnHolder2 > .prevBtn",
              speed: 800,
              visible: 6
          }); 
 },500)

		  //$('ol.search_list').siblings('h2').css({width:'580px', 'float':'right'});
          //$('ol.search_list').css({width:'580px', 'float':'right'});


$('.pic').fancybox({'titlePosition': 'inside', 'overlayColor':'#e7231f'});  
		},
	});
//Loader---------------------------------------------------------------------------------------------------
loadersInit();
function loadersInit(){
        var opts = {
              lines: 17,
              length: 0, 
              width: 10, 
              radius: 25, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target = $("#webSiteLoader > span");
        website_spinner = new Spinner(opts).spin();
        target.append(website_spinner.el)   
        /////////////////////////////////
        var opts2 = {
              lines: 11,
              length: 0, 
              width: 10, 
              radius: 20, 
              rotate: 0, 
              color: '#fff', 
              speed: 1.3, 
              trail: 60, 
              shadow: false,
              hwaccel: false, 
              className: 'spinner', 
              zIndex: 2e9, 
              top: 'auto', 
              left: 'auto' 
        };
        var target2 = $("#pageLoader > span");
        page_spinner = new Spinner(opts2).spin();
        target2.append(page_spinner.el) 
}
})


$(window).load(function(){
//bgStretch------------------------------------------------------------------------------------------

  var cont1_position_flag=0;
 
  var cont_height1=$('header').height();
  
  $('header').animate({'top':0},400);
  



//Window resize-------------------------------------------

//--------------------------------------------------------------
    $("#webSiteLoader").delay(1200).animate({opacity:0}, 600, "easeInCubic", function(){
        website_spinner.stop();
        $("#webSiteLoader").remove();
    });
    
    //$(".image_resize").image_resize({}); 
  // $('.btnHolder1 > a').hoverSprite({onLoadWebSite:true}); 
        
//-----Window resize------------------------------------------------------------------------------------------
$(window).resize(
        function(){
            resize_function();
        }
    ).trigger('resize');
    
    var hashState=window.location.hash
    
    function resize_function(){
    var h_cont = $('header').height();
	var wh = $(window).height();
		m_top = ~~(wh-h_cont)/2;
            if(isSplash){
             // $('header').stop().animate({'padding-top':'0px','top':'-200px',opacity:0}, 750, 'easeOutExpo'); 
              // $('.contentHolder').stop().animate({height:0,'margin-top':'0px',opacity:0}, 750, 'easeOutExpo');
              //$('.contentHolder').stop(true).delay(450).animate({height:0,'margin-top':'0px',opacity:0}, 750, 'easeOutExpo'); 
              //$('.splash_menu').stop(true).delay(450).animate({'padding-top':0,'margin-right':0,opacity:1}, 750, 'easeOutExpo');
              $('.logo1').stop(true).delay(0).animate({'margin-top':'180px'}, 750, 'easeOutExpo').removeClass('logo_small');


              
                //setTimeout(function () {$('#gallery').stop().animate({'height':'498px'}, 750, 'easeOutExpo'); }, 450);          
            }else{ 
             // $('header').stop().animate({'padding-top':'0px','top':'67px',opacity:1}, 750, 'easeOutExpo'); 
              // $('.splash_menu').stop().animate({'padding-top':0,'margin-right':-4600,opacity:0}, 750, 'easeOutExpo');
               $('.logo1').stop().delay(0).animate({'margin-top':'50px'}, 750, 'easeOutExpo').addClass('logo_small');
             
               // $('.sf-menu').stop().animate({'padding-top':0,'margin-right':0,opacity:1}, 750, 'easeOutExpo');
                //setTimeout(function () {$('.contentHolder').stop().animate({height:'100%','margin-top':'-260px'}, 750, 'easeOutExpo'); }, 250);
               // $('.contentHolder').stop(true).delay(250).animate({height:'100%','margin-top':'-540px'}, 750, 'easeOutExpo');

            } 
    }
    $(document).resize(
        function(){}
    ).trigger('resize'); 
           

//-----------------------	

    //var testPerem;
    //testPerem = $('#wrapper .global .contentHolder').height()-350; 
    //$('#wrapper .global .contentHolder').css({height:testPerem});	
//window resize------------------------------------
    /*var h_cont=300;
	var h, new_h;
	setHeight();
	h=new_h;
	setSize();
	function setHeight(){
		new_h=$(window).height();
	}
    
	function setSize(){
		if (h>h_cont) {
			$('header').stop().animate({paddingTop:~~((h-h_cont)/2)});
		} else {
			$('header').stop().animate({paddingTop:0});
		}
	}
	setInterval(setNew,1);
	function setNew(){
		setHeight();
		if (h!=new_h) {
			h=new_h;
			setSize();
		}
	}*/
});