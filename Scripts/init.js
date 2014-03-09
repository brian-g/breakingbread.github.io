	// handle scroll down
		jQuery.fn.handleScrollDown = function(offset) {				
			
			jQuery(this).click(function(e) {
				var t = jQuery(this), h = t.attr('href'), target;

				if (h.charAt(0) == '#' && h.length > 1 && (target = jQuery(h)).length > 0)
				{
					var x, pos;
					
					x = target.offset().top;
					
					if (t.hasClass('scrolly-centered'))
						pos = x - (($(window).height() - target.outerHeight()) / 2);
					else
					{
						pos = Math.max(x, 0);
						
						if (offset)
						{
							if (typeof(offset) == 'function')
								pos -= (offset)();
							else
								pos -= offset;
						}
					}
					
					e.preventDefault();
					
					jQuery('body,html').animate({ scrollTop: pos }, 1000, 'swing');
				}
			});
		};

	// jQuery
		jQuery(function() {

			var	$window = $(window),
				$body = $('body');

			// Scrollable links
				$('.scroller').handleScrollDown(function() {
					return 0;
				});

		});