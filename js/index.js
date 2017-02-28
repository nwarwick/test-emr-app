$("document").ready(function () {

	$('appointment-form').children().hide();

	$("#details-btn").click(function(event) {
		$("#app-form-options").children().removeClass('active');
		$(this).addClass('active');

		$('#details-page').show();
		$('#schedule-page').hide();


	});

	$("#schedule-btn").click(function(event) {
		$("#app-form-options").children().removeClass('active');
		$(this).addClass('active');

		$('#details-page').hide();
		$('#schedule-page').show();

	});

	$('#spongebob-app').click(function(event) {
		$('#app-selector').children('li').removeClass('active');
		$(this).parent('li').addClass('active');

		$("#app-form-options").children().removeClass('active');
		$('#details-btn').addClass('active');

		$('#details-page').show();
		$('#schedule-page').hide();

	});

	$('#jim-app').click(function(event) {
		$('#app-selector').children('li').removeClass('active');
		$(this).parent('li').addClass('active');

		$("#app-form-options").children().removeClass('active');
		$('#details-btn').addClass('active');

		$('#details-page').show();
		$('#schedule-page').hide();

	});



})