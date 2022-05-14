$(function () {

    //Function to clear the page
    function clear_data() {
        $("#movie_data").empty();
        $('#the_plot').empty();
        $('#loader:hidden').show();
        $('.card-title').text($('#the_movie').val());
    }

    //Actions to take on text change of input
    $("#the_movie").keyup(function (e) {
        if (e.which == 13) {
            $(".activator").trigger("click");
        } else {
            $('.card-title').text($('#the_movie').val());
        }
    });

    //Get movie data
    $('.activator').click(function () {
        var $the_movie = $('#the_movie').val();
        clear_data();

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: 'https://www.omdbapi.com/?apikey=5e04ff80&t=' + $the_movie + '&y=&plot=short&r=json',
            success: function (orders) {

                if (orders.Response == 'False') {
                    clear_data();
                    $('.card-title').text('Something went wrong! Please check your spelling or try another movie :)');
                    $('#loader:visible').hide();
                } else {
                    clear_data();
                    $("#movie_data").append(
                        '<li><strong>Year:</strong> ' + orders.Year + '</li>',
                        '<img src="' + orders.Poster + '" alt="' + orders.$the_movie + '" style="width:100px; float:right;">',
                        '<li><strong>Rated:</strong> ' + orders.Rated + '</li>',
                        '<li><strong>Released:</strong> ' + orders.Released + '</li>',
                        '<li><strong>Runtime:</strong> ' + orders.Runtime + '</li>',
                        '<li><strong>Genre:</strong> ' + orders.Genre + '</li>',
                        '<li><strong>Writer:</strong> ' + orders.Writer + '</li>',
                        '<li><strong>Actors:</strong> ' + orders.Actors + '</li>',
                        '<li><strong>Rating:</strong> ' + orders.imdbRating + '</li>',
                        '<li><strong>Awards:</strong> ' + orders.Awards + '</li>',
                        '<li> &nbsp </li>',
                        '<li><a href="http://www.imdb.com/title/' + orders.imdbID + '/" target="_blank">View on IMDB</a></li>',
                        // '<li><img src="' + orders.Poster + ' alt="Image..">View on IMDB</a></li>'
                    );
                    // $("imgtest").append(
                    //     '<li><img src="' + orders.Poster + ' alt="Image..">View on IMDB</a></li>'
                    // );
                    // $(".card-reveal").add(
                    //     '<img src="' + orders.Poster + ' alt="Image.." style="width:100%">'
                    // );
                    $('#the_plot').text(orders.Plot);
                    $('.card-title').text(orders.Title);
                    $('#loader:visible').hide();
                }
            }
        });
    });
});