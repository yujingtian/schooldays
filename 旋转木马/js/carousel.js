;(function($){
var Carousel=function(poster){
	//保存单个旋转木马对象
	var self=this;
	this.poster=poster;
	this.posterItemMain=poster.find("ul.poster-list");
	this.nextbtn=poster.find("div.poster-next-button");
	this.prevbtn=poster.find("div.poster-prev-button");
	this.posterfirstitem=this.posterItemMain.find("li").eq(0);
	this.posterlastitem=this.posterItemMain.find("li").last();
	this.posteritems=poster.find("li.poster-item");
	this.rotateflag=true;
	//默认配置参数
	this.setting={
			"width":1000,//幻灯片的宽度
			"height":270,//幻灯片的高度
			"posterwidth":640,//幻灯片第一帧宽
			"posterheight":270,//幻灯片第一帧高
			"verticalAlign":"middle",
			"scale":0.9,	
			"speed":1000,
			"autoPlay":true,
			"delay":2000
	};
$.extend(this.setting,this.getsetting());
this.setsettingvalue();
this.setposterpos();
this.nextbtn.click(function(){
	if(self.rotateflag)
	{
		self.rotateflag=false;
		self.Carouserotate("left");
	}
	

});
this.prevbtn.click(function(){
	if(self.rotateflag)
	{
		self.rotateflag=false;
		self.Carouserotate("right");
	}

});
//是否开启自动播放
if(this.setting.autoPlay)
{
	this.autoPlay();
	this.poster.hover(function(){
		window.clearInterval(self.timer);
	},function(){
		self.autoPlay();
	});
};

};
Carousel.prototype={
	//自动播放
autoPlay:function(){
	var _this_=this;
	this.timer=window.setInterval(function(){
		_this_.nextbtn.click();
	},_this_.setting.delay);
},
	//旋转
Carouserotate:function(dir){
	var zIndexarr=[];
	var _this_=this;
	if(dir==="left"){	
		this.posteritems.each(function(){
			var self=$(this);
			var prev=self.prev().get(0)?self.prev():_this_.posterlastitem;
			var width=prev.width();
			var height=prev.height();
			var zIndex=prev.css("zIndex");
			var opacity=prev.css("opacity");
			var left=prev.css("left");
			var top=prev.css("top");
			zIndexarr.push(zIndex);
			self.animate({
				width:width,
				height:height,
				opacity:opacity,
				left:left,
				top:top
			},_this_.setting.speed,
			function(){
				_this_.rotateflag=true;
			});

		});
		this.posteritems.each(function(i){
			$(this).css("zIndex",zIndexarr[i]);
		});
	}else if(dir==="right"){
		this.posteritems.each(function(){
			var self=$(this);
			var next=self.next().get(0)?self.next():_this_.posterfirstitem;
			var width=next.width();
			var height=next.height();
			var zIndex=next.css("zIndex");
			var opacity=next.css("opacity");
			var left=next.css("left");
			var top=next.css("top");
			zIndexarr.push(zIndex);
			self.animate({
				width:width,
				height:height,
				opacity:opacity,
				left:left,
				top:top
			},_this_.setting.speed,function(){
				_this_.rotateflag=true;
			});

		});
		this.posteritems.each(function(i){
			$(this).css("zIndex",zIndexarr[i]);
		});
	}
	
},
	//设置剩余帧的位置关系
	setposterpos:function(){
		var self=this;
		var sliceitems 	=this.posteritems.slice(1);
		var slicesize   =sliceitems.size()/2;
		var	rightslice	=sliceitems.slice(0,slicesize);
		var	level   	=Math.floor(this.posteritems.size()/2);
		var leftslice	=sliceitems.slice(slicesize);
			//设置右边帧的位置关系
		var rw=this.setting.posterwidth;
		var rh=this.setting.posterheight;
		var gap=((this.setting.width-this.setting.posterwidth)/2)/level;
	  	var firstleft=(this.setting.width-this.setting.posterwidth)/2;
		var j=0;
	    var fixleft=firstleft+rw; 	  
	  	  rightslice.each(function(i){
	  	       level--;
	  	       rw=rw*self.setting.scale;
	  	       rh=rh*self.setting.scale;

				$(this).css({
				zIndex:level,
				width:rw,
				height:rh,
				opacity:1/(++j)/2,
				left:fixleft+(++i)*gap-rw, 
				top:self.setverticalAlign(rh)
				});
				});


		var	lw=rightslice.last().width();
		var lh=rightslice.last().height();
		var loopindex=Math.floor(this.posteritems.size()/2);
		  leftslice.each(function(i){
				$(this).css({
				zIndex:level,
				width:lw,
				height:lh,
				opacity:1/loopindex/2,
				left:i*gap, 
				top:self.setverticalAlign(lh)
				});
				loopindex--;
				level++;  
				lw=lw/self.setting.scale;
	  	        lh=lh/self.setting.scale;
		        });

  },
//设置垂直排列对齐
setverticalAlign:function(height){
 	var verticaltype=this.setting.verticalAlign;
 	var top=0;
 	if(verticaltype==="middle")
 	{
 		top=(this.setting.height-height)/2;
 	}
 	else if(verticaltype==="top")
 	{
 		top=0;
 	}else if(verticaltype==="bottom")
 	{
 		top=this.setting.height-height;
 	}else
 	{
 		top=(this.setting.height-height)/2;
 	}
 	return top;
},
//设置配置参数去控制基本的宽度高度
setsettingvalue:function(){
		this.poster.css({
			width:this.setting.width,
			height:this.setting.height
		});
		this.posterItemMain.css({
			width:this.setting.width,
			height:this.setting.height
		});
		//计算上下按钮的宽度
		var w=(this.setting.width-this.setting.posterwidth)/2;

		this.nextbtn.css({
			width:w,
			height:this.setting.height,
			zIndex:Math.ceil(this.posteritems.size()/2)
		});
		this.prevbtn.css({
			width:w,
			height:this.setting.height,
			zIndex:Math.ceil(this.posteritems.size()/2)
		});
		this.posterfirstitem.css({
			width:this.setting.posterwidth,
			height:this.setting.posterheight,
			left:w,
			zIndex:Math.floor(this.posteritems.size()/2)
		});
},
//获取人工配置的参数
getsetting:function(){
			var setting=this.poster.attr("data-setting");
			if(setting&&setting!="")
			{
                 return $.parseJSON(setting);
			}
			else
			{
				return {};
			}				
		}


};


Carousel.init=function(posters){
	var _this_= this ; 
	posters.each(function(){
		new _this_($(this)); 
	});
};

window["Carousel"]=Carousel;
})(jQuery);