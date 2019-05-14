let t3D;let pts=[];

function setup(){
	can=createCanvas(1000,400,WEBGL);can.class("canbells");
	t3D=new logo3DXY(0,0,0);
	fillpts(20);
	background(200,200,0);
	strokeWeight(.5);
    pX=createP("testing pts"); 	
	c=select('#ch1');
	div0=select("#div0");div0.class("div0");
	div0.child(can);div0.child(c);div0.child(pX);
	frameRate(3);
	
	}
	
	let an=0;
	function draw(){
	background(200,200,0);
	//push();rotateX(PI*an/12);for(let j=0;j<9;j++){t3D.fd(100);t3D.rt(45);}pop();
	an++;
	t3D.poly(100,8);
	push();rotateY(an*PI/12);logoPts(12,t3D);pop();
}

let xch,ych;;

function logoPts(n,t){
	for(let j=0;j<n;j++){pts[j]=[];}
	for(let j=0;j<n;j++){t.fd(50);t.rt(360/n);
	xch=t.xpos();ych=t.ypos();
	pts[j].push(xch);pts[j].push(ych);pts[j].push(0);	
	}
for(let j=0;j<n;j++){
for(let k=0;k<n;k++){
	line(pts[j][0],pts[j][1],pts[j][2],pts[k][0],pts[k][1],pts[k][2]);
}}	
}
