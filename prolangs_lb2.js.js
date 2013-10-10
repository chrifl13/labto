$(document).ready(function() {

 
   
 

function notEmpty(){

var e = document.getElementById("field_60");
var strUser = e.options[e.selectedIndex].value;
var str=document.getElementById("swag").innerHTML; 
var n=str.replace("Velkommen til en mystisk verden av programmeringsspråk","Du har selektert programmeringsspråket");
document.getElementById("swag").innerHTML=n;
 
document.getElementById('aggregator_name').innerHTML = strUser;

}
notEmpty()
    
    document.getElementById("field_60").onchange = notEmpty;
	
	
	
	
	});

  
 