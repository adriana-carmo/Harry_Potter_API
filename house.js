//Get URL 
var sURL = window.document.URL.toString();
var arrURLParams = "";

//Get param (id = house)
if (sURL.indexOf("?") > 0)
{
    var arrParams = sURL.split("id=");
    arrURLParams = arrParams[1];
}


var queryURL = "https://www.potterapi.com/v1/houses/";
var apiKey ="?key=$2a$10$Wq1p6PX.T.cKg0EkIUeyxO1DJtqsVKphLfRKjWeEiiMS6cjufD9DW"

// Load of page with house selected 
function hogwartsHousing(){
    var housingQueryURL = queryURL + arrURLParams + apiKey;
    console.log(housingQueryURL);
    $.ajax({
        url: housingQueryURL,
        method: "GET"
    }).then(function(response){
        result = response;
        console.log(response);
        GetInformationHouse(result);
    })
}
// Create html page with a house api with definitions 
function GetInformationHouse (result){
    $("#container-fluid").empty()   
    for (var iloop = 0; iloop < result.length; iloop++ ){
        var title = $("<h2>").text(result[iloop].name);
        $("#container-fluid").append(title);
        var founder = $("<h6>").text("Founder: ");
        var founderSP = $("<span>").text(result[iloop].founder);
        $(founder).append(founderSP);
        var mascot = $("<h6>").text("Mascot: ");
        var mascotSP = $("<span>").text(result[iloop].mascot); 
        $(mascot).append(mascotSP);
       
        var headOfHouse = $("<h6>").text("Head Of House: ");
        var headOfHouseSP = $("<span>").text(result[iloop].headOfHouse); 
        //var headofHouseImg = $("img").attr("src", "https://vignette.wikia.nocookie.net/harrypotter/images/c/c1/Severus-snape1.jpg/revision/latest/scale-to-width-down/340?cb=20110316031920");
        //$(headOfHouseSP).append(headofHouseImg);
        $(headOfHouse).append(headOfHouseSP);

        var houseGhost = $("<h6>").text("House Ghost: ");
        var houseGhostSP = $("<span>").text(result[iloop].houseGhost); 
        $(houseGhost).append(houseGhostSP);
        var colors = $("<h6>").text("Colors: ");
        var colorsSP = $("<span>").text(result[iloop].colors); 
        $(colors).append(colorsSP);
        var values = $("<h6>").text("Values: ");
        var valuesSP = $("<span>").text(result[iloop].values); 
        $(values).append(valuesSP);
        var parag = $("<p>")
        $(parag).append(founder, mascot, headOfHouse, houseGhost, colors, values);
        $("#container-fluid").append(parag);
    }
}
hogwartsHousing()

