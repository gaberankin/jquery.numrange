(function($) {
	$.fn.numrange = function(options) {
		var settings = $.extend({
			onchange: $.noop
		}, options );
		return this.each(function() {
			var $me = $(this);
			if($me.is(':input')) {

			} else {

			}
		});
	};
})(jQuery);
