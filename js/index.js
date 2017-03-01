$("document").ready(function () {

	$('#appointment-form').hide();

	$('.datepicker').datepicker({
		immediateUpdates: true,

	});

	$("#details-btn").click(function(event) {
		$("#app-form-options").children().removeClass('active');
		$(this).addClass('active');

		$('#details-page').fadeIn();
		$('#schedule-page').hide();


	});

	$("#schedule-btn").click(function(event) {
		$("#app-form-options").children().removeClass('active');
		$(this).addClass('active');

		$('#details-page').hide();
		$('#schedule-page').fadeIn();

	});

	// Open the spongebob appointment
	$('#spongebob-app').click(function(event) {
		$('#app-selector').children().removeClass('active');
		$(this).parent('li').addClass('active');

		$('#placeholder-message').hide(); // Remove placeholder message
		$('#appointment-form').fadeIn(); // Show form

		$("#app-form-options").children().removeClass('active');
		$('#details-btn').addClass('active');

		$('#schedule-page').hide();
		$('#details-page').fadeIn();

		// Clear previous form input
		$('input.form-control').val('');
		
		// Populate demographic info
		$('#app-person-name').text('Squarepants, Spongebob');
		$('#input-last-name').val('Squarepants');
		$('#input-first-name').val('Spongebob');

		// Set profile pic
		$('#profile-pic img').attr('src', './img/spongebob.png')

	});

	// Open the jim appointment
	$('#jim-app').click(function(event) {
		$('#app-selector').children('li').removeClass('active');
		$(this).parent().addClass('active');

		$('#placeholder-message').hide(); // Remove placeholder message
		$('#appointment-form').fadeIn(); // Show form

		$("#app-form-options").children().removeClass('active');
		$('#details-btn').addClass('active');

		$('#schedule-page').hide();
		$('#details-page').fadeIn();

		// Clear previous form input
		$('input.form-control').val('');

		// Populate demographic info
		$('#app-person-name').text('Bob, Jim');
		$('#input-last-name').val('Bob');
		$('#input-first-name').val('Jim');

		// Set profile pic
		$('#profile-pic img').attr('src', './img/blank-profile-pic.png')

	});



})