!function(window, document) {
	
	$(window).on('scroll', lazyload);

	function lazyload(){
		$('.imgbox img').each(function(){
			var $this = $(this),
				$win = $(window);

			if($this.attr('src') != ''){
				return;
			}//当src已经不为空了，即表示已经加载了的图片就不用再加载了，可以return了。

			if ($win.height() + $win.scrollTop() > $this.offset().top + $this.height()/2) {
				$this.attr('src', $this.attr('x-src'));
			}	
		})
	}

	lazyload();

}(window, document)