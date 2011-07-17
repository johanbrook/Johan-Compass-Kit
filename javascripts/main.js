(function(d, w){
	
	/* Prevent iPhone and iPad to autoscale the page when rotated (http://adactio.com/journal/4470/) */
	function preventAutoscale(){
		var viewportmeta = d.querySelector('meta[name="viewport"]');
		  if (viewportmeta) {
		    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
		    d.body.addEventListener('gesturestart', function() {
		      viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
		    }, false);
		  }
	}
	
	/* Hide the address bar on iPhone */
	function hideAddressBar(){
		setTimeout(function(){
			w.scrollTo(0, 1);
		}, 100);
	}

	
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		preventAutoscale();
		hideAddressBar();
	}
	
})(document, window);