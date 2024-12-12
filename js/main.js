window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").style.width = "100px";
    document.getElementById("navbar").style.background = "rgba(0,0,0,0.5)";
    document.getElementById("navbar").style.backdropFilter = "blur(5px)";
  } else {
    document.getElementById("logo").style.width = "190px";
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("navbar").style.backdropFilter = "blur(0px)";
  }
}

if (document.getElementById("navbar-toggler")) {
    document.getElementById("navbar-toggler").addEventListener("click", function(){

        var menu = document.getElementById("navbar-nav-js");
        var iconTop = document.querySelector('.navbar-toggler-icon.top');
        var iconCenter = document.querySelector('.navbar-toggler-icon.center');
        var iconBottom = document.querySelector('.navbar-toggler-icon.bottom');

        if (this.classList.contains('hidden')) {

            iconCenter.style.transform = "scale(1)";
            iconTop.style.transform = "rotate(0deg)";
            iconBottom.style.transform = "rotate(0deg)";
            menu.style.transform = "translateX(100%)";
            this.classList.remove("hidden");
        }
        else{
            iconCenter.style.transform = "scale(0)";
            iconTop.style.transform = "rotate(45deg) translate(5px, 5px)";
            iconBottom.style.transform = "rotate(-45deg) translate(5px, -5px)";
            menu.style.transform = "translateX(0)";
            this.classList.add("hidden");
        }

    });
}

var accItem = document.getElementsByClassName('card');
var accHD = document.getElementsByClassName('card-header');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'card close';
    }
    if (itemClass == 'card close') {
        this.parentNode.className = 'card open';
    }
    else{
        for (i = 0; i < accItem.length; i++) {            
            if (document.getElementById("accordion").children.className = 'card close'){
                document.getElementById("accordion").children[0].className = 'card open';
            }
            else {
                document.getElementById("accordion").children[0].remove();
            }
        }
    }
    
}

/*
document.onkeypress = function (event) {
    event = (event || window.event);
    return keyFunction(event);
}
document.onmousedown = function (event) {
    event = (event || window.event);
    return keyFunction(event);
}
document.onkeydown = function (event) {
    event = (event || window.event);
    return keyFunction(event);
}

//Disable right click script 
var message = "Sorry, right-click has been disabled"; 

function clickIE() {
	if (document.all) {
		alert(message);
		return false;
	}
} 
function clickNS(e) {
	if (document.layers || (document.getElementById && !document.all)) { 
		if (e.which == 2 || e.which == 3) {
			alert(message);
			return false;
		}
	}
} 
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS;
} 
else{
	document.onmouseup=clickNS;
	document.oncontextmenu=clickIE;
} 
document.oncontextmenu=new Function("return false")

function keyFunction(event){
    //"F12" key
    if (event.keyCode == 123) {
        return false;
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    }
    //"J" key
    if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        return false;
    }
    //"S" key
    if (event.keyCode == 83) {
       return false;
    }
    //"U" key
    if (event.ctrlKey && event.keyCode == 85) {
       return false;
    }
    F5
    if (event.keyCode == 116) {
       return false;
    }
}
*/
