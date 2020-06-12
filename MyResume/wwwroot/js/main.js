        // loader 
      $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
      })

        // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_header').addClass('sticky');
            } else {
                $('.main_header').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            var id = $(this).attr("href");
            var offset = 70;
            var target = $(id).offset().top - offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });



    // wow js
    
    new WOW().init();

        // nice scroll

      $(document).ready(

        function() { 

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      ); 

      // portfolio filter

      $(function () {
        
        var filterList = {
        
          init: function () {
          
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
              targetSelector: '.portfolio',
              filterSelector: '.filter',
              effects: ['fade'],
              easing: 'snap',
              // call the hover effect
              onMixEnd: filterList.hoverEffect()
            });       
          
          },
          
          hoverEffect: function () {
          
            // Simple parallax effect
            $('#portfoliolist .portfolio').hover(
              function () {
                $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');       
              },
              function () {
                $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');               
              }   
            );        
          
          }

        };
        
        // Run the show!
        filterList.init();
        
        
      }); 


      // Skillset js 

      var object = [

        {

          'headline':'C#',
          'value':9,
          'length':10,
          'description':'統計分析、資料處理、管理平台、視覺化 BI'

        },
        {

          'headline':'Kotlin',
          'value':8,
          'length':10,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Python',
          'value':8,
          'length':10,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'Java',
          'value':8,
          'length':10,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        },
        {

          'headline':'C & C++',
          'value':7,
          'length':10,
          'description':'Experience with object-oriented JavaScript. </br> Extended knowlage of DOM manipulation in aiding and extending the UI.'

        }

      ];

      $(document).ready(function(){

        $("#skillset").skillset({

          object:object,
          duration:40

        });

      });


        // Owl carousel

      $(document).ready(function() {
               
      $("#testimonial_carosule").owlCarousel({
               
                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay : true,
                    transitionStyle : "backSlide",
                    // "singleItem:true" is a shortcut for:
                    // items : 1, 
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false
               
                });
               
      });

      // Up to top js

      $(document).ready(function() {
        
        $().UItoTop({ easingType: 'easeOutQuart' });
        
      });



/* ==========================================================================
   CONTACT FORM JS
   ========================================================================== */

  $(document).ready(function() {
      $("#submit_btn").click(function() { 
          //get input field values
          var user_name       = $('input[name=name]').val(); 
          var user_email      = $('input[name=email]').val();
          var user_phone      = $('input[name=phone]').val();
          var user_message    = $('textarea[name=message]').val();
          
          //simple validation at client's end
          //we simply change border color to red if empty field using .css()
          var proceed = true;
          if(user_name==""){ 
              $('input[name=name]').css('border-color','red'); 
              proceed = false;
          }
          if(user_email==""){ 
              $('input[name=email]').css('border-color','red'); 
              proceed = false;
          }
          if(user_phone=="") {    
              $('input[name=phone]').css('border-color','red'); 
              proceed = false;
          }
          if(user_message=="") {  
              $('textarea[name=message]').css('border-color','red'); 
              proceed = false;
          }

          //everything looks good! proceed...
          if(proceed) 
          {
              //data to be sent to server
              post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};
              
              //Ajax post data to server
              $.post('contact_me.html', post_data, function(response){  
                  
                  //load json data from server and output message     
                  if(response.type == 'error')
                  {
                      output = '<div class="error">'+response.text+'</div>';
                  }else{
                  
                      output = '<div class="success">'+response.text+'</div>';
                      
                      //reset values in all input fields
                      $('#contact_form input').val(''); 
                      $('#contact_form textarea').val(''); 
                  }
                  
                  $("#result").hide().html(output).slideDown();
              }, 'json');
              
          }
      });
      
      //reset previously set border colors and hide all message on .keyup()
      $("#contact_form input, #contact_form textarea").keyup(function() { 
          $("#contact_form input, #contact_form textarea").css('border-color',''); 
          $("#result").slideUp();
      });
      
  });
  
 // --------------------------------------------
 // for 專案/系統
 // --------------------------------------------
 
 $(document).ready(function(){
	$('.ui.vertical.menu').toggle();  //default close
	$('.right.menu.open').on("click",function(e){
        e.preventDefault();
		$('.ui.vertical.menu').slideToggle();
	});
    
	$('.ui.dropdown').dropdown();

	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$('a.abgne_gotoheader').click(function(){
		got_to(0);
	});

	//簡歷
	$('#cv_item').click(function(){
		var hight_val =  0;
		got_to(hight_val);
	})

	//專案/系統
	$('#achievement_item').click(function(){
		var hight_val =  $("#achievement_div").offset().top - 70;
		got_to(hight_val);
	})

	//計畫
	$('#project_item').click(function(){
		var hight_val =  $("#project_div").offset().top - 70;
		got_to(hight_val);
	})

	//發表
	$('#publication_item').click(function(){
		var hight_val =  $("#publication_div").offset().top - 70;
		got_to(hight_val);
	})
	
	//相關研習課程
	$('#lesson_item').click(function(){
		var hight_val =  $("#lesson_div").offset().top - 70;
		got_to(hight_val);
	})
	
	//在校成績
	$('#school_item').click(function(){
		var hight_val =  $("#school_div").offset().top - 70;
		got_to(hight_val);
	})

	//聯絡我
	$('#contact_item').click(function(){
		var hight_val =  $("#contact_div").offset().top -70;
		got_to(hight_val);
	})

	// --------------------------------------------------------------
	//mobile:簡歷
	// --------------------------------------------------------------
	$('#cv_item_m').click(function(){
		var hight_val =  0;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:專案/系統
	$('#achievement_item_m').click(function(){
		var hight_val =  $("#achievement_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:計畫
	$('#project_item_m').click(function(){
		var hight_val =  $("#project_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})

	//mobile:發表
	$('#publication_item_m').click(function(){
		var hight_val =  $("#publication_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})
	
	//mobile:相關研習課程
	$('#lesson_item_m').click(function(){
		var hight_val =  $("#lesson_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})
	
	//mobile:在校成績
	$('#school_item_m').click(function(){
		var hight_val =  $("#school_div").offset().top - 70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})
	

	//mobile:聯絡我
	$('#contact_item_m').click(function(){
		var hight_val =  $("#contact_div").offset().top -70;
		got_to(hight_val);
		$('.ui.vertical.menu').toggle();
	})
	

	//return to top
	$('#top_btn').click(function(){
		var hight_val =  0;
		got_to(hight_val);
	})


	//go to the section
	function got_to(hight_from_top){
		$body.animate({
					scrollTop: hight_from_top
				}, 600);

		return false;
	}

	//mobile menu 收合效果
	$('#mobile_icon').click(function(){
		// var p = $('main').css("background-color", "yellow");
	 //    	p.hide(1500).show(1500);
	 //    	p.queue(function() {
		//       	p.css("background-color", "red");
		// 	});

		//$('#mask_modal').modal('show');

	})


	//=====create cv list=====
	var results = cv;
	$('#cv_image').append('<img src="'+ results[0].image +'">');
	$('#cv_introduction').append('<h2>'+results[0].name+'</h2>', '<p>'+results[0].introduction+'</p>');
	$('#birthday').append('<p>'+ results[0].birthday +'</p>');
	var edu_background = results[0].edu_background;
	for(k=0; k<edu_background.length; k++){
		$('#edu_background').append('<p>'+ edu_background[k] +'</p>');
	}
	var work = results[0].work;
	for(k=0; k<work.length; k++){
		$('#work').append('<p>'+ work[k] +'</p>');
	}
	var intern = results[0].intern;
	for(k=0; k<intern.length; k++){
		$('#intern').append('<p>'+ intern[k] +'</p>');
	}
	var dev_skill = results[0].dev_skill;
	for(k=0; k<dev_skill.length; k++){
		$('#dev_skill').append('<p>'+ dev_skill[k] +'</p>');
	}
	var platform = results[0].platform;
	for(k=0; k<platform.length; k++){
		$('#platform').append('<p>'+ platform[k] +'</p>');
	}
	var tool = results[0].tool;
	for(k=0; k<tool.length; k++){
		$('#tool').append('<p>'+ tool[k] +'</p>');
	}
	$('#phone').append('<i class="large phone icon"></i>'+ results[0].phone);
	$('#email').append('<i class="large mail icon"></i>'+ results[0].email);
	$('#facebook').append('<i class="large facebook square icon"></i><a href="'+results[0].facebook+'">'+results[0].facebook+'</a>');
	$('#website').append('<i class="large browser icon"></i><a href="'+results[0].website+'">'+results[0].website+'</a>');
	$('#address').append('<i class="large marker icon"></i>'+ results[0].address);



	//=====create achievement list=====
	var results = achievement;
	var card_htm = '';
	Object.keys(results).map(function (k) {
		var title = results[k].title;
		var introduction = results[k].introduction;
		var description = results[k].description;
		var link_public = results[k].link_public;
		var link = results[k].link;
		var image = results[k].image;

		var header_div = '<div class="content"><h3>'+title+'</h3>';

		var masterimg_div ='<div class="image" style="height:50xp"><div class="img_slder">';
		for (i=0; i<image.length; i++){
			masterimg_div += '<img class="ui rounded image" src="'+ image[i] +'" onClick="showdetail(\''+ title +'\',\'achievement\')">';
		}
		masterimg_div += '</div></div></div>';
            
		var des_div = '<div class="content">'+ introduction +'</div>';

		var control_div ='<div class="extra content"><div class="ui blue two buttons"><button class="ui Info button" onClick="showdetail(\''+ title +'\',\'achievement\')"><i class="info circle icon"></i>詳細</button>';
		if (link_public == 1){
			control_div +='<a class="ui linkify button" target="_blank" href="'+ link +'"><i class="linkify icon"></i>連結</a>';
		}else{
			control_div +='<a class="ui linkify button" onClick="alert(\'屬於內部系統，請見詳細資訊\')"><i class="linkify icon"></i>連結</a>';
		}
		control_div += '</div></div>'

		var card_item = '<div class="ui  card">'+header_div+masterimg_div+des_div+control_div+'</div>';
		card_htm += card_item;
	});
	$('#achievement_list').append(card_htm);
		

		//=====create project list=====
		var results = project;
		var card_htm = '';
		Object.keys(results).map(function (k) {
            var title = results[k].title;
            var introduction = results[k].introduction;
            var description = results[k].description;
            var link_public = results[k].link_public;
            var link = results[k].link;
            var image = results[k].image;

            var header_div = '<div class="content"><h3>'+title+'</h3>';

            var masterimg_div ='<div class="image" style="height:50xp"><div class="img_slder">';
            for (i=0; i<image.length; i++){
				masterimg_div += '<img class="ui rounded image" src="'+ image[i] +'" onClick="showdetail(\''+ title +'\',\'project\')">';
			}
            masterimg_div += '</div></div></div>';
            
            var des_div = '<div class="content">'+ introduction +'</div>';

            var control_div ='<div class="extra content"><div class="ui blue two buttons"><button class="ui Info button" onClick="showdetail(\''+ title +'\',\'project\')"><i class="info circle icon"></i>詳細</button>';
            // if (link_public == 1){
           	// 	control_div +='<a class="ui linkify button" target="_blank" href="'+ link +'"><i class="linkify icon"></i>連結</a>';
            // }else{
            // 	control_div +='<a class="ui linkify button" onClick="alert(\'屬於內部系統，請見詳細資訊\')"><i class="linkify icon"></i>連結</a>';
            // }
            control_div += '</div></div>';

            var card_item = '<div class="ui  card">'+header_div+masterimg_div+des_div+control_div+'</div>';
            card_htm += card_item;
        });
		$('#project_list').append(card_htm);


	//=====create publication list=====
		var results = publication;
		var message_htm = '';
		Object.keys(results).map(function (k) {
            var author = results[k].author;
            var description = results[k].description;
            var type = results[k].type;
			var link = results[k].link;

            var author_div = '<div class="header">' + author + '</div>';
			var description_p = '<p>' + description + '</p>';
			var type_p = '<p><font size="2">' + type + '</font></p>';
            var herf_con = '<a href="' + link + '">';

            message_htm += herf_con + '<div class="ui medium icon message" style="background-color: #FFFFFF"><i class="blue file text icon"></i><div class="content">';
            message_htm += author_div + description_p + type_p + '</div></div></a>';
        });

		$('#publication_col').append(message_htm);
		
		
	//=====create lesson list=====
		var results = lesson;
		var card_htm = '';
		Object.keys(results).map(function (k) {
            var title = results[k].title;
            var introduction = results[k].introduction;
            var description = results[k].description;
            var link_public = results[k].link_public;
            var link = results[k].link;
            var image = results[k].image;

            var header_div = '<div class="content"><h3>'+title+'</h3>';

            var masterimg_div ='<div class="image" style="height:50xp"><div class="img_slder">';
            for (i=0; i<image.length; i++){
				masterimg_div += '<img class="ui rounded image" src="'+ image[i] +'" onClick="showdetail(\''+ title +'\',\'lesson\')">';
			}
            masterimg_div += '</div></div></div>';
            
            var des_div = '<div class="content">'+ introduction +'</div>';

            var control_div ='<div class="extra content"><div class="ui blue two buttons"><button class="ui Info button" onClick="showdetail(\''+ title +'\',\'lesson\')"><i class="info circle icon"></i>詳細</button>';
            
            control_div += '</div></div>';

            var card_item = '<div class="ui card">'+header_div+masterimg_div+des_div+control_div+'</div>';
            card_htm += card_item;
        });
		$('#lesson_list').append(card_htm);
		
		$('.img_slder').slick({
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2500,
			arrows: false
		});

	//=====create school list=====
		var results = school;
		var card_htm = '';
		Object.keys(results).map(function (k) {
            var title = results[k].title;
            var introduction = results[k].introduction;
            var description = results[k].description;
            var link_public = results[k].link_public;
            var link = results[k].link;
            var image = results[k].image;
            var header_div = '<div class="content"><h3>'+title+'</h3>';  
            var control_div ='<div class="extra content"><div class="ui blue two buttons"><button class="ui Info button" onClick="showdetail2(\''+ title +'\',\'school\')"><i class="info circle icon"></i>詳細</button>';
           
            control_div += '</div></div>';

            var card_item = '<div class="ui card">'+header_div+control_div+'</div>';
            card_htm += card_item;
        });
		$('#school_list').append(card_htm);
		
});


function showdetail(title_str, type_str){
	var results_json;
	switch(type_str) {
	    case 'achievement':
	        results_json = achievement;
	        break;
	    case 'project':
	        results_json = project;
	        break;
	    case 'lesson':
	        results_json = lesson;
	        break;
		}

	var desc_str, image_list;
	Object.keys(results_json).map(function (k) {
		if (title_str == results_json[k].title){
			desc_str = results_json[k].description;
			image_list = results_json[k].image;
		}
     });

	$('#modal .header').html(title_str);
	$('#modal .content').html(desc_str);

	$('#modal .image').html('');  //default
	for (i=0; i<image_list.length; i++){
		$('#modal .image').append('<div class="column"><a class="modal-image-link" href="'+image_list[i]+'" data-lightbox="roadtrip"><img class="modal-image" src="'+ image_list[i] +'"></a></div>');
	}
	$('#modal').modal('show');
	
}	
	
	
	function showdetail2(title_str, type_str){
	var results_json;
	switch(type_str) {
	    case 'school':
	        results_json = school;
	        break;
		}

	var image_list;
	Object.keys(results_json).map(function (k) {
		if (title_str == results_json[k].title){
			image_list = results_json[k].image;
		}
     });

	$('#modal2 .header').html(title_str);


	$('#modal2 .image').html('');  //default
	for (i=0; i<image_list.length; i++){
		$('#modal2 .image').append('<div class="column"><a class="modal-image-link" href="'+image_list[i]+'" data-lightbox="roadtrip"><img class="modal-image" src="'+ image_list[i] +'"></a></div>');
	}
	$('#modal2').modal('show');
	
}