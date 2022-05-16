function persistence(num) {
	let sum = 0;

	while (num.toString().length !== 1) {
		num = num
			.toString()
			.split("")
			.reduce((a, b) => a * b);
		sum++;
	}

	console.log(sum);
	return sum;
}

// function tests

persistence(39); //,3);
persistence(4); //,0);
persistence(25); //,2);
persistence(999); //,4);
