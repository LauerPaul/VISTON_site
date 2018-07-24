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

				header.addClass('search')
				menu.addClass('hide');
				searchCase.addClass('open');
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
})