// JavaScript Document

	jQuery(document).ready(function(){
		var html = '<div class="mob-header"><span class="mob_button"><i class="fa fa-bars"></i></span></div>';
		jQuery("nav.cl-effect-14").before(html);
	  jQuery("header").on('click', 'span.mob_button', (function(){
		jQuery("nav.cl-effect-14").slideToggle();
	  }));
	});
