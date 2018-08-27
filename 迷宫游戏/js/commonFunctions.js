window.requestAnimFrame = (function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
		function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
			return window.setTimeout(callback, 1000 / 60);
		};
})();

function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;
}

//碰撞检查（撞击方向）
function collText(left,top){
	
    var l1=wall.x;
    var t1=wall.y;
    var r1=wall.x+wall.w;
    var b1=wall.y+wall.h;
    
    if(left<l1||top<t1||left>r1||top>b1){
    	if(left<l1){
    		direction="left";
    	}
    	if(top<t1){
    		direction="top"
    	}
    	if(left>r1){
    		direction="right"
    	}
    	if(top>b1){
    		direction="bottom"
    	}
       return true
    }else{
        return false;
    }

};


var orc={
	x:0,
	y:0,
	z:0
};

function deviceMotionHandler (eventData) {
	var acceleration = event.accelerationIncludingGravity; 
	var last_update = 0;
	var curTime = 0;
	
	curTime = new Date().getTime();
	if((curTime - last_update) > 100) {
		last_update = curTime;
		acceleration.x;
		acceleration.y;
	}
	
	BallArg.x=acceleration.x;
  	BallArg.y=acceleration.y;
  	
}


function orientationHandler(event) {
	orc.z=event.alpha||0;
	orc.y=event.beta||0;
	orc.x=event.gamma||0;
}

function checkForCollision() {
    // 取得笑脸所在的像素块，再稍微扩展一点
    var imgData = ctx.getImageData(ball.x+1, ball.y+1, ball.w+1, ball.h+1);
    var pixels = imgData.data;
 	
    // 检测其中的像素
    for (var i = 0; n = pixels.length, i < n; i += 4) {
		var red = pixels[i];
		var green = pixels[i+1];
		var blue = pixels[i+2];
		var alpha = pixels[i+3];
		
		// 撞墙
		if (red == 255 && green == 160 && blue == 178) {
			return true;
		}
		// 赢了
		if (red == 130 && green == 66 && blue == 66) {
			popup(".win");
			cancelAnimationFrame(loop);
			return true;
		}
		
//		 中陷阱
		if (red == 55 && green == 43 && blue == 120) {
			popup(".lose");
	    	cancelAnimationFrame(loop);
			return true;
	    }
		
		if(red == 255 && green == 164 && blue == 5){
    		goldflg[0]=1;
    	}
    	if(red == 255 && green == 164 && blue == 10){
    		goldflg[1]=1;
    	}
    	if(red == 255 && green == 164 && blue == 15){
    		goldflg[2]=1;
    	}
    	if(red == 255 && green == 164 && blue == 20){
    		goldflg[3]=1;
    	}
    	if(red == 255 && green == 164 && blue == 25){
    		goldflg[4]=1;
    	}
    	if(red == 255 && green == 164 && blue == 30){
    		goldflg[5]=1;
    	}
		
	}
    	
    	
		// 没有撞墙
		return false;
}