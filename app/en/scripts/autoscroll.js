window.onload = function(){
	if(document.getElementById('headingOne') != null){
		document.getElementById('headingOne').addEventListener('click', function(){scrolltoItem('headingOne');});
	}
	if(document.getElementById('headingTwo') != null){
		document.getElementById('headingTwo').addEventListener('click', function(){scrolltoItem('headingTwo');});
	}
	if(document.getElementById('headingThree') != null){
		document.getElementById('headingThree').addEventListener('click', function(){scrolltoItem('headingThree');});
	}
	if(document.getElementById('headingFour') != null){
		document.getElementById('headingFour').addEventListener('click', function(){scrolltoItem('headingFour');});
	}
	//new adds for info pages/UTU page
	if(document.getElementById('lastItem') != null){
		document.getElementById('lastItem').addEventListener('click', function(){scrolltoItem('lastItem');});
	}
}

function scrolltoItem(id){
	var target = document.getElementById(id);
	var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 10);
}