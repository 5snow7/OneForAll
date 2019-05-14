let t;let can,c,p;let img;
let tes="no";let pX;let pict1,pict2;
let rotVar=0;let div0,div1;
function setup(){
	can=createCanvas(1000,400,WEBGL);can.class("canbells");
	t=new logo3DXY(50,-100,0);
	fillpts(20);//img=createImg('cowpic2.jpg');
	//img.size(windowWidth,windowHeight);img.position(0,0);
	strokeWeight(.5);
    pX=createP("testing pts"); 	
	c=select('#ch1');
	div0=select("#div0");div0.class("div0");//div0.child(img);
	div0.child(pX);
	div0.child(can);div0.child(c);
	}
	
	let sides=3;let an=0;
	
	function draw(){
	background(200,200,0);
	if(rotVar%2==0)
	{push();rotateX(an*PI/180);t.poly(50,sides);pop();}
	else
	{push();rotateY(an*PI/180);t.poly(50,sides);pop();}
	

	an=an+5;if(an>360){an=0;}
	if(frameCount%60==0){sides++;}
	if(sides>=15){sides=3;}
	
	push();rotateX(an*PI/180);testL(19);pop();
	pX.html(sq(ptX[2][0])+"  "+ptX[2][0]+"  "+floor(mouseX)+"  "+floor(mouseY));
	
	push();stroke(250,0,0);//rotateY(an*PI/180);
	rotateZ(PI);
	translate(00,-180,0);paraB(30);pop();
	stroke(0,0,0);
	}