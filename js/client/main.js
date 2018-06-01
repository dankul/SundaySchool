$(function(){
	$('#child').click(function(e){
		var childPersonalInfo = document.getElementsByClassName('childData'); //the arr of input child table
		var Child = {
			name: '',
			lastName: '',
			patronymic: '',
			numberPhone: '',
			dateBirthday: '',
			schoolClass: '',
			dataEntry: '',
			mail: ''
		};

		for (var i = 0; i < childPersonalInfo.length; ++i){
			Child[childPersonalInfo[i].name] = childPersonalInfo[i].value;
		};

		var type = 'PUT';
		var	contentType = 'application/json';
		var requestData = JSON.stringify(Child);
		var	url = 'http://localhost:3000/insert';

		server_transport(type, requestData, contentType, url);
	});

	$('#parents').click(function(e){
		var parentsPersonalInfo = document.getElementsByClassName('parentsData'); //the arr of input parents table
		var Parents = {
						matherName: '',
						matherLastName: '',
						matherNumberPhone: '',
						matherMail: '',
						fatherName: '',
						fatherLastName: '',
						fatherNumberPhone: '',
						fatherMail: ''
					};
		for (var i = 0; i < parentsPersonalInfo.length; ++i){
			Parents[parentsPersonalInfo[i].name] = parentsPersonalInfo[i].value;
		};

		var type = 'PUT';
		var	contentType = 'application/json';
		var requestData = JSON.stringify(Parents);
		var	url = 'http://localhost:3000/insert';

		server_transport(type, requestData, contentType, url);
	});
	
	$('#adress').click(function(e){
		var adressInfo = document.getElementsByClassName('adressData'); //the arr of input parents table
		var Adress = {
						street: '',
						house: '',
						apartment: '',
						city: '',
						ind: '',
						schoolNumber: ''
					};

		for (var i = 0; i < adressInfo.length; ++i){
			Adress[adressInfo[i].name] = adressInfo[i].value;
		};

		var type = 'PUT';
		var	contentType = 'application/json';
		var requestData = JSON.stringify(Adress);
		var	url = 'http://localhost:3000/insert';

		server_transport(type, requestData, contentType, url);
	});

	function server_transport(type, requestData, contentType, url) {
		$.ajax({
			type: type,
			data: requestData,
			contentType: contentType,
			url: url
		});
	};
});
