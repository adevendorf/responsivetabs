/* Responsive Tabs */
(function($) {

	$.fn.responsivetabs = function() {

		var root = this;

		$(root).find("dd > a").each(function(i){

			$(this).bind("click", function() {

				$(root).find(".active-tab").removeClass("active-tab");

				var panelName = $(this).attr("href");
				var $target = $( panelName );

				if ($target.hasClass("active")) {
					$target.removeClass("active");
				} else {
					$target.addClass("active");
				}
				
				$(this).parent().addClass("active-tab")

			})

		});

	};

})(jQuery);

// load...

$(".responsivetabs").responsivetabs();