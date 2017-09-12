$( document ).ready(function() {
    
	$('.menu').click(function() {

		$('.overlay').removeClass( "flipOutX hide" );
		$('.overlay').addClass( "animated flipInX show" );


		$('#close').click(function() {

			$('.overlay').removeClass( "flipInX show" );
			$('.overlay').addClass( "animated hide flipOutX " );

		});

	});

});