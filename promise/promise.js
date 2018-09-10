/*let pro=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		
		//resolve("resolved")
	reject("cant connect")
		
	},2500)
	
})
pro.then((message)=>{
	console.log(message)
},(errmess)=>{
	console.log(errmess)
})
*/
asyncaw=(a,b)=>{
	return new Promise((resolve,reject)=>{
            if(typeof a == 'number' && typeof b== 'number'){
			console.log("I am called")
				resolve()
		}else{
			reject("err occured")
		}
	})
}
	function promtwo(a,b){
	  return new Promise((resolve, reject) => {
	    console.log(a - b)
			if(resolve){
	            resolve()	
	  	}else{
				reject("some error")
				}
	  })
	}

	function promtwo1(a,b){
	  return new Promise((resolve, reject) => {
	    console.log(a * b)
			if(resolve){
	            resolve()	
	  	}else{
				reject("some error")
				}
	  })
	}

promtwo1(4,10)
	
	.then(asyncaw(10,30))
	.then(promtwo(30,20))