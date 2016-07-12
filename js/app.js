$( document ).ready(function() {
    
//menu
	$.get('/store/menu', function(data) {
		for (var i = 0; i < data.length; i++) {
			//console.log(data[i].nombre);
		
		$('#menu').append('<li><a href="/store/list/'+data[i].id+'">'+data[i].nombre+'</a></li>');
		}
		
	});
//----menu--

});