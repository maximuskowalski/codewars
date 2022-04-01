function DNAtoRNA(dna) {
  // replace all 'T' with 'U'. Using modifier "g" will replace globally (all) and "i" will ignore case replacing either t or T
  console.log(dna.replace(/t/gi, 'U'))
  return dna.replace(/t/gi, 'U')
}


DNAtoRNA("TTTT") // = "UUUU")
DNAtoRNA("GCAT") // = "GCAU")
DNAtoRNA("GACCGCCGCC") // = "GACCGCCGCC")
