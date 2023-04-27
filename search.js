function process_json(){
    show_movies(movies);
}

function show_movies(movies){
        var html="";
    for(var index in movies){
        var movie=movies[index];
         html+="<tr><td>"+movie["title"]+"</td><td>"+movie["size"]+"</td></tr>";
    }
    
    $("#movies_table").html(html);
}

function find_movie(){
    var movie_title=$("#movie-title").val().toLowerCase();
    var result=[];
    for(var index in movies){
        var movie=movies[index];
        if(movie["title"].toLowerCase().search(movie_title)!=-1){
            result.push(movie);
        }
    }
    show_movies(result);
    
    return false;
}