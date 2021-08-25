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
	
	if (num1 === num2) {
		return('The numbers are the same');
	}

	if (num1 > num2){
		return('Please make sure the 1st number is lower then the 2nd number');	
	}


	for(let num = num2; num >= num1; num--){
		console.log(num);
	}

}