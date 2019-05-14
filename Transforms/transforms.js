
let ptX=[];let ptY=[];

function fillpts(n){
	for(let j=0;j<n;j++){ptX[j]=[];ptY[j]=[];}

for(let k=0;k<n;k++){ptX[k]=[10*k,0,0];ptY[k]=[0,10*k,0]}
}


function testL(n){
for(let j=0;j<n;j++){
line(ptX[n-j][0],ptX[n-j][1],ptX[n-j][2],ptY[j][0],ptY[j][1],ptY[j][2]);}
}

function sq1(x){
	return (.01)*x*x+3*x-5;
}

function testLSqS(n){
for(let j=0;j<n;j++){
line(ptX[n-j][0],ptX[n-j][1],ptX[n-j][2],ptY[j][0],sq1(ptY[j][1]),ptY[j][2]);}
}


function chgRot(){
rotVar++;
	
}


