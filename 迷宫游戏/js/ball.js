var ballObj = function() {
	this.x;
	this.y;
	this.w;
	this.h;
}

ballObj.prototype.init = function(){
	this.x = canWidth/15;
	this.y = canHeight/1.216;
	this.w = canWidth/23;
	this.h = canHeight/15.23;
}
ballObj.prototype.draw = function(){
	
	this.x += dx;
    this.y += dy;
    
//  this.x += BallArg.x*speed;
//  this.y -= BallArg.y*speed;
   
    // 碰撞检测
    if (checkForCollision()) {
//    	this.x -= BallArg.x*speed;
//    	this.y += BallArg.y*speed;
//
//    	BallArg.x = 0;
//    	BallArg.y = 0;
      	
	    this.x -= dx;
		this.y -= dy;
		dx=0;
		dy=0;
      	
    }
	
	ctx.save();
	ctx.drawImage(BallImg,this.x,this.y,this.w,this.h);
	ctx.restore();
}
