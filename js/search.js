$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = 
                '<br><a href="detail.html?placeid=' + data[i].id + '">' +
                '<div class="row">' +
                '<div class="col-4 auto"><img src=' + data[i].photo + ' class="thumbnail1" /></div>' +
                '<div class="col-4 auto"><br><br>' + data[i].name + '</div>' +
                '<div class="col-4 auto"><br><br>' + data[i].rating + '</div>' +
                '</div>' + 
                '</a>' + '<br>';
                $('#searchresult').append(row);
            }
        });
    });    
});