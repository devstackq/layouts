var width = screen.width;
var height = screen.height;

function reSize() {
	(window.resizeTo(width/4, height/4);
		width = width/4;
		height = height/4;
		window.moveTo(0,0);
		openwindow();
}

function openWindow() {
	(while(width < screen.width && height < screen.height){
		window.resizeBy(4,3)
		width += 4;
		height += 3;
	}
}