module.exports = function check(str, bracketsConfig) {
// your solution
	if (str.length%2===0) {
  		let strArray = str.split('');
		let stack = []; 
		
		for(var j = 0; j < strArray.length; j++){
   	 		for(var i = 0; i < bracketsConfig.length; i++){
   	   			//console.log(stack[stack.length - 1], '===', bracketsConfig[i][0], '&&', strArray[j],'===', bracketsConfig[i][1]);
   	 			if (stack[stack.length - 1] === bracketsConfig[i][0] && strArray[j] === bracketsConfig[i][1]) {
        			stack.pop();
      			} 
      			else {
                	//console.log(strArray[j],'===', bracketsConfig[i][0]);
                	if (strArray[j] === bracketsConfig[i][0]) {
                		stack.push(strArray[j]);
                	}
            	}
        	}
    	}
		//console.log = stack.length === 0;
		return stack.length === 0;
	} 
	return false;
}
