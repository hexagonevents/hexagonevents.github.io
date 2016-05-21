$(function() {
	
	function add_commas(number) {
		if (number.length > 3) {
			var mod = number.length % 3;
			var output = (mod > 0 ? (number.substring(0,mod)) : '');
			for (i=0 ; i < Math.floor(number.length / 3); i++) {
				if ((mod == 0) && (i == 0)) {
					output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
				} else {
					output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
				}
			}
			return (output);
		} else {
			return number;
		}
	}
	
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: true,
        url: "https://api.facebook.com/method/links.getStats?urls=https://www.facebook.com/GarenaMalaysia&format=json",
		success: function(data) {
			var fb_count = data[0].like_count.toString();
			fb_count = add_commas(fb_count);
			$(".fb-count").html(fb_count+'<span>Fans</span>');
		}
	});
	
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: true,
        url: "https://api.instagram.com/v1/users/2001242922/?access_token=1551710480.1fb234f.8572547f41064fa98f2aa05e793d76cd",
		success: function(data) {
			var inst_count = data.data.counts.followed_by.toString();
			inst_count = add_commas(inst_count);
			$(".inst-count").html(inst_count+'<span>Followers</span>');
		}
	});
	
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: true,
        url: "https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=TheGarenaSingapore&key=AIzaSyBNbmrSjBg5ZGUUU2u1rdAdfFwj_p7pG24",
		success: function(data) {
			
			var yt_count = data.items[0].statistics.subscriberCount.toString();
			yt_count = add_commas(yt_count);
			$(".yt-count").html(yt_count+'<span>Subscribers</span>');
		}
	});
	
});