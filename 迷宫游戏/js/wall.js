var wallObj = function() {
	this.x;
	this.y;
	this.w;
	this.h;
}
wallObj.prototype.init = function(){
	this.x = 0;
	this.y = 0;
	this.w = canWidth;
	this.h = canHeight;
}

wallObj.prototype.draw = function(){
	ctx.save();
	ctx.drawImage(WallImg,this.x,this.y,this.w,this.h);
	ctx.restore();
}

var destinationObj = function() {
	this.x;
	this.y;
	this.w;
	this.h;
}
destinationObj.prototype.init = function(){
	this.x = canWidth/1.88;
	this.y = canHeight/1.48;
	this.w = canWidth/2.93;
	this.h = canHeight/4.024;
}

destinationObj.prototype.draw = function(){
	ctx.save();
	ctx.drawImage(destinationImg,this.x,this.y,this.w,this.h);
	ctx.restore();
}