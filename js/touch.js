var q=document.getElementsByTagName("body");
q.addEventListener('touchstart',touchStart,false);
q.addEventListener('touchmove',touchMove,false);
q.addEventListener('touchend',touchEnd,false);

var flage=false;
function touchStart(e){
	e.preventDefault();
	flage=true;
}
function touchMove(e){
	if(flag&&e.touches.length==1){
		var t=e.touches[0];
		q.style.left=t.clientX-25+'px';
		q.style.top=t.clientY-25+'px';
	}
}
function touchEnd(e){
	
}