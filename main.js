theView = Backbone.View.extend({

	events: {
	    'click #randomize_button' :'randomizeArray',
	    'click .carousel-prev': 'prev',
      	'click .carousel-next': 'next'
	},

	initialize: function(options) {
		_.bindAll(this);
        this.items = _.map(this.$('.carouselSlides').hide(), function(i) { 
        	return i; 
        });
        this.current = 0;
		$(".carousel-prev").hide();

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

    render: function() {
      $(this.items[this.current]).show();
      return this;
    },

    prev: function() {
      $(this.items[this.current]).fadeOut(function() {
      	$(".carousel-next").show();
        this.current = this.current - 1;
        $(this.items[this.current]).fadeIn();
        if (this.current === 0) {
        	$(".carousel-prev").hide();
        }
      }.bind(this));
    },

    next: function() {
      $(this.items[this.current]).fadeOut(function() {
		$(".carousel-prev").show();
        this.current = this.current + 1;
        $(this.items[this.current]).fadeIn();
        if (this.current === this.items.length -1) {
        	$(".carousel-next").hide();
        }
      }.bind(this));
    }
});

$(document).ready(function(){
	var carouselView = new theView({el: '#carousel-container'}).render();
});