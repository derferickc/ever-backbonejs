theView = Backbone.View.extend({

	el: ".slideshow-container",
	events: {
	    'click #randomize_button' :'randomizeArray'
	},

	initialize: function() {
		songsArray = [];
		$.getJSON( "https://itunes.apple.com/search?term=the+beatles", function( json ) {
			for (var i=1; i <21; i++) {
				songsArray.push(json.results[i]);

				// html naming convention stored as variables
				var imgClassName = 'album_image_'+i;
				var songTitle = 'song_title_'+i;
				var artistName = 'artist_name_'+i;
				var trackPrice = 'track_price_'+i;

				// json information saved locally within loop
				var songInfoTitle = json.results[i].trackCensoredName;
				var songArtworkUrl = json.results[i].artworkUrl100;
				var songArtistName = json.results[i].artistName;
				var songAlbumPrice = json.results[i].trackPrice;

				// jQuery commands to change img source + add text
				$('.' + imgClassName).attr('src', songArtworkUrl)
				$('.' + songTitle).text(songInfoTitle)
				$('.' + artistName).text(songArtistName)
				$('.' + trackPrice).text("$" + songAlbumPrice)
			}
		});
	},

	randomizeArray:function(){
		var shuffledArray = songsArray.sort(function(a, b){return 0.5 - Math.random()});

		for(var i=0; i<shuffledArray.length; i++){
			// html naming convention stored as variables
			var imgClassName = 'album_image_'+i;
			var songTitle = 'song_title_'+i;
			var artistName = 'artist_name_'+i;
			var trackPrice = 'track_price_'+i;

			// json information saved locally within loop
			var songInfoTitle = shuffledArray[i].trackCensoredName;
			var songArtworkUrl = shuffledArray[i].artworkUrl100;
			var songArtistName = shuffledArray[i].artistName;
			var songAlbumPrice = shuffledArray[i].trackPrice;

			// jQuery commands to change img source + add text
			$('.' + imgClassName).attr('src', songArtworkUrl)
			$('.' + songTitle).text(songInfoTitle)
			$('.' + artistName).text(songArtistName)
			$('.' + trackPrice).text(songAlbumPrice)
		}
    },
});

$(document).ready(function(){
	var carouselView = new theView();
});