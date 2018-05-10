$(function () {

    var placeid = getUrlParameter('placeid');

    PlaceSearch.Detail(placeid).then(function(data){
        console.log(data);
        $('#gallery').empty();
        $('#placename').html(data.name);        
        $('#address').html(data.address);
        $('#opennow').html(data.open_now);
        $('#rating').html(data.rating);
        $('#phone').html(data.phone);
        for(var i=0;i<data.photos.length;i++){
            var row = 
            '<img src=' + data.photos[i] + ' class="thumbnail"/>'+ '&nbsp&nbsp&nbsp<br><br><br>';
            $('#gallery').append(row);
        }
    });


    //Get URL parameter
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }

});