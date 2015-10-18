/* Mark Faderon */

/* Calculator */

function calculate(operation)
{
	var numOne = parseInt($('#numOne').val());
	var numTwo = parseInt($('#numTwo').val());
	var result = "";
	
	switch (operation)
	{
		case "add": result += numOne + numTwo;
					$('#operation').text("Sum:");
					break;
		case "sub": result += numOne - numTwo;
					$('#operation').text("Difference:");
					break;
		case "mul": result += numOne * numTwo;
					$('#operation').text("Product:");
					break;
		case "div": result += numOne / numTwo;
					$('#operation').text("Quotient:");
					break;
		default: 	$('#numOne').val('');
					$('#numTwo').val('');
					$('#operation').text("Result:");
					$("#result").val('');
					break;
	}
	
	if(result == "NaN")
	{
		result = "Invalid Number!";
	}

	$('#result').val(result);
}

function displayPersons()
{
	var listofPerson = [
		{Name: "Mark Faderon", Age: 76, Message: "Hell yeah!"},
		{Name: "Alexander Nikolaevich", Age: 23, Message: "The Great"},
		{Name: "Spongebob", Age: 11, Message: "Squarepants"},
		{Name: "Shanks", Age: 37, Message: "Cool!"},
		{Name: "Mango Vanilla", Age: 123, Message: "Yum"}
	]
	
	$('table#listofPerson').prepend("<tr><th>Name</th><th>Age</th><th>Message</th></tr>");
	
	for(i = 0 ; i < listofPerson.length ; i++)
	{
		$('table#listofPerson').append("<tr><td>" + listofPerson[i].Name + 
									"</td><td>" + listofPerson[i].Age +
									"</td><td>" + listofPerson[i].Message +
									"</td></tr>");
	}
}

function addPFormShow() {
	$('#addPersonForm').show();
	$('#addPersonBtn').prop('disabled', true);
	$('#addPersonBtn').addClass('buttonActive');
}

function addPFormHide() {
	$('#addPersonForm').hide();
	$('#addPersonBtn').prop('disabled', false);
	$('#addPersonBtn').removeClass('buttonActive');
}

function addPerson() {
	
	var name = $('#pName').val();
	var age = $('#pAge').val();
	var message = $('#pMessage').val();
	
	
	$('table#listofPerson').append("<tr><td>" + name + 
									"</td><td>" + age +
									"</td><td>" + message +
									"</td></tr>");
	$('#addPersonForm').hide();
	$('#addPersonBtn').prop('disabled', false);
	$('#addPersonBtn').removeClass('buttonActive');
}