var navAnchorTags= document.querySelectorAll('.nav-menu a');
//console.log(navAnchorTags);
var interval;
for(var i=0;i<navAnchorTags.length;i++){
	navAnchorTags[i].addEventListener('click', function(event) {
		// body...
		event.preventDefault();
		var targetSectionId = this.textContent.trim().toLowerCase();
		console.log(targetSectionId);
		var targetSection = document.getElementById(targetSectionId);
		console.log(targetSection);
	    interval=setInterval(scrollvertically,20,targetSection);
	});
}
 function scrollvertically(targetSection) {
	// body...
	var targetSectionCoordinates= targetSection.getBoundingClientRect();
			console.log(targetSectionCoordinates);
			if(targetSectionCoordinates.top <= 14){
				clearInterval(interval);
				return;
			}
			window.scrollBy(0,50);
}

/*var progressBars= document.querySelectorAll('.skill-progress > div');
var skillcontainer= document.getElementById('skill-container');
window.addEventListener('scroll', checkscroll);
var animationdone=false;

function initialiseBars(){
	for(let bar of progressBars){
		bar.style.width=0+'%';
	}
}
initialiseBars();

function fillBars(){
     for(let bar of progressBars){
     	let targetwidth= bar.getAttribute('data-bar-width');
     	let currentwidth= 0;
     	let interval = setInterval(function(){
     		if(currentwidth>targetwidth){
     			clearInterval(interval);
     			return;
     		}
     		currentwidth++;
     		bar.style.width= currentwidth +'%';
     	},5);
     }
}

function checkscroll(){
	var coordinates= skillcontainer.getBoundingClientRect();
	if(!animationdone&& coordinates.top<=window.innerHeight){
		animationdone=true;
		console.log('skill-section Visible');
		fillBars();
	}else if(coordinates.top>window.innerHeight){
		animationdone=false;
		initialiseBars();
	}
}*/
var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);