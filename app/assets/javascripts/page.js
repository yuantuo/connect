window.onload = function() {

	var canvas = document.getElementById('canvasArea');
	var context = canvas.getContext('2d');


	var largeImage = new Image();

	largeImage.src = "/assets/student2.jpg";
	
	var largeImageXPos = 0;
	var largeImageYPos = 75;

	context.drawImage(largeImage, largeImageXPos, largeImageYPos, 205, 290);

	context.font = "8px Verdana";
	context.fillStyle = "black";
	context.textAlign = "right";



	context.fillText("HELLO ", 75, 65);


	// 		speach bubble one
	// 		xS   xY   xC1  yC1  xC2  yC2   xE    yE   color
  // 		---  ---  ---  ---  ---  ---   ---   ---  ------
	draw( 15,  30,  10,   20,  22,  10,   35,  20, 'red');
	draw( 35,  20,  40,   10,  50,  10,   55,  20, 'red');
	draw( 55,  20,  55,   10,  85,  15,   75,  30, 'red');
	draw( 75,  30,  95,   25,  95,  40,   90,  50, 'red');
	draw( 90,  50,  100,  60,  95,  65,   85,  70, 'red');
	draw( 85,  70,  90,   80,  95,  80,   100, 85, 'red');
	draw( 100, 85,  90,   80,  100, 85,   80,  75, 'red');
	draw( 80,  75,  75,   85,  70,  85,   60,  75, 'red');
	draw( 60,  75,  55,   85,  50,  85,   40,  78, 'red');
	draw( 40,  78,  35,   85,  25,  85,   20,  72, 'red');
	draw( 20,  72,  0,    70,  0,   55,   13,  52, 'red');
	draw( 13,  52,  0,    50,  0,   35,   15,  30, 'red');


	function draw(xStart, yStart, xControl1, yControl1, xControl2, yControl2, xEnd, yEnd, color) {

			context.strokeStyle = 'black';
			context.lineWidth = 3;
			context.lineCap = "round";
			context.shadowOffsetX = 3;
			context.shadowOffsetY = 3;
			context.shadowBlur = 5;
			context.shadowColor = 'grey';

			context.beginPath();
			context.moveTo(xStart, yStart);
			context.bezierCurveTo(xControl1, yControl1, xControl2, yControl2, xEnd, yEnd );

			context.stroke();
	}









	
}
