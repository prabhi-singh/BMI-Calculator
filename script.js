function computeBMI() {
	var weight = Number(document.getElementById("weight").value);
	var weightunits = document.getElementById("weightunits").value;
	var height = Number(document.getElementById("height").value);
	var heightunits = document.getElementById("heightunits").value;

	if(heightunits == "inches")
		height /= 39.37008;
	if(weightunits == "lb")
		weight /= 2.20462;

	var BMI = weight / Math.pow(height, 2);

	document.getElementById("output").innerHTML = Math.round(BMI*100)/100;

	if(BMI<18.5)
		document.getElementById("comment").innerHTML = "Underweight";
	else if(BMI>=18.5 && BMI<25)
		document.getElementById("comment").innerHTML = "Normal weight";
	else if(BMI>=25 && BMI<30)
		document.getElementById("comment").innerHTML = "Pre-obesity";
	else if(BMI>=30 && BMI<35)
		document.getElementById("comment").innerHTML = "Obesity class I";
	else if(BMI>=35 && BMI<40)
		document.getElementById("comment").innerHTML = "Obesity class II";
	else
		document.getElementById("comment").innerHTML = "Obesity class III";
	document.getElementById("answer").value = output;
}