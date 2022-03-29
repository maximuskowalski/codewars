function abbrevName(name){
	const initialCaps = name
  	.split(' ')
  	.map(names => names[0])
  	.join('.')
  	.toUpperCase()
  
  return initialCaps

}

abbrevName("Sam Harris")
