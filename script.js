/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	codepen.objects.User = {
		name: null,
		email: null,
		username: null,
		password: null,
		is_logged_in: false		
	}

	var NewUser = Object.create(codepen.objects.User, {
		firstname: {
			writable: true,
			enumerable: true,
			value: ''
		},
		lastname: {
			writable: true,
			enumerable: true,
			value: ''
		}
	});
//create toggle class with html button to do the action

	$('.signup-form').hide();

	$('.signup-form-btn').click(function(){
		$('.login-form').hide();
		$('.signup-form').show();
		$('.signup-form-btn').addClass("active");
		$('.login-form-btn').removeClass("active");
	});

	$('.login-form-btn').click(function(){
		$('.signup-form').hide();
		$('.login-form').show();
		$('.login-form-btn').addClass("active");
		$('.signup-form-btn').removeClass("active");
	});



// old login function

	$('.btn-login').click(function(){
		//pull text value from username and password from
		var user = {
			username: $('#login-username-field').val(),
			password: $('#login-password-field').val(),
			is_logged_in: false
		};
		
//call login method and pass previously instatuated object

		codepen.api.login(user);

//print object to find out what it contains

		console.log(codepen.api.login(user));

	 });

// old signup function

	$('.btn-signup').click(function(){
		// console.log('clicked');
		//pull text value from username and password from
		var user = Object.create(NewUser);
		
		user.firstname = $('#signup-firstname-field').val();
		user.lastname = $('#signup-lastname-field').val();
		user.email = $('#signup-email-field').val();
		user.username = $('#signup-username-field').val();
		user.password = $('#signup-password-field').val();

		console.log(codepen.api.signup(user));
	});






});