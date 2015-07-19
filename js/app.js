$(document).ready(function(){
	fizzBuzz(promptCount());
});

function fizzBuzz(maxCount){
	var list = $(".fizzbuzz"),
		maxCount = +maxCount;
	if(maxCount % 1 == 0)
	{
		for(var i= 1; i<=maxCount; i++){
			if(i%3 == 0 && i%5 == 0){
				list.append("<li>fizzbuzz</li>");
			}
			else if(i%3 == 0){
				list.append("<li>fizz</li>");
			}
			else if (i%5 == 0){
				list.append("<li>buzz</li>");
			}
			else{
				list.append("<li>" + i + "</li>");
			}
		}
	}
	else{
		alert("Please enter a valid number");
		fizzBuzz(promptCount());
	}
}

function promptCount(){
	return prompt("Please enter the max count", "100");
}