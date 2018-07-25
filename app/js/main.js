/* Main */
var common = {
	init: function(){
		// Search header toggle
		$(document).mouseup(function (e) {
			var search = $("header .search-wrapper");
			if (search.has(e.target).length === 0) return common.header.search.init(true)
		});
		// Inputs init
		common.inputs();
		// Home page init
		common.homePage.init();
	},

	header: { // HEADER
		mobileMenu: function(){
			var body = $(document).find('body');
			body.toggleClass('mobile-menu');
		},
		search: { // SEARCH CASE
			init: function(close){
				var close = close == undefined ? false : true
				var header = $(document).find('header');
				var searchCase = $('.search-wrapper', header);

				if(close && searchCase.hasClass('open')) return this.close(searchCase)
				else if(close && !searchCase.hasClass('open')) return false
				else if(!searchCase.hasClass('open')) return this.open(searchCase)
				else return this.close(searchCase)
			},
			open: function(searchCase){ // OPEN SEARCH CASE METHOD
				var header = $(document).find('header');
				var menu = $('.navbar-nav', header);

				header.addClass('search');
				menu.addClass('hide');
				searchCase.addClass('open');
				$('body').removeClass('mobile-menu');
				$('.navbar-collapse').removeClass('show');
			},
			close: function(searchCase){ // CLOSE SEARCH CASE METHOD
				var header = $(document).find('header');
				var menu = $('.navbar-nav', header);

				searchCase.addClass('close');
				searchCase.removeClass('open');
				setTimeout(function(){
					header.removeClass('search')
					searchCase.removeClass('close');
					menu.removeClass('hide');
				},1500)
			}
		}
	},

	inputs: function(){
		// Checkbox style
		$('input[type="checkbox"]').iCheck();
		// Placeholder hide
		$(document).on('focus', 'input, textarea', function(){
			var Placeholder = $(this).attr('placeholder');
			$(this).attr('placeholder', '');

			$(this).blur(function(){
				$(this).attr('placeholder', Placeholder);
			})
		});
	},
	// Home page scripts
	homePage: {
		init: function(){
			common.homePage.servicesSlider();
			common.homePage.productionSlider();
			// Services section mobile slider
			if($('.slides-services').length){
				$(window).on('resize', function(){
					common.homePage.servicesSlider()
					common.homePage.productionSlider()
				});
			}	
		},
		// Services section mobile slider
		slider: false,
		servicesSlider: function(){
			if($(window).width() > 723 && common.homePage.slider){
				$('.slides-services').slick('unslick');
				$('.slides-services').removeClass('slider');
				common.homePage.slider = false
			}
			else if($(window).width() < 724 && !common.homePage.slider){
				common.homePage.slider = $('.slides-services').slick({
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        dots: true,
			        arrows: false,
			        infinite: false,
			        autoplay: true,
					speed: 500,
					responsive: [
					    {
					      breakpoint: 650,
					      settings: {
					        slidesToShow: 1,
					        slidesToScroll: 1
					      }
					    }
					]
				});
				$('.slides-services').addClass('slider');
			}
		},
		// Services section mobile slider
		sliderProduction: false,
		productionSlider: function(){
			if($(window).width() >= 680 && common.homePage.sliderProduction){
				$('.slides-production').slick('unslick');
				$('.slides-production').removeClass('slider');
				common.homePage.sliderProduction = false
			}
			else if($(window).width() < 680 && !common.homePage.sliderProduction){
				common.homePage.sliderProduction = $('.slides-production').slick({
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        dots: false,
			        arrows: true,
			        infinite: false,
			        autoplay: true,
					speed: 500,
					fade: true,
				});
				$('.slides-production').addClass('slider');
			}
		}
	}
}
// Contacts
var contacts = {
	map: false,
	position: {
		lat: 50.447944,
		lng: 30.525194
	},
	// Google map init
	initMap: function(){
		contacts.map = new google.maps.Map(document.getElementById('map'), {
			center: {
				lat: contacts.position.lat, 
				lng: contacts.position.lng
			},
			zoom: 8,
		});
	}
}
// Document init
$(document).ready(function(e){
    common.init();
});