function whatcolour(clickedcolour)
{
    if(clickedcolour === 0){
		document.getElementById("darksidechange").src = "assets/blackdarkside.jpg";
	}
	
	if(clickedcolour === 1){
		document.getElementById("darksidechange").src = "assets/whitedarkside.jpg";	
	}
	
	if(clickedcolour === 2){
		document.getElementById("darksidechange").src = "assets/reddarkside.jpg";	
	}
	
	if(clickedcolour === 3){
		document.getElementById("darksidechange").src = "assets/bluedarkside.jpg";	
	}
	
	if(clickedcolour === 4){
		document.getElementById("darksidechange").src = "assets/greendarkside.jpg";	
	}
	
	if(clickedcolour === 5){
		document.getElementById("darksidechange").src = "assets/yellowdarkside.jpg";	
	}
}

function whatsize(clickedsize)
{
	
    if(clickedsize === 0){
		document.getElementById("price").innerHTML = "£24.99 Small";
	}
	
	if(clickedsize === 1){
		document.getElementById("price").innerHTML = "£24.99 Medium";
	}
	
	if(clickedsize === 2){
		document.getElementById("price").innerHTML = "£24.99 Large";	
	}
	
	if(clickedsize === 3){
		document.getElementById("price").innerHTML = "£30 X Large";
	}
	
	if(clickedsize === 4){
		document.getElementById("price").innerHTML = "£30 XX Large";
	}
	
}

function changevid(buttonlink) { 
    document.getElementById("vidslide").src = buttonlink;
}

function myFunction() {
    var x = document.getElementsByName("nav");
    if (x.idName === "nav") {
        x.className += "responsive";
    } 
	
	else {
        x.idName = "nav";
    }
}