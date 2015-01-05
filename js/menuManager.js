// JavaScript for menu control


$(document).ready(function() {
	var baseMenuFlag=false; //variable to keep track if menu is open
	
	//scroll
	 $("#baseMenu").niceScroll({horizrailenabled:false,zindex:6});
	 $("#subMenu").niceScroll({horizrailenabled:false,zindex:3});
	//click or tap hamburger menu
	$("#mobile-menu").click(function(){
		if(baseMenuFlag){
			// Hide the menu
			$('#baseMenu').stop(true, true).animate({'left' : "-160px" });
			$('#subMenu').stop(true, true).animate({'left' : "0px" });
			$('#content').stop(true, true).animate({'left' : "0px" });
			$('#subMenu div').stop(true, true).hide();
			$('#subMenu').stop(true, true).animate({'width' : "0px" });
			//unpause  sliders
			baseMenuFlag=false;
		}else{
			// Show the menu
			$('#baseMenu').stop(true, true).animate({'left' : "0px" });
			$('#subMenu').stop(true, true).animate({'left' : "160px" });
			$('#content').stop(true, true).animate({'left' : "160px" });
			//pause  sliders
			baseMenuFlag=true;
		}
		return false;
	});
	
	//tap
	var selectedMenu="";
	var contentWidth=$('#content').width();
	$('.baseMenuItem').click(function(){
			if(selectedMenu!="")invertColor(selectedMenu+"MenuItem");
		if(selectedMenu==$(this).closest('li').attr('id').substr(0,4)){
			//close submenu
			if(contentWidth>1024) $('#content').animate({'width': "auto", queue:false});
			$('#subMenu').stop(true, true).animate({'width' : "0px",queue:false });
			$('#content').stop(true, true).animate({'left' : "160px" , queue:false});
			selectedMenu="";
		}else{
			if(contentWidth>1024) $('#content').animate({'width': contentWidth, queue:false});
			selectedMenu=$(this).closest('li').attr('id').substring(0,4);
			//pause slider (if not paused before for mobile)
			//reveal the submenu for the selected menu item
			$('#subMenu div').stop(true, true).hide();
			//$('#subMenu').stop(true, true).animate({
			$('#'+selectedMenu+'SubMenu').show();
			invertColor($(this).closest('li').attr('id'));
			//switch styles for selected elements
			//expand submenu area
			$('#subMenu').animate({'width' : "280px" , queue:false});
		
			$('#content').stop(true, true).animate({'left' : "460px" });
		}
		
/*						$('#subMenu img').attr("src","images/expandedmenu3_02.png");
						$('.tri').animate({right:-20, opacity:"hide"}, 200);
						$('#imprint .tri').animate({right:0, opacity:"show"}, 200);
						// Open the menu
						$('#subMenu').stop(true, true).animate({'left' : "219px" });
						
						$('#content').stop(true, true).animate({'left' : "612px" });*/
				
		});
		$("#content").click(function(){
			closeAll();
		});
	
		$('.offHover').hover(  
			   function(){  
				  $(this).find($( ".onHover" )).stop().fadeTo('slow', 0.8);
				  $(this).find($( ".darkHover" )).stop().fadeTo('slow', 0.9);   
			   },  
			   function(){  
				  $(this).find($( ".onHover" )).stop().fadeTo('slow', 0);  
		 });  
		 $("#buy").hover(
      function () {
        $("#buyOptions").stop().fadeTo('slow', 1);
      }
      );
	  $("#buyOptions").mouseleave(
      function () {
        $("#buyOptions").stop().fadeTo('slow', 0);
      }
      );
		 
		 function invertColor(id){
			 var fontC=$('#'+id).css("color");
			 var backC=$('#'+id).css("background-color");
			 $('#'+id).css("color",backC);
			 $('#'+id).css("background-color",fontC);
		 }
		 
			if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleMenu);
            }


            if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
                $(window).bind("orientationchange", ScaleMenu);
            }
			
			function ScaleMenu() {
				//var clientWidth=$(window).width();
				var clientWidth=document.body.clientWidth;
				console.log('window '+clientWidth);
				closeAll()
				if(clientWidth>1024&&clientWidth<=1280){
					$('#content').stop(true, true).animate({'left' : "160px" });
					$('#subMenu').stop(true, true).animate({'left' : "160px" });
					$('#baseMenu').stop(true, true).animate({'left' : "0px" });
				}else if(clientWidth>1280){
					$('#content').stop(true, true).animate({'left' : "160px" });
					$('#baseMenu').animate('left','50%').animate('left','-=640px');
					$('#subMenu').animate('left','50%').animate('left','-=480px');
				}else{
					$('#content').stop(true, true).animate({'left' : "0px" });
					$('#baseMenu').stop(true, true).animate({'left' : "-160px" });
					$('#subMenu').stop(true, true).animate({'left' : "0px" });
				}
            }
			function closeAll(){
				if(baseMenuFlag){
					$('#baseMenu').stop(true, true).animate({'left' : "-160px" });
					$('#subMenu').stop(true, true).animate({'left' : "0px" });
					$('#content').stop(true, true).animate({'left' : "0px" });
					$('#subMenu div').stop(true, true).hide();
					$('#subMenu').stop(true, true).animate({'width' : "0px" });
					baseMenuFlag=false;
					if(selectedMenu!=""){
						$('#subMenu').stop(true, true).animate({'width' : "0px" });
						invertColor(selectedMenu+'MenuItem');
						selectedMenu="";
					}
				}else if(selectedMenu!=""){
					$('#subMenu').stop(true, true).animate({'width' : "0px" });
					$('#content').stop(true, true).animate({'left' : "160px" });
					invertColor(selectedMenu+'MenuItem');
					selectedMenu="";
				}
			}

            ScaleMenu();
			
			
			
});