/* Main */
var common = {
	init: function(){
		$(document).mouseup(function (e) {
			var search = $("header .search-wrapper");
			if (search.has(e.target).length === 0) return common.header.search.init(true)
		});
	},

	header: { // HEADER
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

				menu.addClass('hide');
				searchCase.addClass('open');
			},
			close: function(searchCase){ // CLOSE SEARCH CASE METHOD
				var header = $(document).find('header');
				var menu = $('.navbar-nav', header);

				searchCase.addClass('close');
				searchCase.removeClass('open');
				setTimeout(function(){
					searchCase.removeClass('close');
					menu.removeClass('hide');
				},1500)
			}
		}
	}
}

$(document).ready(function(e){
    // $('input[type="checkbox"]').iCheck({checkboxClass: 'checkbox'});
    common.init();
})