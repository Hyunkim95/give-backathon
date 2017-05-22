

jQuery(document).ready(function($){


 var mobileHover = function () {
    jQuery('*').on('touchstart', function () {
        jQuery(this).trigger('hover');
    }).on('touchend', function () {
        jQuery(this).trigger('hover');
    });
};

mobileHover();

//alert('here');

    jQuery('.focus-item-content').matchHeight({byRow: true});
    jQuery('.focus-item-content p').matchHeight({byRow: true});
    jQuery('.block-item-bg').matchHeight({byRow: true});

     	RESPONSIVEUI.responsiveTabs();

      /*
     jQuery('.two-column-bg .column-50 .column-50-overlay').matchHeight({byRow: false});
                    */





              /*
    jQuery("#home-blogs").owlCarousel({
			nav: false,
			autoplay: true,
			autoplayHoverPause: true,
			loop: true,
             dots: true,
              items: 1,
			responsiveClass: true,
			responsive: {
              0:{
                items: 1,
				nav: false
			  },
			  812:{
                items: 2
			  }
			}
	}); */

         /*
      jQuery("#owl-testimonial").owlCarousel({
      navigation : false,
      items: 1,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true
      });  */













});



;(function($) {

	// DOM ready
	$(function() {

		// Append the mobile icon nav

          $('header .col-md-5').prepend($('<a id="nav-toggle" href="#"><span></span></a> '));
		// Add a <span> to every .nav-item that has a <ul> inside
		$('#menu-main-menu li').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');

		// Click to reveal the nav
	  	$('#nav-toggle').click(function(){
	   	  this.classList.toggle( "active" );
          $('#menu-main-menu').slideToggle('fast');
		});

		// Dynamic binding to on 'click'
		$('#menu-main-menu').on('click', '.nav-click', function(){
            // Toggle the nested nav
			$(this).siblings('.sub-menu').slideToggle();
			// Toggle the arrow using CSS3 transforms
			$(this).children('.nav-arrow').toggleClass('nav-rotate');

		});


        $(window).bind('resize orientationchange', function() {
	    ww = document.body.clientWidth;
	   if (ww >= 970) {
       $('#nav').show();
	   }
       else{
       // $('#main-nav').hide();

       }
  });



	});



})(jQuery);