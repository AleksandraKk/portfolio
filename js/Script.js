$(document).ready(function() {
		  $('#menu-icon').click(function (event) {
		  	event.preventDefault();
			$(".submenu").toggleClass('show');
			});
			
			
			$(".progress-bar").loading();
			
			$(function() {
				$('nav ul li a').click(function(){
				$('html, body').animate({
					scrollTop: ($( $.attr(this, 'href') ).offset().top+10)
				}, 1000);
				return false;
				});
		});
		
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
	});

	});
$(window).load(function() {

		$(".se-pre-con").fadeOut("slow");;
	});
