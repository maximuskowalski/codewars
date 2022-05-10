function yourFutureCareer() {
	let career = Math.random()*1
		console.log(career)
		if(career <= 0.32) {
			return 'FrontEnd Developer'
		}else if(career <= 0.65){
			return 'BackEnd Developer'
		}else{
			return 'Full-Stack Developer'
		}
}

yourFutureCareer();
