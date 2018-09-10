asyncaw=(a,b)=>{
	return new Promise((resolve,reject)=>{
            if(resolve){
			console.log("I am called")
			
				resolve()
			.then(fun1())	
		}else{
			reject("err occured")
		}
		
	})
}
fun1=()=>{
	console.log("second")
}

asyncaw(2)

