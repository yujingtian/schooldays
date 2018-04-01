var dateobj=function(){
	this.num=bullet.num;
	this.num2=bullet2.num;
	this.life1=tanke.life;
	this.life2=tanke2.life;
}
dateobj.prototype.draw = function(context) {

	context.save();
	context.font = "18px 华文隶书";
	context.fillStyle="black";

	context.fillText("生命"+tanke.life+"/"+this.life1+" 子弹："+count+"/"+this.num,400,580);//坦克一的数据（右侧）
	context.fillText("子弹："+count2+"/"+this.num2+" 生命"+tanke2.life+"/"+this.life2,10,580);//坦克二的数据（左侧）
	
	if(tanke.life==0)
	{
		context.save();
		context.font = "50px 华文隶书";
	    context.fillStyle="black";
		context.fillText("左边胜利",200,300);
        context.restore();
	}
	if(tanke2.life==0)
	{
		context.save();
		context.font = "50px 华文隶书";
	    context.fillStyle="black";
		context.fillText("右边胜利",200,300);
        context.restore();
	}
	context.restore();
};