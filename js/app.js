
//default not avail image
var IMAGE_NOT_AVAIL = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

//my key
//var KEY = "mykeyisbetterthanyours";
const API_KEY = "3ab1a7ad6985002c87082ccfee891dd9";
const PRIV_KEY = "f92001eb96c00a07b6d9f66d1b108a8ec51d51ab";

// Public Key
// fc0e2b2bcfc273962ce941db43aa2039

$(function(){
    var marvelAPI = 'https://gateway.marvel.com/v1/public/comics';
    $.getJSON( marvelAPI, {
        apikey: API_KEY
        })
        .done(function( response ) {
            let results = response.data.results;
            let resultsSize = results.length;
            let output = '<ul>'; 
          
            for(let i=0; i<resultsSize; i++){
                if(results[i].images.length > 0) {
                    var imgPath = results[i].images[0].path + '/standard_xlarge.' + results[i].images[0].extension;
                    output += '<li><img src="' + imgPath + '"><br>'+results[i].title+'</li>';
                }
            }  
            output += '</ul>'
            $('#results').append(output);
        });       
});