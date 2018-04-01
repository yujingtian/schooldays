(function($){
	var SplitPicture=function(splitpic){
		this.flag=true;//节流阀
		this.self=this;
		this.splitpicture=splitpic;
		this.setting={
			    "picWidth":800,
   				"picHeight":600,
    			"url":"",
    			"parts":4
		}
		$.extend(this.setting,this.getSetting());
		console.log(this.setting);
		this.partWidth=this.setting.picWidth/Math.sqrt(this.setting.parts);//这是每一小块的宽度
		this.partHeight=this.setting.picHeight/Math.sqrt(this.setting.parts);//这是每一小块的高度
		this.setSetting();
		this.spilts();
		this.splitanimate();
		this.animatenumber=Math.ceil(Math.pow(-1,Math.ceil(Math.random()*10)))*Math.random()*100;
	}
	SplitPicture.prototype={
		spilts:function(){
			var span=[];
			var self=this;
			var partcols=Math.sqrt(self.setting.parts);
			var count=0;
			for(var i=0;i<partcols;i++)
			{
				for(var j=0;j<partcols;j++)
				{
				        span[count]=$('<span></span>').css({
						display:"inline-block",
						width:self.partWidth,
						height:self.partHeight,
						left:self.partWidth*j,
						top:self.partHeight*i,
						background:"url("+self.setting.url+") no-repeat "+(-self.partWidth*j)+"px "+(-self.partHeight*i)+"px",
						position:"absolute",
						backgroundSize:self.setting.picWidth+"px "+self.setting.picHeight+"px"

					});
				   $("."+self.splitpicture.attr("class")+" span").parent().css({
						fontSize:0
					});
				   span[count].appendTo(self.splitpicture);
					count++;
				}
			}
		},
		splitanimate:function(){
			var self=this;
			this.splitpicture.hover(function(){
					for(var i=0;i<self.setting.parts;i++)
					{
						$("."+self.splitpicture.attr("class")+" span").eq(i).stop(false,true).animate({
							marginLeft:Math.ceil(Math.pow(-1,Math.ceil(Math.random()*10)))*Math.random()*500+"px",
							marginTop:Math.ceil(Math.pow(-1,Math.ceil(Math.random()*10)))*Math.random()*500+"px",
							opacity:0
						},500);
					}
				
			},function(){	
				
					for(var i=0;i<self.setting.parts;i++)
					{
						$("."+self.splitpicture.attr("class")+" span").eq(i).stop(false,true).animate({
							marginLeft:0,
							marginTop:0,
							opacity:1,
						},500);
					}				
			});
		},
		getSetting:function(){
			var setting=this.splitpicture.attr('data-setting');
			if(setting&&setting!="")
			{
				return $.parseJSON(setting);
			}else
			{
				return {};
			}
		},
		setSetting:function(){
			var self=this;
			this.splitpicture.css({
				position:"relative",
				width:self.setting.picWidth,
				height:self.setting.picHeight,
				/*background:"url("+self.setting.url+")"*/
			});
		}
	};
	SplitPicture.init=function(splitpic){
		new this(splitpic);
	}
	window['Split']=SplitPicture;
})(jQuery);