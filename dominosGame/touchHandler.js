var currentlyTouchedItem = -1;

function onTouchStart(event) {
    for (var i = 0; i < touchableItems.length; i++)
    {
        if (touchableItems[i].enabled) {
            if (isPointInPoly(touchableItems[i].vertices, event.changedTouches[0].clientX, event.changedTouches[0].clientY)) {
                currentlyTouchedItem = i;
                touchableItems[i].touchAction();
            }
        }
    }
	
}
function onClickStart(event) {
 for (var i = 0; i < touchableItems.length; i++)
    {
        if (touchableItems[i].enabled) {
            if (isPointInPoly(touchableItems[i].vertices, event.clientX, event.clientY)) {
                currentlyTouchedItem = i;
                touchableItems[i].touchAction();
            }
        }
    }
}
 
function onTouchMove(event) {
	 // Prevent the browser from doing its default thing (scroll, zoom)
	//event.preventDefault(); 
    //testDomino.moveTo(event.changedTouches[0].clientX,event.changedTouches[0].clientY)
        touchEvent = event.touches[0];
} 
function onMouseMove(event) {
    touchEvent = event;
    }
 
function onTouchEnd(event) { 
	touchableItems[currentlyTouchedItem].releaseAction();
}   
function onClickEnd(event) {
    onTouchEnd(event);
   }


function isPointInPoly(poly, ptX, ptY){
    for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i].y <= ptY && ptY < poly[j].y) || (poly[j].y <= ptY && ptY < poly[i].y))
        && (ptX < (poly[j].x - poly[i].x) * (ptY - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
return c;
}