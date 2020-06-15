function playM3u8(url){
  if(Hls.isSupported()) {
      var video = document.getElementById('player');
      video.volume = 1.0;
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(url)
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
    }
}

$("#str-post").submit(function () {
	$("html,body").animate({
		scrollTop: $(".input-div").offset().top - 20
	}, 200);
	playM3u8($("#str-post").serializeArray()[0].value);
	return false;
})