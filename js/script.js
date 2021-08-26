//Output
//createLoop(1,4)
/*
4
3
2
1
*/

//createLoop(4,3)
/* Please make sure the 1st number is lower
than the 2nd number */

/* createloop(5,5)
The numbers are the same
*/

function createLoop(num1,num2){
	if (num2 > num1) {
	for(let num = num2; num >= num1; num--){
		console.log(num);
	}
}
	else if (num1 == num2) {
		console.log('The numbers are the same');
	}

	else {
		console.log('Please make sure the 1st number is lower then the 2nd number');	
	}
	

}


// function createLoop(a,b){
	//if(b>a){
	//for(let i=b;i>=a;i--){console.log(i);}
	//}
	//else if(a==b){console.log("The numbers are the same");}
	//else{console.log("Please make sure that the 1st number is lower than the 2nd");}
//}