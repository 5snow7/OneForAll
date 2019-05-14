let xtest="test";
let k=0;
function addSq1(){
document.getElementById("par").innerHTML="sadf;lsdf";
}

function sqs(){
	for(let j=0;j<10;j++){
//can.rotate(j*3.1415/180);
can.rect(20+20*j, 50, 150, 100);

}

can.moveTo(20,20);can.lineTo(200,100);
can.stroke();
}


function addSq(){
can.rect(Math.random()*100,6*k,30,30);
can.stroke();
k++;
}


