function pengzhuang(){
	if(tanke.x>canvasWidth-30)
	{
		tanke.x=canvasWidth-30;
	}
	if(tanke.y>canvasHeight-30)
	{
		tanke.y=canvasHeight-30;
	}
	if(tanke.x<30)
	{
		tanke.x=30;
	}
	if(tanke.y<30)
	{
		tanke.y=30;
	}
	if(tanke2.x>canvasWidth-30)
	{
		tanke2.x=canvasWidth-30;
	}
	if(tanke2.y>canvasHeight-30)
	{
		tanke2.y=canvasHeight-30;
	}
	if(tanke2.x<30)
	{
		tanke2.x=30;
	}
	if(tanke2.y<30)
	{
		tanke2.y=30;
	}
}

function beat(){
	var result;
	var result2;
	var pmx1;
	var pmy1;
	var pmx;
	var pmy;
	for(var i=0;i<100;i++)
	{
			if(bullet2.flag[i]=="bottom")
			{
				pmx=tanke.x-(bullet2.x[i]);
			    pmy=tanke.y-(bullet2.y[i]+33);
				result=pmx*pmx+pmy*pmy;
			}
				if(bullet2.flag[i]=="topp")
			{
				 pmx=tanke.x-(bullet2.x[i]);
			     pmy=tanke.y-(bullet2.y[i]-33);
				result=pmx*pmx+pmy*pmy;
			}
				if(bullet2.flag[i]=="left")
			{
				 pmx=tanke.x-(bullet2.x[i]-33);
			     pmy=tanke.y-(bullet2.y[i]);
				result=pmx*pmx+pmy*pmy;
			}
				if(bullet2.flag[i]=="right")
			{
				 pmx=tanke.x-(bullet2.x[i]+33);
			     pmy=tanke.y-(bullet2.y[i]);
				result=pmx*pmx+pmy*pmy;
			}
			if(result<420)
			{
				if(bullet2.alive[i]==true)
				{
						if(bullet2.zhong[i]==false)
						{   
							tanke.life--;
							bullet2.zhong[i]=true;
							bullet2.alive[i]=false;
							bullet2.zhong[i]=false;
						}
						if(tanke.life<=0)
						{
							tanke.life=0;
							game1=false;	
							tanke.x=800;
							tanke.y=800;
						}
				}
			}

			
			if(bullet.flag[i]=="bottom")
			{
				pmx1=tanke2.x-(bullet.x[i]);
			    pmy1=tanke2.y-(bullet.y[i]+33);
				result2=pmx1*pmx1+pmy1*pmy1;
			}
				if(bullet.flag[i]=="topp")
			{
				 pmx1=tanke2.x-(bullet.x[i]);
			     pmy1=tanke2.y-(bullet.y[i]-33);
				result2=pmx1*pmx1+pmy1*pmy1;
			}
				if(bullet.flag[i]=="left")
			{
				 pmx1=tanke2.x-(bullet.x[i]-33);
			     pmy1=tanke2.y-(bullet.y[i]);
				result2=pmx1*pmx1+pmy1*pmy1;
			}
				if(bullet.flag[i]=="right")
			{
				 pmx1=tanke2.x-(bullet.x[i]+33);
			     pmy1=tanke2.y-(bullet.y[i]);
				result2=pmx1*pmx1+pmy1*pmy1;
			}
				if(result2<420)
				{

					if(bullet.alive[i]==true)
					{
							if(bullet.zhong[i]==false)
							{
								tanke2.life--;
								bullet.zhong[i]=true;
								bullet.alive[i]=false;
								bullet.zhong[i]=false;
							}
							if(tanke2.life<=0)
							{
								tanke2.life=0;
								game2=false;
								tanke2.x=800;
							tanke2.y=800;
							}
					}
				}
			
				

			
			
	}	
}