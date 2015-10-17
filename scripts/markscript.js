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

	$("#result").val(result);
}