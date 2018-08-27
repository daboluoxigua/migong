$(function(){
	$(".play").click(function(){
		$(this).parent().hide();
		$(".game").show();
		init();	
		gameloop();
	})
	
	$(".btn1").click(function(){
		$(this).parent().parent().hide();
		$(".cover").hide();
		init();
		gameloop();
	})
	
	$(".close").click(function(){
		$(this).parent().hide();
		$(".cover").hide();
	})
	
	$(".yaoqing").click(function(){
		$(".share").show();
	})
	
	$(".share").click(function(){
		$(this).hide()
	})
	
	$(".rulea").click(function(){
		popup(".rule");
	})
	
})



////////////////////////////////////////////////////////////////

window.onload = function() {
	
}

var direction,
	loop,
	canvas,
	ctx,
	canWidth,
	canHeight,
	ball,
	BallImg,
	wall,
	WallImg,
	gold,
	goldImg=[],
	destination,
	destinationImg,
	speed=4;

var goldflg=[];


var dx = 0;
var dy = 0;

var x = 0;
var y = 0;

var BallArg = {
	y: 0,
	x: 0
};

var time=1,
	newTime=0;

BallImg = new Image();
BallImg.src = 'images/ball.png';

WallImg = new Image();
WallImg.src = 'images/wall.png';

destinationImg = new Image();
destinationImg.src = 'images/destination.png';

for (var i=0;i<6;i++) {
	goldImg[i] = new Image();
	goldImg[i].src='images/gold'+i+'.png';
}

//初始化
function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	canvas.height=canvas.width*1.34
	
	canWidth = canvas.width;
	canHeight = canvas.height;

	if(window && window.DeviceMotionEvent) {
		window.addEventListener('devicemotion', deviceMotionHandler, false);
	}
	if(window && window.DeviceOrientationEvent) {
		window.addEventListener("deviceorientation", orientationHandler, false);
	}
	
	for (var i=0;i<6;i++) {
		goldflg[i]=0
	}
	

	ball = new ballObj();
	ball.init();

	

	wall = new wallObj();
	wall.init();

	
	destination = new destinationObj();
	destination.init();

	gold=new goldObj();
	gold.init();
	
	time = Math.floor( new Date().getTime()/1000 )+20
}

function gameloop() {
	loop=requestAnimationFrame(gameloop);
	ctx.clearRect(0, 0, canWidth, canHeight);
	wall.draw();
	
	for (var i=0; i<6;i++) {
		if(goldflg[i]==0){
			gold.draw(i);
		}
	}
	
	ball.draw();
	
	destination.draw();
	
	processKey()
	
	
	newTime=Math.floor( new Date().getTime()/1000 )
	
	document.getElementById("countDown").innerHTML = time-newTime+"秒"
	
	if(time-newTime<=0){
		cancelAnimationFrame(loop);
		popup(".lose");
	}
	
	console.log(1)
}

function processKey(e) {
	dx = 0;
	dy = 0;

//	if(orc.x > 0 && Math.abs(orc.x) > Math.abs(orc.y)) {
//		dx = Math.abs(BallArg.x*speed);
//	} else if(orc.x < 0 && Math.abs(orc.x) > Math.abs(orc.y)) {
//		dx = -Math.abs(BallArg.x*speed);
//	} else if(orc.y < 0 && Math.abs(orc.y) > Math.abs(orc.x)) {
//		dy = -Math.abs(BallArg.y*speed);
//	} else if(orc.y > 0 && Math.abs(orc.y) > Math.abs(orc.x)) {
//		dy = Math.abs(BallArg.y*speed);
//	}
	
	if(orc.x > 0 && Math.abs(orc.x) > Math.abs(orc.y)) {
		dx = 1.6*speed;
	} else if(orc.x < 0 && Math.abs(orc.x) > Math.abs(orc.y)) {
		dx = -1.6*speed
	} else if(orc.y < 0 && Math.abs(orc.y) > Math.abs(orc.x)) {
		dy = -1.6*speed
	} else if(orc.y > 0 && Math.abs(orc.y) > Math.abs(orc.x)) {
		dy = 1.6*speed
	}
}


