$('#buscador').keyup(function(){
    var buscador = $('#buscador').val();
    $.getJSON("http://localhost:3000/obras?tituloObra_like=^" + buscador, function(data){
        var result = $('#result');
        result.html('');
        //$('#state').val('');
        
        $.each(data, function(key, value){
            
                result.append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbail" />'+value.tituloObra+' | <span class="text-muted">'+value.autor+'</span></li>');
            });
        
        $(".list-group-item").on('click', function() {
            var click_text = $(this).text().split('|');
            $('#buscador').val($.trim(click_text[0]));
            $("#result").html('');
        }); 
    });
    });
        
//        $('#buscador').keyup(function(){
//    $.getJSON("http://localhost:3000/obras", function(data){
//        var result = $('#result');
//        result.html('');
//        //$('#state').val('');
//        var buscador = $('#buscador').val();
//        var expression = new RegExp(buscador, "i");
//        $.each(data, function(key, value){
//            if (expression.test(value.tituloObra) || value.autor.search(expression) != -1)
//            {
//                result.append('<li class="list-group-item link-class"><img src="'+value.image+'" height="40" width="40" class="img-thumbail" />
//                              '+value.tituloObra+' | <span class="text-muted">'+value.autor+'</span></li>');
//            }
//        });
//        $(".list-group-item").on('click', function() {
//            var click_text = $(this).text().split('|');
//            $('#buscador').val($.trim(click_text[0]));
//            $("#result").html('');
//        }); 
//    });
//});