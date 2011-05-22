(function(d, w){
	// Hide the address bar on iPhone
	if (navigator.userAgent.match(/iPhone/i)){
		setTimeout(function(){
			w.scrollTo(0, 1);
		}, 100);
	}

	
	// Prevent iPhone and iPad to autoscale the page when rotated (http://adactio.com/journal/4470/)
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	  var viewportmeta = d.querySelector('meta[name="viewport"]');
	  if (viewportmeta) {
	    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
	    d.body.addEventListener('gesturestart', function() {
	      viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
	    }, false);
	  }
	}
	
})(document, window);