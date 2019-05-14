let ptA=[];

function paraB(n){

for(let j=0;j<=2*n;j++){ptA[j]=[];}

for(let j=0;j<=2*n;j++){
ptA[j]=[-n+j,.05*(-n+j)*(-n+j),0];ptA[j]=ptA[j].map(x=>6*x);
}	

for(let j=0;j<=n;j++){
line(ptA[j][0],ptA[j][1],ptA[j][2],ptA[n+j][0],ptA[n+j][1],ptA[n+j][2]);
}	
	
}