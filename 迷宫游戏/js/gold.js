var goldObj= function(){
	this.x=[];
	this.y=[];
	this.w;
	this.h;
}

goldObj.prototype.init = function(){
	this.w = canWidth/20.83333;
	this.h = canHeight/27.94444;
	
	this.x[0]=canWidth/2.3;
	this.y[0]=canHeight/1.224;
	
	this.x[1]=canWidth/4.31;
	this.y[1]=canHeight/1.89;
	
	this.x[2]=canWidth/4.31;
	this.y[2]=canHeight/6;
	
	this.x[3]=canWidth/1.37;
	this.y[3]=canHeight/5.24;
	
	this.x[4]=canWidth/1.24;
	this.y[4]=canHeight/4.04;
	
	this.x[5]=canWidth/1.08;
	this.y[5]=canHeight/1.24;
}

goldObj.prototype.draw = function(i){
	ctx.save();
	ctx.drawImage(goldImg[i],this.x[i],this.y[i]);
	ctx.restore();
}