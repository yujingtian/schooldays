var canvasWidth;
var canvasHeight;
var lasttime;
var deltatime;
var mx;
var my;
var tanke; 
var tanke2;
var bullet;
var bullet2;
var left;
var right;
var bottomm;
var topp;
var left2;
var right2;
var bottom2;
var topp2;
var fig="topp";
var fig2="topp";
var shoot;
var shoot2;
var game1=false;
var game2=false;
var date;
var count;
var count2;
window.onload=function(){
	var canvas= document.getElementById("canvas");
	document.getElementById("music").volume = 0.3;
	var context=canvas.getContext("2d");
	    left=false;
        right=false;
        topp=false;
        bottom=false;
	canvasWidth=canvas.width;
    canvasHeight=canvas.height;
    lasttime=Date.now();
    deltatime=0;
	tanke=new tankeobj();
	bullet=new bulletobj();
	tanke2=new tanke2obj();
	bullet2=new bullet2obj();
	date=new dateobj();
	bullet.init();
	bullet2.init();
	count=bullet.num;
    count2=bullet2.num;
    if (!window.requestAnimationFrame) { 
      window.requestAnimationFrame = (window.webkitRequestAnimationFrame || 
                                      window.mozRequestAnimationFrame || 
                                      window.oRequestAnimationFrame || 
                                      window.msRequestAnimationFrame || 
                                      function (callback) { 
                                        return window.setTimeout(callback, 1000/60); 
                                      }); 
    } 
    //canvas.addEventListener('mousemove',onMouseMove,false);
   (function drawFrame(){ 
    window.requestAnimationFrame(drawFrame,canvas); 
    var now=Date.now();
    deltatime=now -lasttime;
    lasttime=now;
    if(deltatime>40)
    {
    	deltatime=40;
    }
    context.clearRect(0,0,canvas.width,canvas.height);
    document.onkeydown=function(event){
	   	switch(event.keyCode){
	   		case 37:left=true;break;
	   		case 38:topp=true;break;
	   		case 39:right=true;break;
	   		case 40:bottomm=true;break;
	   		case 65:left2=true;break;
	   		case 87:topp2=true;break;
	   		case 68:right2=true;break;
	   		case 83:bottom2=true;break;
	   		case 191:shoot=true;break;
	   		case 70:shoot2=true;break;
	   	}
	   }
    document.onkeyup=function(event){
	   	switch(event.keyCode){
	   		case 37:left=false;break;
	   		case 38:topp=false;break;
	   		case 39:right=false;break;
	   		case 40:bottomm=false;break;
	   		case 65:left2=false;break;
	   		case 87:topp2=false;break;
	   		case 68:right2=false;break;
	   		case 83:bottom2=false;break;
	   		case 191:shoot=false;break;
	   		case 70:shoot2=false;break;
	   	}
	   }
	   	if(left&&game1==true&&game2==true)
		{
		tanke.x=tanke.x-tanke.speed;
		tanke.angle=Math.PI*1/-2;
		fig="left";
		}
		else if(topp&&game1==true&&game2==true)
		{
		tanke.y=tanke.y-tanke.speed;
		tanke.angle=0;
		fig="topp";
		}
		else if(right&&game1==true&&game2==true)
		{
		tanke.x=tanke.x+tanke.speed;
		tanke.angle=Math.PI*1/2;
		fig="right";
		}
		else if(bottomm&&game1==true&&game2==true)
		{
		tanke.y=tanke.y+tanke.speed;
		tanke.angle=Math.PI;
		fig="bottom";
		}
		if(left2&&game1==true&&game2==true)
		{
		tanke2.x=tanke2.x-tanke2.speed;
		tanke2.angle=Math.PI*1/-2;
		fig2="left";
		}
		else if(topp2&&game1==true&&game2==true)
		{
		tanke2.y=tanke2.y-tanke2.speed;
		tanke2.angle=0;
		fig2="topp";
		}
		else if(right2&&game1==true&&game2==true)
		{
		tanke2.x=tanke2.x+tanke2.speed;
		tanke2.angle=Math.PI*1/2;
		fig2="right";
		}
		else if(bottom2&&game1==true&&game2==true)
		{
		tanke2.y=tanke2.y+tanke2.speed;
		tanke2.angle=Math.PI;
		fig2="bottom";
		}	 	 
    pengzhuang();
    beat();
   if(game1==true)
   {
   	 tanke.drawtanke(context);  

   }
   if(game2==true)
   {
   	tanke2.drawtanke(context);
   }
   if(count>0)
   {
   	 bullet.draw(context);
   }
   if(count2>0)
   {
    bullet2.draw(context);
   }
    date.draw(context);
    }()); 
  }; 
  function onMouseMove(e)
{
        mx = e.offSetX == undefined? e.layerX:e.offSetX;
        my = e.offSetY == undefined? e.layerY:e.offSetY;
}