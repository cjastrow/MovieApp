var song = document.getElementById("song");
song.volume = .1;

function searchIt(){
	var string = $("#searchBox").val();
	var url = "http://www.omdbapi.com/?apikey=2681c342&t=" + string;

	$.getJSON(url, function(data){
		song.play();
		$('#results').html("");

		if(data.Poster == "N/A"){
			$('#results').append('<img id="moviePicture" src="Images/None.jpeg" />');
		}else{
			$('#results').append('<img id="moviePicture" src="' + data.Poster + '" />');
		}

		$('#results').append('<div id="movieTitle">' + data.Title + '<div>');
		$('#results').append('<div id="movieYear">(' + data.Year + ')</div>');
		$('#results').append('<div id="movieDirector">Directed by ' + data.Director + '</div>');
		$('#results').append('<div id="moviePlot">Plot Summary:<br />' + data.Plot + '</div>');
		$('#results').append('<div id="movieRatings">Movie Ratings:<br /></div>');
		for(var i=0; i < data.Ratings.length; i++){
			$('#movieRatings').append('<div id="movieRatingsResults">' + data.Ratings[i].Source + ' : ' + data.Ratings[i].Value + '</div>');
		}		
	});	
}

$("#searchBtn").click(function (){
	searchIt();
})


$(document).keypress(function(e) {
	if(e.which == 13) {
	    searchIt();
	}
});

