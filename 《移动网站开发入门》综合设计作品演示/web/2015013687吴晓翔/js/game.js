
var result;
function game_function()
{
var x=document.getElementById("demo").value;
if(x=='')
{
	change();
}
else{
	if(x==result)
		{
			alert("You're right.");
			change();
			document.getElementById("demo").value='';
		}
	else
		{

			alert("You're wrong.");
			wrong_function();
		};
	}
}
function wrong_function()
{
		var r=confirm("Try again?")
		if(r==true)
		{
			var x=prompt("Again")
			if(x==result)
			{
				alert("You're right.")
				change();
				document.getElementById("demo").value='';
			}
			else
			{
			alert("You're wrong again.")
			wrong_function();
			}
		}
		else
		{
			change();
		}	
}
function change()
{
	var x1=Math.floor(Math.random()*100+1);
	var y1=Math.floor(Math.random()*100+1);
	if(x1%4==0){
	result=x1+y1;
	document.getElementById('ti').innerHTML=x1+"+"+y1+"=?";
	}
	else if(x1%4==1){
	result=x1-y1;
	document.getElementById('ti').innerHTML=x1+"-"+y1+"=?";
	}
	else 	if(x1%4==2){
	result=x1*y1;
	document.getElementById('ti').innerHTML=x1+"*"+y1+"=?";
	}
	else 	if(x1%4==3){
	if(x1>x2){
	result=Math.floor(x1/y1);
	document.getElementById('ti').innerHTML=x1+"/"+y1+"=?(floor)";}
	else{result=x1+y1;
	document.getElementById('ti').innerHTML=x1+"+"+y1+"=?";}
	}
	
}