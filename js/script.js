/* $(document).ready(function(){ */
	$(document).ready(function(){
		$('.resposive_menu_bar').click(function(){
			$('.header_menu').children('ul').slideToggle(300);
		});
	});
	$(document).ready(function(){
	
		$('.print_all').owlCarousel({
			items:4,
			autoPlay:true,
			navigation:false,
			pagination:false,
			itemsDesktop:[1199,3],
			itemsDesktopSmall:[979,3],
			itemsTablet:[768,2],
			itemsMobile:[560,1]
		});
		$('.test_left').click(function(){
		
		$('.print_all').trigger('owl.prev')
		return false;
		
		});
		$('.test_right').click(function(){
			
			$('.print_all').trigger('owl.next')
			return false;
		});
		
	});
	
	