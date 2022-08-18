(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// COUNTER
		$('#count-box1').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		$('#count-box2').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		$('#count-box3').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		$('#count-box4').CountUpCircle({
			duration: 2000,
			opacity_anim: true,
			step_divider: 2
		});

		// 

		$('.main-carousel').flickity({				
			// options
			cellAlign: 'center',
			contain: true,
			groupCells: true,
			freeScroll: true,
			wrapAround: true,
			groupCells: 1,
			rtl:false,
			// groupCells: '100%',
		   autoPlay: true,
		   // autoPlay: 1500,
		   pauseAutoPlayOnHover: false,
		   initialIndex: 1,
		   wrapAround: true,
		   prevNextButtons: true,
		   pageDots: true,
		  });

		//   

		




		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);